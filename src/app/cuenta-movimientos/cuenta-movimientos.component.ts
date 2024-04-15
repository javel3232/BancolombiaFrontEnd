import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { ActivatedRoute } from '@angular/router';
import { CuentaService } from '../cuenta.service';
import html2canvas from 'html2canvas';
import  jsPDF from 'jspdf';

import 'jspdf-autotable';
import Swal from 'sweetalert2';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { ViewChild, ElementRef } from '@angular/core'





@Component({
  selector: 'app-cuenta-movimientos',
  templateUrl: './cuenta-movimientos.component.html',
  styleUrl: './cuenta-movimientos.component.css'
})
export class CuentaMovimientosComponent implements OnInit {

  numeroCuenta:string;
  titular:string;
  cuenta : Cuenta;
  cuentas:any[];
  movimientos: any[];

  @ViewChild('tablaMovimientos') tablaMovimientos: ElementRef;
  constructor(private route:ActivatedRoute,private cuentaServicio:CuentaService){

  }
  generarPDF(): void {
    const doc = new jsPDF();
    
    const tabla =this.tablaMovimientos.nativeElement;    
    html2canvas(tabla).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');     
      doc.addImage(imgData, 'PNG', 10, 10, 180, tabla.offsetHeight / 5);
      doc.save('movimientos_cuenta_encriptado.pdf');
    });
  }

  ngOnInit(): void {

    this.numeroCuenta=this.route.snapshot.params['numeroCuenta'];
    this.cuenta = new Cuenta();
    this.cuentaServicio.obtenrMovimientoCuenta(this.numeroCuenta).subscribe(dato=>{
      this.movimientos = dato;

      Swal.fire(`Movimientos de la Cuenta ${this.numeroCuenta}`);
    })

   
  }

}

