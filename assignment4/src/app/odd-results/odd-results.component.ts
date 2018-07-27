import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-odd-results",
  templateUrl: "./odd-results.component.html",
  styleUrls: ["./odd-results.component.css"]
})
export class OddResultsComponent implements OnInit {
  @Input() number: number;

  constructor() {}

  ngOnInit() {}
}
