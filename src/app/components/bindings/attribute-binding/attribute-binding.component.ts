import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss']
})
export class AttributeBindingComponent implements OnInit {

  numbers = [1, 2];
  actionName = "Alert";
  
  constructor() { }

  ngOnInit(): void {
  }

}
