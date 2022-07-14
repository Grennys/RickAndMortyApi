import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './component/consultas/fotos/fotos.component';
import { InicioComponent } from './component/consultas/inicio/inicio.component';
import { PersonajesComponent } from './component/consultas/personajes/personajes.component';
import { QuepersonajeComponent } from './component/consultas/quepersonaje/quepersonaje.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'fotos',
    component: FotosComponent
  },
  {
    path: 'quepersonajeeres',
    component: QuepersonajeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
