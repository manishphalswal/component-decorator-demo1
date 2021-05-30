import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app1.component.scss'],
  styles: [`
    p {color: blue;}
  `]
})
export class AppComponent {
  title = 'component-decorator-demo1';
}
