import { Directive, Input, Output, ElementRef, EventEmitter, HostListener } from "@angular/core";

import * as Dropzone from "dropzone";
Dropzone.autoDiscover = false;
@Directive({
  selector: "[saDropzone]"
})
export class DropzoneDirective {
  @Input() saDropzone: any;
  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();

  private dropzone: any;

  constructor(private el: ElementRef) {
    this.initDropzone();
  }

  initDropzone() {
    this.dropzone = new Dropzone(this.el.nativeElement, this.saDropzone || {
      url: 'http://respondto.it/',
    });
  }
}
