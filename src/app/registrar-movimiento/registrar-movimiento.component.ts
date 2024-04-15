import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../movimiento';
import { MovimientoService } from '../movimiento.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registrar-movimiento',
  templateUrl: './registrar-movimiento.component.html',
  styleUrl: './registrar-movimiento.component.css'
})
export class RegistrarMovimientoComponent implements OnInit {

  movimiento: Movimiento = new Movimiento;


  constructor(private movimientoServicio:MovimientoService,private router:Router){}

  ngOnInit(): void {
   
  }

  guardarMovimiento() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Confirma si deseas registrar el movimiento',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#9874ea;',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, registrar movimiento',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      }
    }).then((result) => {
      if (result.value) {
        this.movimientoServicio.registrarMovimiento(this.movimiento).subscribe(dato => {
          console.log(dato);
          this.irAListaDeCuentas();
          Swal.fire(
            'Movimiento registrado',
            'El movimiento ha sido registrado con éxito',
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

    this.guardarMovimiento();
  

  }

}
