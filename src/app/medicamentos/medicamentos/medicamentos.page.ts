import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../servicio/medicamento.service';
import { Router } from '@angular/router';
import { MedicamentoI } from '../../../interfaces/medicamento.interface';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {
  medicamentos : MedicamentoI [] = [];
  constructor( private medicamentoService: MedicamentoService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.medicamentoService.cargarMedicamentos()
    .subscribe(data =>{
      this.medicamentos = data
    }
      )
  }
  ionViewWillEnter(){
    this.medicamentoService.cargarMedicamentos()
    .subscribe(data =>{
      this.medicamentos = data
    }
      )
  }
  agregarMedicamento(){
    this.router.navigate(['/agregar-medicamento'])
      }
      cargarMedicamento(){
        this.router.navigate(['/info-medicamento'])
          }
          async borrar (medicamentos, i) {
            const nombre = `${ medicamentos.nombre }`;
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
                      this.medicamentoService.deleteMedicamento(medicamentos.id).subscribe(
                        resp => {
                          console.log(resp);
                          this.medicamentos.splice(i,1);
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
