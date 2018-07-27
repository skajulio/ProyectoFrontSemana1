import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-asignados',
  templateUrl: './lista-asignados.component.html',
  styleUrls: ['./lista-asignados.component.css']
})
export class ListaAsignadosComponent implements OnInit {
  @Input() asignados:object;
  constructor() { }

  ngOnInit() {
  }

  remover(elemento:string){
    let items = localStorage.getItem("Asignados");
    items = JSON.parse(items);
    console.log(items);
    for(let i of items){
      console.log(i.dependiente, elemento);
      let eval = i.dependiente;
      if(eval == elemento){
        i.cliente="";
        console.log(i);
      }
    }
    console.log(items);
    items = JSON.stringify(items);
    console.log(items);
    localStorage.removeItem("Asignados");
    localStorage.setItem("Asignados", items);
  }
}
