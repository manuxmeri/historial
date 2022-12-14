import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../servicio/getapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../modelos/paciente.model';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Visita } from '../../modelos/visita.model';


@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.page.html',
  styleUrls: ['./info-pacientes.page.scss'],
})
export class InfoPacientesPage implements OnInit {
paciente : Paciente;
visita : Visita;
  constructor( private getapiService: GetapiService, private router: Router,
    private activatedRoute: ActivatedRoute, http: HttpClient, private navController: NavController ) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
   const id = paramMap.get('pacienteId');
      this.getapiService.cargarPaciente(id).subscribe( data => {
        this.paciente = data
       
    })
   
  })

}




editar (paciente){
  this.navController.navigateForward(['/pacientes/paciente-editar',paciente.id]);

}
cargarVisita(){
  this.navController.navigateForward(['/pacientes/visitas'])
    }

}
