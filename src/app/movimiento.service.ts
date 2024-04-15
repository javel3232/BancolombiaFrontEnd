import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimiento } from './movimiento';
import { Observable } from 'rxjs';
import { Cuenta } from './cuenta';

@Injectable({
  providedIn: 'root'
})
export class MovimientoService {

  private UrlDBM ="http://localhost:8010/movimiento/movimientos";

  constructor(private httpClient : HttpClient) {  }

  registrarMovimiento(movimiento:Movimiento): Observable<Object>{
    return this.httpClient.post(`${this.UrlDBM}`,movimiento);
  }
}
