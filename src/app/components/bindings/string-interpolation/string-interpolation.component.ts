import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent implements OnInit {

  message = 'Template for String interpolation';
  constructor() { }

  getMessage() {
    console.log('String Inerpolation-getMessage Called');
    return this.message;
  }

  ngOnInit(): void {
  }

}
