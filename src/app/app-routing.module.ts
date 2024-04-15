import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ListaCuentaComponent } from './lista-cuenta/lista-cuenta.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { CuentaMovimientosComponent } from './cuenta-movimientos/cuenta-movimientos.component';
import { RegistrarMovimientoComponent } from './registrar-movimiento/registrar-movimiento.component';

const routes: Routes = [
  {path:'cuentas' , component:ListaCuentaComponent},
  {path:'',redirectTo:'cuentas',pathMatch:'full'},
  {path:'crear-cuenta',component:CrearCuentaComponent},
  {path:'cuenta-movimeintos/:numeroCuenta',component:CuentaMovimientosComponent},
  {path:'registrar-movimientos',component:RegistrarMovimientoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
