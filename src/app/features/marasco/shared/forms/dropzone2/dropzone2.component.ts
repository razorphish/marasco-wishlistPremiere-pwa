import { Component, Output, Input, EventEmitter } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { finalize, tap } from 'rxjs/operators';

import { FirebaseStorageConfigOptions } from './firebase-storage-config-options.interface';

@Component({
  selector: 'dropzone2-upload',
  templateUrl: './dropzone2.component.html',
  styleUrls: ['./dropzone2.component.scss']
})
export class Dropzone2Component {
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  @Output() imageUpload = new EventEmitter<string>();
  @Input() dbName: string;
  @Input() configOptions: FirebaseStorageConfigOptions;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(
    private _storage: AngularFireStorage,
    private _db: AngularFirestore
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    let path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    let customMetadata = {};

    if (!!this.configOptions) {
      path = `${this.configOptions.path}${file.name}`;
      if (!!this.configOptions.meta) {
        customMetadata = this.configOptions.meta;
      }
    }

    const fileRef = this._storage.ref(path);

    // The main task
    this.task = this._storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap((snap) => {
        if (!!this.dbName) {
          if (snap.bytesTransferred === snap.totalBytes) {
            // Update firestore on completion
            this._db
              .collection(this.dbName)
              .add(
                Object.assign({ url: path, size: snap.totalBytes }, customMetadata)
              );
          }
        }
      }),
      finalize(() => this.onImageUploadSuccess(fileRef))
    );
  }

  onImageUploadSuccess(fileRef) {
    this.downloadURL = fileRef.getDownloadURL();
    this.downloadURL.subscribe((data) => {
      this.imageUpload.emit(data);
    });
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
