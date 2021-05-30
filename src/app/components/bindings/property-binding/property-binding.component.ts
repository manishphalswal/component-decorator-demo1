import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  message = 'Template for Property Binding';
  constructor() { }

  getMessage() {
    console.log('Property Binding-getMessage Called');
    return this.message;
  }

  ngOnInit(): void {
  }

}
