import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';


import { Paciente } from 'src/app/modelos/paciente.model';
import { RecetaI } from '../../interfaces/receta.interface';
import { Visita } from '../modelos/visita.model';
import { VisitaService } from '../servicio/visita.service';

@Component({
  selector: 'app-editar-visita',
  templateUrl: './editar-visita.page.html',
  styleUrls: ['./editar-visita.page.scss'],
})
export class EditarVisitaPage implements OnInit {
  titulo='';
  id: any;
 
  paciente : Paciente;
 
  visita = new  Visita('', '' , '', '','' );
 
  constructor(private visitaService: VisitaService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController) { }

  ngOnInit() {
    
   this.route.paramMap.subscribe(paramMap => {
      
   const id = paramMap.get('id');
      this.visitaService.cargarVisita(id).subscribe( data => {
        
       this.visita = data
       console.log(this.visita.id);
       console.log(this.visita.fkPaciente);
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
 console.log(this.visita.id);

   peticion = this.visitaService.putVisita(this.visita);
   console.log(this.visita.id);
   
 peticion.subscribe(
   resp => {
    this.r.navigate(['/']);
    console.log(this.visita.id);
    console.log(peticion);
  
     
       this.alerta('Editar Visita', this.visita.fecha,'Modificación exitosa');
    
   
   }
 );
}
}
