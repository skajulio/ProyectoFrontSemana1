import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'home', component: DefaultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
