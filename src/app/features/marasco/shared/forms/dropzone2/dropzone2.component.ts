import { Component, Output, Input } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';

import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { finalize, tap } from 'rxjs/operators';

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
  @Output() downloadURL: Observable<string>;
  @Input() dbName: string;
  @Input() document: any;
  @Input() meta: any;

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
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = this.meta || {};

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
              .add(Object.assign({ url: path, size: snap.totalBytes }, this.meta));
          }
        }
      }),
      finalize(() => (this.downloadURL = fileRef.getDownloadURL()))
    );
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
}
