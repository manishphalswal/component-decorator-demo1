import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-property-decorator',
  templateUrl: './input-property-decorator.component.html',
  styleUrls: ['./input-property-decorator.component.scss']
})
export class InputPropertyDecoratorComponent implements OnInit {

  nameVal: string = "Manish";

  constructor() { }

  ngOnInit(): void {
  }

}
