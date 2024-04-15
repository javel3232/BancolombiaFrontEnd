import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent implements OnInit{

  cuenta :Cuenta = new Cuenta();

  constructor(private cuentaServicio:CuentaService,private router:Router ){};

  ngOnInit(): void {
   
  }

  guardarCuenta() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas crear la cuenta',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#00C389',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, crear cuenta',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.value) {
        this.cuentaServicio.crearCuenta(this.cuenta).subscribe(dato => {
          console.log(dato);
          this.irAListaDeCuentas();
          Swal.fire(
            'Cuenta creada',
            'La cuenta ha sido creada con éxito',
            'success'
          );
        });
      }
    });
  }
  
  irAListaDeCuentas(){
    this.router.navigate(["/"])
  }
  
  onSubmit(){
    
  this.guardarCuenta();
   

  }

}
