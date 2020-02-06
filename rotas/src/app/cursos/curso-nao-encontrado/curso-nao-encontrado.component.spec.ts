import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado.component';

describe('CursoNaoEncontradoComponent', () => {
  let component: CursoNaoEncontradoComponent;
  let fixture: ComponentFixture<CursoNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
