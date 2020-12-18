import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpeningModalComponent } from './opening-modal.component';

describe('OpeningModalComponent', () => {
  let component: OpeningModalComponent;
  let fixture: ComponentFixture<OpeningModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
