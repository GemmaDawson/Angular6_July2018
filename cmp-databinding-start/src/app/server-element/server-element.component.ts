import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck
} from "@angular/core";
// import { ViewEncapsulation } from "@angular/compiler/src/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //but this the default and doesn't need to be explictly stated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngDoCheck() {
    console.log("do check called");
  }
}
