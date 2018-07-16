import { Component, OnInit } from "@angular/core";

@Component({
  // adding square brackets changes the selector to be an attribute
  // this breaks the app as the code does not recognise <app-servers> anymore
  // adding line 7 in app.component.html fixes the app
  selector: "[app-servers]",
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
