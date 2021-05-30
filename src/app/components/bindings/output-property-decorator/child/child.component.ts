import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-output-prop-dec-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() counter: number = 0; //Added for two way data binding 
  // @Output() counterEvent: EventEmitter<string> = new EventEmitter<string>(); //commented for two way data binding 

  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>()  //Added for two way data binding 

  constructor() { }

  ngOnInit() { }

  buttonClicked(counterType: string) {
    console.log(counterType);
    counterType === 'INC' ? this.counter++ : this.counter--;
    // this.counterEvent.emit(counterType); //commented for two way data binding 
    this.counterChange.emit(this.counter); //Added for two way data binding 
  }
}
