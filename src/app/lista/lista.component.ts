import { Component, OnInit, ViewChild } from '@angular/core';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';
// import { ListaAgregarComponent } from '../lista-agregar/lista-agregar.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  asignados:object[];
  listaDeEspera:object[];
  prueba:string="Prueba";
  constructor() { }

  ngOnInit() {
  }

  imprimirAsignados(){
    this.asignados=[
      {dependiente:"Julio Martínez", cliente:"Jairo Martínez"},
      {dependiente:"Franco Martínez", cliente:"Esther Leal"}, 
      {dependiente:"Omar Moreno", cliente:"Juanita Segovia"}
    ];
    let asignadosAGuardar=JSON.stringify(this.asignados);
    localStorage.setItem("Asignados", asignadosAGuardar);
    return this.asignados;
  }

  imprimirLista(){
    this.listaDeEspera=[
      {id:1, nombre:"María Francisca"},
      {id:2, nombre:"María Guadalupe"},
      {id:3, nombre:"Salvador Almaráz"},
      {id:4, nombre:"Ardian Ruvalcaba"},
      {id:5, nombre:"Linda Jimenes"},
      {id:6, nombre:"Jose Hernández"}
    ];
    return this.listaDeEspera;
  }

  mandarPersona(){
    return this.prueba;
  }

  actualizarLista(){
    let objeto:object;
    objeto={id: this.listaDeEspera.length++, nombre:"Jonatan"}
    this.listaDeEspera.push(objeto);
  }

  // @ViewChild(ListaAgregarComponent) listaAgregar:ListaAgregarComponent
}

