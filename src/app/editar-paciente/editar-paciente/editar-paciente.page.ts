import { Component, OnInit } from '@angular/core';
import { GetapiService } from '../../servicio/getapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from '../../modelos/paciente.model';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { Visita } from '../../modelos/visita.model';
import { VisitaService } from '../../servicio/visita.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.page.html',
  styleUrls: ['./editar-paciente.page.scss'],
})
export class EditarPacientePage implements OnInit {
id : any;
  paciente : Visita;
  constructor(private getapiService: VisitaService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController) { }


ngOnInit() {
  
}

}
