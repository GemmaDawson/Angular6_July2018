import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displayData = false;
  userPassword: string = "Secret Password = tuna";

  onDisplayData() {
    this.displayData = !this.displayData;
    // this.displayData;
  }
}
