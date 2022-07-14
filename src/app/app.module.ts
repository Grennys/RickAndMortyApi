import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/public/nav/nav.component';
import { FooterComponent } from './component/public/footer/footer.component';
import { LoginComponent } from './component/seguridad/login/login.component';
import { SidebarComponent } from './component/public/sidebar/sidebar.component';
import { PersonajesComponent } from './component/consultas/personajes/personajes.component';
import { InicioComponent } from './component/consultas/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { FotosComponent } from './component/consultas/fotos/fotos.component';
import { QuepersonajeComponent } from './component/consultas/quepersonaje/quepersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,    
    SidebarComponent,
    PersonajesComponent,
    InicioComponent,
    FotosComponent,
    QuepersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
