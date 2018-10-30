import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCT3_kuHsdEbxcEltXKjDTOmM_HI54dwTk",
      authDomain: "udemy-recipe-book-9db59.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
