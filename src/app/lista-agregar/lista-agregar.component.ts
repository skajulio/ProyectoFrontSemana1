import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-agregar',
  templateUrl: './lista-agregar.component.html',
  styleUrls: ['./lista-agregar.component.css']
})
export class ListaAgregarComponent implements OnInit {
  @Input() persona: string;
  constructor() { }

  ngOnInit() {
  }
  actualizarLista(){
    console.log("Actualizar");
  }
}
