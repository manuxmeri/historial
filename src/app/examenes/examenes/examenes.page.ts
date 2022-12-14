import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../servicio/examen.service';
import { ExamenI } from '../../../interfaces/examen.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { Examen } from '../../modelos/examen.model';

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.page.html',
  styleUrls: ['./examenes.page.scss'],
})
export class ExamenesPage implements OnInit {

  id:any;
  titulo='';
  nombre='';
  paciente : PacienteI;
  examenes : ExamenI [] = [];;
  constructor( private router: Router,
    private route: ActivatedRoute, http: HttpClient, private navController: NavController, 
    private examenService :ExamenService, private alert: AlertController ) { }

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
    this.examenService.getExamenesPaciente(this.id).subscribe(
      resp => {
        if (resp.length === 0){
          this.titulo = "No existen examenes registradas";
        }else{
          this.examenes = resp;
          this.titulo =`${this.examenes[0].fkPaciente} ${this.examenes[0].diagnostico}`;
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
    this.router.navigate(['/agregar-examen'])
      }
      async agregarNuevoExamen(){
       
        let examenAgregar = new Examen ('', '' ,'' ,'' ,'' ,'' , '', '','' ,this.id);
          const titulo = 'Agregar examen';
    const alert = await this.alert.create({
      header : titulo,
      inputs:[
        {
          name: 'Fecha',
          type: "date",
          value: examenAgregar.fechaVExamen,
          placeholder: 'Fecha'
        },
        {
          name: 'Hora',
          type: 'time',
          value: examenAgregar.hora,
          placeholder: 'Hora'
        },
        {
          name: 'Temperatura',
          type: 'text',
          value: examenAgregar.temperatura,
          placeholder: 'Temperatura'
        },
        {
          name: 'Peso',
          type: 'text',
          value: examenAgregar.peso,
          placeholder: 'Peso'
        },
        {
          name: 'Altura',
          type: 'text',
          value: examenAgregar.altura,
          placeholder: 'Altura'
        },
        {
          name: 'Sintomas',
          type: 'text',
          value: examenAgregar.sintomas,
          placeholder: 'Sintomas'
        },
        {
          name: 'Diagnostico',
          type: 'text',
          value: examenAgregar.diagnostico,
          placeholder: 'Diagnostico'
        },
        {
          name: 'Notas',
          type: 'text',
          value: examenAgregar.notas,
          placeholder: 'Notas'
        },
      
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
            examenAgregar.fechaVExamen = data.Fecha;
            examenAgregar.hora = data.Hora;
            examenAgregar.temperatura = data.Temperatura;
            examenAgregar.peso = data.Peso;
            examenAgregar.altura = data.Altura;
            examenAgregar.sintomas = data.Sintomas;
            examenAgregar.diagnostico = data.Diagnostico;
            examenAgregar.notas = data.Notas;
          
            this.examenService.postExamen(examenAgregar).subscribe(
              res => {
                console.log(res);
                this.refresh();
                this.alerta('Éxito','Agregar examen','El examen ha sido creada correctamente!!');
              },
              err => {
                console.log(err);
                this.alerta('Error','Agregar examen','El examen no se pudo crear');
              }
            );
          }
        }
      ]
    });
    await alert.present();
  }
  async eliminar (examenes:ExamenI ,i : number){
    const nombre = `${ examenes.examen } ${ examenes.altura }`;
    const alert = await this.alert.create(
      {
        header: 'Peligro!!',
        message: `¿Seguro(a) de borrar al examen?<br><strong>${nombre}</strong></br>`,
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
              this.examenService.deleteExamen(examenes.examen).subscribe(
                
                res => {
                  console.log(res);

                  this.refresh();
                  
                  this.alerta('Éxito','Eliminado','El examen ha sido elimimado correctamente!!');
                  
                  
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
