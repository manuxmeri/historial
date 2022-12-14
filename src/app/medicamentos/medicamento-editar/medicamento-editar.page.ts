import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/modelos/medicamento.model';
import { MedicamentoService } from '../../servicio/medicamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicamento-editar',
  templateUrl: './medicamento-editar.page.html',
  styleUrls: ['./medicamento-editar.page.scss'],
})
export class MedicamentoEditarPage implements OnInit {
  titulo='';
  id: any;
  medicamento = new Medicamento('','','');
  constructor(private medicamentoService: MedicamentoService, private r: Router, private route: ActivatedRoute,private navController: NavController,
    private alert: AlertController) { }


    ngOnInit() {
    
      this.route.paramMap.subscribe(paramMap => {
     const id = paramMap.get('id');
        this.medicamentoService.cargarMedicamento(id).subscribe( data => {
          this.medicamento = data
         
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
   this.medicamento.id
     peticion = this.medicamentoService.editarMedicamento(this.medicamento);
    
   peticion.subscribe(
     resp => {
       this.medicamento.id
         this.alerta('', this.medicamento.nombre,'Modificación exitosa');
      
       this.r.navigate(['/medicamentos']);
     }
   );
 }
}
