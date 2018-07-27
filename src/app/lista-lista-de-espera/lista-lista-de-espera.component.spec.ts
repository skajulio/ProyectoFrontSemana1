import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaListaDeEsperaComponent } from './lista-lista-de-espera.component';

describe('ListaListaDeEsperaComponent', () => {
  let component: ListaListaDeEsperaComponent;
  let fixture: ComponentFixture<ListaListaDeEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaListaDeEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaListaDeEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
