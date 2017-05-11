import { Component } from '@angular/core';
import { PlayerComponent } from "./player/player.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public gameResult="";
  private shufflingResults = new Array();

  doStartGame(playerOne: PlayerComponent,playerTwo: PlayerComponent){
    this.shufflingResults = new Array();
    this.gameResult = "";
    playerOne.startShuffling();
    playerTwo.startShuffling();
  }

  onElementSelected(playerResult){
    this.shufflingResults.push(playerResult);
    if(this.shufflingResults.length == 2){
      this.gameResult = this.establishTheWinner();
    }
  }

  establishTheWinner(){
    if (this.shufflingResults[0].element == this.shufflingResults[1].element) {
			return "it's a draw !";
		}
		if(((this.shufflingResults[0].element == "rock") && (this.shufflingResults[1].element == "scissors")) 
			|| ((this.shufflingResults[0].element == "scissors") && (this.shufflingResults[1].element == "paper")) 
			|| ((this.shufflingResults[0].element == "paper") && (this.shufflingResults[1].element == "rock"))) {
			return this.shufflingResults[0].playerColor + " wins !!!";
		}
		return this.shufflingResults[1].playerColor + " wins !!!";
  }
}
