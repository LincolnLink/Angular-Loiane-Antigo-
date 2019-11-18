import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiroCursoComponent } from './primeiro-curso.component';

describe('PrimeiroCursoComponent', () => {
  let component: PrimeiroCursoComponent;
  let fixture: ComponentFixture<PrimeiroCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiroCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiroCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
