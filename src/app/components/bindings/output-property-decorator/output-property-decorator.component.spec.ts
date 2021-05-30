import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertyDecoratorComponent } from './output-property-decorator.component';

describe('OutputPropertyDecoratorComponent', () => {
  let component: OutputPropertyDecoratorComponent;
  let fixture: ComponentFixture<OutputPropertyDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPropertyDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertyDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
