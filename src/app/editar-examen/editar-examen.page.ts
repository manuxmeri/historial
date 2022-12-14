import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from '../modelos/examen.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Paciente } from 'src/app/modelos/paciente.model';
import { ExamenService } from '../servicio/examen.service';


@Component({
  selector: 'app-editar-examen',
  templateUrl: './editar-examen.page.html',
  styleUrls: ['./editar-examen.page.scss'],
})
export class EditarExamenPage implements OnInit {
  titulo='';
  id: any;
 
  paciente : Paciente;
 
  examen = new  Examen('', '' , '', '','','','','','','');
 
  constructor(private examenService: ExamenService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController) { }

  ngOnInit() {
    
   this.route.paramMap.subscribe(paramMap => {
      
   const id = paramMap.get('id');
      this.examenService.cargarExamen(id).subscribe( data => {
        
       this.examen = data
       console.log(this.examen.id);
       console.log(this.examen.fkPaciente);
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
 

peticion = this.examenService.putExamen(this.examen);

peticion.subscribe(
   resp => {
    this.r.navigate(['/']);
    
  
     
       this.alerta('Editar Examen', this.examen.sintomas,'Modificación exitosa');
    
   
   }
 );
}

}
