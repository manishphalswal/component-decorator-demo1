import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-property-decorator',
  templateUrl: './output-property-decorator.component.html',
  styleUrls: ['./output-property-decorator.component.scss']
})
export class OutputPropertyDecoratorComponent implements OnInit {

  counter: number = 0;
  classType: string = "positive";

  title: string = "";

  constructor() { }

  updateCounter(operationType: string) {
    operationType === 'INC' ? this.counter++ : this.counter--;
    this.classType = this.counter >= 0 ? "positive" : "negative";
    console.log(this.counter);
  }

  ngOnInit(): void {
  }

}
