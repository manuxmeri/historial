import { Component, OnInit } from '@angular/core';
import { Visita } from '../modelos/visita.model';
import { VisitaService } from '../servicio/visita.service';
import { Router } from '@angular/router';
import { Paciente } from '../modelos/paciente.model';


@Component({
  selector: 'app-agregar-visita',
  templateUrl: './agregar-visita.page.html',
  styleUrls: ['./agregar-visita.page.scss'],
})
export class AgregarVisitaPage implements OnInit {

  constructor(private VisitaService: VisitaService, private router: Router) { }
paciente: Paciente

  ngOnInit() {
  }
 async agregarNuevaVisita(id, fkPaciente , diagnosticoEnfermedad, fecha, hora){
  
    const Visi : Visita = {
    id: id.value,
      fkPaciente: fkPaciente.value,
      diagnosticoEnfermedad: diagnosticoEnfermedad.value,
      fecha: fecha.value,
      hora: hora.value,
   
      
    }
    this.VisitaService.postVisita(Visi)
    .subscribe(data =>{
      console.log(data);
      this.router.navigate(['/'])
   
    })

  }
}
