import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  animal = "tiger";

  constructor() { }

  showButtonClickedAlert() {
    alert('Button Clicked.');
  }

  showEnterKeyPressedAlert(eventObj: any) {
    if (eventObj.code === 'Enter') {
      alert('Enter key pressed');
    }
  }

  ngOnInit(): void {
  }

}
