import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaComponent } from './lista/lista.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DefaultComponent } from './default/default.component';
import { ListaAsignadosComponent } from './lista-asignados/lista-asignados.component';
import { ListaAgregarComponent } from './lista-agregar/lista-agregar.component';
import { ListaListaDeEsperaComponent } from './lista-lista-de-espera/lista-lista-de-espera.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ConfiguracionComponent,
    LoginComponent,
    MainComponent,
    DefaultComponent,
    ListaAsignadosComponent,
    ListaAgregarComponent,
    ListaListaDeEsperaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
