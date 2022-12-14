import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../servicio/receta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Receta } from '../modelos/receta.model';
import { Paciente } from 'src/app/modelos/paciente.model';
import { RecetaI } from '../../interfaces/receta.interface';
import { MedicamentoI } from 'src/interfaces/medicamento.interface';
import { MedicamentoService } from '../servicio/medicamento.service';
@Component({
  selector: 'app-editar-receta',
  templateUrl: './editar-receta.page.html',
  styleUrls: ['./editar-receta.page.scss'],
})
export class EditarRecetaPage implements OnInit {
  titulo='';
  id: any;
  medicamento:any;
selectMedicamento:String = '';
  receta = new  Receta("", '' , '', '','' ,'');
  medicamentos : MedicamentoI [] = [];
  medicinas:any;
  constructor(private recetaService: RecetaService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController, private medicamentoService:MedicamentoService) { }

  ngOnInit() {
    
   this.route.paramMap.subscribe(paramMap => {
      
   const id = paramMap.get('id');
      this.recetaService.cargarReceta(id).subscribe( data => {
        
       this.receta = data
       console.log(this.receta.id);
       console.log(this.receta.fkPaciente);
    })
   
  })
  this.getNombres();

}

getNombres(){
  this.medicamentoService.cargarMedicamentos()
  .subscribe(datos =>{
    console.log(datos);
    this.medicamentos = datos;
    //this.medicamentos = data
  }
    )
}

seleccionado(){
  console.log("medicamento -> ", this.receta.fkMedicamento);
 
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
  console.log("medicamento -> ", this.receta.fkMedicamento);
 
 let peticion: Observable<any>;
 console.log(this.receta.id);
 console.log(this.receta);
   peticion = this.recetaService.putReceta(this.receta);
   console.log(this.receta);
   console.log(this.receta.id);
   
 peticion.subscribe(
   resp => {
    this.r.navigate(['/']);
    console.log(this.receta.id);
    console.log(peticion);
    console.log(this.receta);
     
       this.alerta('Editar Receta', this.receta.dosis,'Modificación exitosa');
    
   
   }
 );
}
}
