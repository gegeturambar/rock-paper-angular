import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public value = "";
  @Input() playerColor: string;
  @Input() playerClass: string;
  @Output() shufflingDone: EventEmitter<Object> = new EventEmitter();

  startShuffling() {
    var elements = ["rock","paper","scissors"];
    var shufflingCounter = 0; 
		var SHUFFLING_MAX = 30;
		var interval = setInterval(
			() => {
				if (shufflingCounter < SHUFFLING_MAX) {
					var randomIndex = Math.floor(Math.random() * 3); 
					this.value = elements[randomIndex];
					shufflingCounter++;
				}
				else {
					clearInterval(interval);
          
					this.shufflingDone.next({playerColor: this.playerColor, element:this.value});
				}
			},
			100
		);
  }

  constructor() { }

  ngOnInit() {
  }

}
