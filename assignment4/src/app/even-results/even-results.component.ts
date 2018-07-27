import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-even-results",
  templateUrl: "./even-results.component.html",
  styleUrls: ["./even-results.component.css"]
})
export class EvenResultsComponent implements OnInit {
  @Input() number: number;

  constructor() {}

  ngOnInit() {}
}
