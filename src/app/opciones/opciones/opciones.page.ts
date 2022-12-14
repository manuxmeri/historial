import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Paciente } from '../../modelos/paciente.model';
import { Visita } from '../../modelos/visita.model';
import { VisitaI } from '../../../interfaces/visita.interface';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage implements OnInit {
visita : VisitaI;
  constructor( private router: Router, private navController:NavController) { }

  ngOnInit() {
    
  }
  
      cargarVisita(visita){
        this.router.navigate(['/pacientes/visitas',visita.id]);
      }
    
}
