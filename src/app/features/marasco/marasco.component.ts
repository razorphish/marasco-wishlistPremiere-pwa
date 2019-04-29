import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class MarascoComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  title = 'sa';
}
