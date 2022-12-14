import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { GetapiService } from '../../servicio/getapi.service';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { Paciente } from '../../modelos/paciente.model';
import { Visita } from '../../modelos/visita.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {
pacientes : PacienteI [] = [];
textoBuscar='';
  constructor(private getapiService: GetapiService, private router: Router,private navController: NavController,
    private alert: AlertController) { }
    paciente : Paciente;
    visita : Visita;

  ngOnInit() {
    this.getapiService.cargarPacientes()
    .subscribe(data =>{
      this.pacientes = data
    }
      )
  }
  
  ionViewWillEnter(){
  this.getapiService.cargarPacientes()
  .subscribe(data =>{
    this.pacientes = data
  }
    )
}
onSearchChange(event){
  this.textoBuscar = event.detail.value;
}
  agregarPaciente(){
this.router.navigate(['/agregar-paciente'])
  }
 cargarPaciente(){
    this.router.navigate(['/info-pacientes'])
      }
      cargarVisitadePaciente(){
        this.router.navigate(['/info-pacientes'])
          }
          gestion(){
            this.router.navigate(['/pacientes/paciente-editar',-1]);
          }
  
async borrar (paciente, i) {
            const nombre = `${ paciente.nombre } ${ paciente.apellido }`;
            const alert = await this.alert.create(
              {
                header: 'Peligro!!',
                message: `¿Seguro(a) de borrar al paciente ?<br><strong>${nombre}</strong></br>`,
                buttons: [
                  {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (resp) =>{
        
                    }
                  },
                  {
                    text: 'Confirmar',
                    handler: (resp) =>{
                      this.getapiService.deletePaciente(paciente.id).subscribe(
                        resp => {
                          console.log(resp);
                          this.pacientes.splice(i,1);
                        },
                        err => console.log(err)
                      );
                    }
                  }
                ]
              }
            );
            await alert.present();
          }    
        
}
