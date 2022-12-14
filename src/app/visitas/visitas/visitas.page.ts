import { Component, OnInit } from '@angular/core';
import { VisitaService } from '../../servicio/visita.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { VisitaI } from 'src/interfaces/visita.interface';
import { GetapiService } from '../../servicio/getapi.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  id:any;
  titulo='';
  nombre='';
  paciente : PacienteI;
  visitas : VisitaI [] = [];;
  constructor( private router: Router,
    private route: ActivatedRoute, http: HttpClient, private navController: NavController, private getapiService :GetapiService ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.refresh();
  }
  refresh (){
    this.titulo = '';
    this.getapiService.getVisitasPaciente(this.id).subscribe(
      resp => {
        if (resp.length === 0){
          this.titulo = "No existen visitas registradas";
        }else{
          this.visitas = resp;
          this.titulo =`${this.visitas[0].fkPaciente} ${this.visitas[0].fecha}`;
        }
      }
    );
  }
}
