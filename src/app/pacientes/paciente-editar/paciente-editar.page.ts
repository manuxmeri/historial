import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/servicio/getapi.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'src/app/modelos/paciente.model';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.page.html',
  styleUrls: ['./paciente-editar.page.scss'],
})
export class PacienteEditarPage implements OnInit {
 
  titulo='';
  id: any;
  paciente = new Paciente('','','','','','');
  constructor(private getapiService: GetapiService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController) { }


    ngOnInit() {
    
      this.route.paramMap.subscribe(paramMap => {
     const id = paramMap.get('id');
        this.getapiService.cargarPaciente(id).subscribe( data => {
          this.paciente = data
         
      })
     
    })
  
  }
 

 async alerta (titulo: string, subtitulo: string, mensaje:string ){
   const alert = await this.alert.create({
     header: titulo,
     subHeader: subtitulo,
     message: mensaje,
     buttons: ['OK']
   });
   await alert.present();
 }

 guardar(){
   let peticion: Observable<any>;
   this.paciente.id
     peticion = this.getapiService.editarPaciente(this.paciente);
    
   peticion.subscribe(
     resp => {
       this.paciente.id
         this.alerta('Editar Paciente', this.paciente.nombre,'Modificación exitosa');
      
       this.r.navigate(['/pacientes']);
     }
   );
 }
}

