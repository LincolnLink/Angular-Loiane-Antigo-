import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroComponent } from './primeiro.component';

describe('PrimeiroComponent', () => {
  let component: PrimeiroComponent;
  let fixture: ComponentFixture<PrimeiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
