import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ChatComponent } from './components/chat/chat.component';
import { TitleComponent } from './components/chat/title/title.component';
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/bindings/property-binding/property-binding.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { InputPropertyDecoratorComponent } from './components/bindings/input-property-decorator/input-property-decorator.component';
import { OutputPropertyDecoratorComponent } from './components/bindings/output-property-decorator/output-property-decorator.component';
import { ChildComponent as InputPropertyDecoratorChildComponent } from './components/bindings/input-property-decorator/child/child.component';
import { ChildComponent as OutputPropertyDecoratorChildComponent } from './components/bindings/output-property-decorator/child/child.component';
import { FormsModule } from '@angular/forms';
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/bindings/style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChatComponent,
    TitleComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    InputPropertyDecoratorComponent,
    OutputPropertyDecoratorComponent,
    InputPropertyDecoratorChildComponent,
    OutputPropertyDecoratorChildComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
