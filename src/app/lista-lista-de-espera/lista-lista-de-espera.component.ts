import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-lista-de-espera',
  templateUrl: './lista-lista-de-espera.component.html',
  styleUrls: ['./lista-lista-de-espera.component.css']
})
export class ListaListaDeEsperaComponent implements OnInit {
  @Input() listaDeEspera:object;
  constructor() { }

  ngOnInit() {
  }
}
