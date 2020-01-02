import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCustomizadasComponent } from './diretiva-customizadas.component';

describe('DiretivaCustomizadasComponent', () => {
  let component: DiretivaCustomizadasComponent;
  let fixture: ComponentFixture<DiretivaCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
