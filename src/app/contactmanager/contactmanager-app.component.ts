import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactmanager-app',
  template: `
    <app-sidenav></app-sidenav>
  `,
  styleUrls: ['./contactmanager-app.component.scss']
})
export class ContactmanagerAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
