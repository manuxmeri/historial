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
  selector: 'app-agregar-receta',
  templateUrl: './agregar-receta.page.html',
  styleUrls: ['./agregar-receta.page.scss'],
})
export class AgregarRecetaPage implements OnInit {
  titulo='';
  id: any;
  medicamento:any;
selectMedicamento:String = '';
  paciente : Paciente;
 recetas = new  Receta("", '' , '', '','' ,'');
  receta = new  Receta("", '' , '', '','' ,'');
  medicamentos : MedicamentoI [] = [];
  medicinas:any;
  constructor(private recetaService: RecetaService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController, private medicamentoService:MedicamentoService) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
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

agregarNuevoPaciente(id, fechaReceta, apellido, nota, fkPaciente, fkMedicamento){
  const PACI : Receta = {
    id: id.value,
    fechaReceta: fechaReceta.value,
    dosis: apellido.value,
    nota: nota.value,
    fkPaciente: this.id,
    fkMedicamento: fkMedicamento.value 
  }
  this.recetaService.postReceta(PACI)
  .subscribe(data =>{
    console.log(PACI);
    this.alerta('Agregar Receta', this.receta.dosis,'Modificación exitosa');
    this.r.navigate(['/pacientes'])
   
  })

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
   peticion = this.recetaService.postReceta(this.receta);
   console.log(this.receta);
   console.log(this.receta.id);
   this.r.navigate(['/']);
 peticion.subscribe(
   resp => {
    console.log(this.receta.id);
    console.log(peticion);
    console.log(this.receta);
     
       this.alerta('Agregar Receta', this.receta.dosis,'Modificación exitosa');
    
   
   }
 );
}
}
