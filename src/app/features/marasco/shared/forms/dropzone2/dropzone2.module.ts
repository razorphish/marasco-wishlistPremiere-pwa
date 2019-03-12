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
