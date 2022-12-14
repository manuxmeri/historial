import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../servicio/medicamento.service';
import { Router } from '@angular/router';
import { Medicamento } from '../../modelos/medicamento.model';


@Component({
  selector: 'app-agregar-medicamento',
  templateUrl: './agregar-medicamento.page.html',
  styleUrls: ['./agregar-medicamento.page.scss'],
})
export class AgregarMedicamentoPage implements OnInit {

  constructor(private medicamentoService: MedicamentoService, private router: Router) { }

  ngOnInit() {
  }
  agregarNuevoMedicamento(id, nombre, capacidad){
    const PACI : Medicamento = {
      id: id.value,
      nombre: nombre.value,
      capacidad: capacidad.value
      
    }
    this.medicamentoService.agregarMedicamento(PACI)
    .subscribe(data =>{
      this.router.navigate(['/medicamentos'])
     
    })

  }
  
}
