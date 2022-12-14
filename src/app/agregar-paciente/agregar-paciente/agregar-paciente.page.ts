import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../servicio/getapi.service';
import { Router } from '@angular/router';
import { Paciente } from '../../modelos/paciente.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agregar-paciente',
  templateUrl: './agregar-paciente.page.html',
  styleUrls: ['./agregar-paciente.page.scss'],
})
export class AgregarPacientePage implements OnInit {

  constructor(private getapiService: GetapiService, private router: Router ) { }

  ngOnInit() {
  }

  agregarNuevoPaciente(id, nombre, apellido, direccion, fechanaci, edad){
    const PACI : Paciente = {
      id: id.value,
      nombre: nombre.value,
      apellido: apellido.value,
      direccion: direccion.value,
      fechanaci: fechanaci.value,
      edad: edad.value 
    }
    this.getapiService.agregarPaciente(PACI)
    .subscribe(data =>{
      this.router.navigate(['/pacientes'])
     
    })

  }
  
}
