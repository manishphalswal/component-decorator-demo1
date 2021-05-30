import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertyDecoratorComponent } from './input-property-decorator.component';

describe('InputPropertyDecoratorComponent', () => {
  let component: InputPropertyDecoratorComponent;
  let fixture: ComponentFixture<InputPropertyDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertyDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertyDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
