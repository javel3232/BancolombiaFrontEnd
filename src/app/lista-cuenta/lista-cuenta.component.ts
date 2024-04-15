import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../cuenta';
import { CuentaService } from '../cuenta.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-cuenta',
  templateUrl: './lista-cuenta.component.html',
  styleUrl: './lista-cuenta.component.css'
})
export class ListaCuentaComponent implements OnInit {

  cuentas: Cuenta[];

  constructor(private cuentaServicio: CuentaService, private router: Router) { };

  ngOnInit(): void {
    this.ontenerCuentas();
  }

  eliminarCuenta(numeroCuenta: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas eliminar la Cuenta',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.value) {
        this.cuentaServicio.eliminarCuenta(numeroCuenta).subscribe(dato => {
          console.log(dato);
          this.ontenerCuentas();
          Swal.fire(
            'Cuenta eliminada',
            'La Cuenta ha sido eliminada con éxito',
            'success'
          );
        });
      }
    });
  }
  
  
  

  private ontenerCuentas() {
    this.cuentaServicio.obtenrListaCuentas().subscribe(dato => {
      this.cuentas = dato;
    });
  }

  verMovimeintosDeLaCuenta(numeroCuenta: string) {
    this.router.navigate(['cuenta-movimeintos', numeroCuenta])
  }


}
