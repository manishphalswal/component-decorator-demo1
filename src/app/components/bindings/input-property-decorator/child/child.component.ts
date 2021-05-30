import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-prop-dec-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
