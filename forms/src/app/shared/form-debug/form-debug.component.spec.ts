import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormDebugComponent } from './form-debug.component';

describe('FormDebugComponent', () => {
  let component: FormDebugComponent;
  let fixture: ComponentFixture<FormDebugComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDebugComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDebugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
