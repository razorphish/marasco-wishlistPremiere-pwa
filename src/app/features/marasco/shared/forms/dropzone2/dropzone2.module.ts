// https://github.com/angular/angularfire2/blob/master/docs/storage/storage.md
// https://medium.com/codingthesmartway-com-blog/firebase-cloud-storage-with-angular-394566fd529

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZone2Directive } from './dropzone2.directive';
import { Dropzone2Component } from './dropzone2.component';
import { FileSizePipe } from './dropzone2.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [DropZone2Directive, Dropzone2Component, FileSizePipe],
  exports: [Dropzone2Component]
})
export class Dropzone2Module {}
