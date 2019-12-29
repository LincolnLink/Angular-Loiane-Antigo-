import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataBindingComponent } from './data-binding.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { DomViewChildComponent } from '../dom-view-child/dom-view-child.component';
import { CicloComponent } from '../ciclo/ciclo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingComponent, 
        OutputPropertyComponent, 
        InputPropertyComponent,
        DomViewChildComponent,
        CicloComponent ],
      imports:[ FormsModule ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
