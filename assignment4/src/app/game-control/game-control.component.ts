import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  // displayText: string = "Click the START button to begin!";
  // displayNumber: number;

  constructor() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.displayNumber) {
  //     this.displayText = "It has begun and the number is " + this.displayNumber;
  //     return this.displayText;
  //   }
  // }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    // this.displayNumber = 0;
    // this.displayText = "It has begun and the number is " + this.displayNumber;
    // return this.displayText;
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
