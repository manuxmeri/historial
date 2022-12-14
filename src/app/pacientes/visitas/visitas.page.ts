import { Component, OnInit } from '@angular/core';
import { VisitaService } from '../../servicio/visita.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { VisitaI } from 'src/interfaces/visita.interface';
import { GetapiService } from '../../servicio/getapi.service';
import { Visita } from '../../modelos/visita.model';

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
  visitas : VisitaI [] = [];
  constructor( private router: Router,
    private route: ActivatedRoute, http: HttpClient, private navController: NavController, private getapiService :GetapiService, 
    private alert: AlertController, private visitaService: VisitaService ) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.paramMap.get('id');
    this.refresh();
  }
  ionViewWillEnter(){
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
  async alerta (titulo: string, subtitulo: string, mensaje:string ){
    const alert = await this.alert.create({
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
  postVisita(){

    this.router.navigate(['/agregar-visita'])
      }
      async agregarNuevaVisita(){
       
        let visitaAgregar = new Visita('', '' , '', '',this.id);
          const titulo = 'Agregar visita';
    const alert = await this.alert.create({
      header : titulo,
      inputs:[
        {
          name: 'Diagnostico',
          type: 'text',
          value: visitaAgregar.diagnosticoEnfermedad,
          placeholder: 'Diagnostico'
        },
        {
          name: 'Fecha',
          type: 'date',
          value: visitaAgregar.fecha,
          placeholder: 'Fecha'
        },
        {
          name: 'Hora',
          type: 'time',
          value: visitaAgregar.hora,
          placeholder: 'Hora'
        }
      
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secodary',
          handler: () => {

          }
        },
        {
          text:'Aceptar',
          handler : (data) => {
            visitaAgregar.diagnosticoEnfermedad = data.Diagnostico;
            visitaAgregar.fecha = data.Fecha;
            visitaAgregar.hora = data.Hora;
          
            this.visitaService.postVisita(visitaAgregar).subscribe(
              res => {
                console.log(res);
               
                this.refresh();
                this.alerta('Éxito','Agregar Visita','La visita ha sido creada correctamente!!');
              },
              err => {
                console.log(err);
                this.alerta('Error','Agregar Visita','La visita no se pudo crear');
              }
            );
          }
        }
      ]
    });
    await alert.present();
  }

  async eliminar (visitas:VisitaI ,i : number){
    const nombre = `${ visitas.visitan } ${ visitas.fecha }`;
    const alert = await this.alert.create(
      {
        header: 'Peligro!!',
        message: `¿Seguro(a) de borrar a la receta?<br><strong>${nombre}</strong></br>`,
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
            handler: (res) =>{
              this.visitaService.deleteVisita(visitas.visitan).subscribe(
                
                res => {
                  console.log(res);

                  this.refresh();
                  
                  this.alerta('Éxito','Eliminado','La visita ha sido elimimada correctamente!!');
                  
                  
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
           
       
         


