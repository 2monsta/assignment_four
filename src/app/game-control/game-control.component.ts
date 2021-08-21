import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval :any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }


  onStartClick(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1)
      this.lastNumber++
    }, 1000)
  }


  onStopClick(){
    clearInterval(this.interval);
  }

}
