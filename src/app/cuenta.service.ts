import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from './cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  private UrlDB ="http://localhost:8010/cuenta/cuentas";

  constructor(private httpClient : HttpClient) {  }

  obtenrListaCuentas():Observable<Cuenta[]>{
    return this.httpClient.get<Cuenta[]>(`${this.UrlDB}`);
  }

  crearCuenta(cuenta:Cuenta):Observable<Object>{
    return this.httpClient.post(`${this.UrlDB}`,cuenta);
  }

  actualizarCuenta(numeroCuenta :string,cuenta:Cuenta):Observable<any>{
    return this.httpClient.post<any>(this.UrlDB + `${numeroCuenta}`,cuenta);
  }

  obtenrMovimientoCuenta(numeroCuenta :string):Observable<any>{
    return this.httpClient.get<any>(this.UrlDB + `/${numeroCuenta}/movimientos`);
  } 
 
  eliminarCuenta(numeroCuenta:string):Observable<any>{
    return this.httpClient.delete<any>(this.UrlDB + `/${numeroCuenta}`);
  }
}
