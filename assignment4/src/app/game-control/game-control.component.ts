import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent {
  displayText: string = "Click the START button to begin!";

  onStartGame() {
    return (this.displayText = "It has begun!");
  }

  onStopGame() {
    return (this.displayText = "Game Over! Click the START button to begin!");
  }
}
