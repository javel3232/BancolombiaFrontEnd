import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './login/login/login.component';
import { ListaCuentaComponent } from './lista-cuenta/lista-cuenta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { FormsModule } from '@angular/forms';
import { CuentaMovimientosComponent } from './cuenta-movimientos/cuenta-movimientos.component';
import { RegistrarMovimientoComponent } from './registrar-movimiento/registrar-movimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,   
    LoginComponent,
    ListaCuentaComponent,
    CrearCuentaComponent,
    CuentaMovimientosComponent,
    RegistrarMovimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
