import { Component, OnInit, NgModule } from '@angular/core';
import { RecetaService } from '../../servicio/receta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';
import { RecetaI } from '../../../interfaces/receta.interface';
import { PacienteI } from '../../../interfaces/paciente.interface';
import { MedicamentoI } from 'src/interfaces/medicamento.interface';
import { Receta } from '../../modelos/receta.model';
import { MedicamentoService } from '../../servicio/medicamento.service';


@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

  id:any;
  titulo='';
  nombre='';
  paciente : PacienteI;
  medicamento: MedicamentoI;
  receta: Receta;
  recetas : RecetaI [] = [];
  medicamentos : MedicamentoI [] = [];
  medicinas:any;
  constructor( private router: Router,
    private route: ActivatedRoute, http: HttpClient, private navController: NavController, 
    private recetaService: RecetaService,private alert: AlertController, private medicamentoService:MedicamentoService) { }

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
    this.recetaService.getRecetasPaciente(this.id).subscribe(
      resp => {
        if (resp.length === 0){
          this.titulo = "No existen recetas registradas";
        }else{
          this.recetas = resp;
          this.titulo =`${this.recetas[0].fkPaciente} ${this.recetas[0].fkMedicamento}`;
        }
      }
    );
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
  postVisita(){
    this.router.navigate(['/agregar-receta'])
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
      postReceta(){
    
        this.router.navigate(['/agregar-visita'])
          }
          agregarRe(){
            this.router.navigate(['/agregar-receta/' + this.id ]) 
          }
         
      async agregarNuevaReceta(){
           
            let recetaAgregar = new Receta('', '' , '', '',this.id, '');
              const titulo = 'Agregar cuenta';
        const alert = await this.alert.create({
          header : titulo,
          
          inputs:[
            {
              name: 'Fecha',
              type: 'date',
              value: recetaAgregar.fechaReceta,
              placeholder: 'Fecha',
              
            },
            {
              name: 'Dosis',
              type: 'text',
              value: recetaAgregar.dosis,
              placeholder: 'Dosis'
            },
            {
              name: 'Nota',
              type: 'text',
              value: recetaAgregar.nota,
              placeholder: 'Nota'
            }
            ,
            
            {
              name: 'FkMedicamento',
              type: 'text',
              value: recetaAgregar.fkMedicamento,
              placeholder: 'FkMedicamento'
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
                recetaAgregar.fechaReceta = data.Fecha;
                recetaAgregar.dosis = data.Dosis;
                recetaAgregar.nota = data.Nota;
                recetaAgregar.fkMedicamento = data.FkMedicamento;
              
                this.recetaService.postReceta(recetaAgregar).subscribe(
                  res => {
                    console.log(res);
                    this.refresh();
                    this.alerta('Éxito','Crear Cuenta','La receta ha sido creada correctamente!!');
                  },
                  err => {
                    console.log(err);
                    this.alerta('Error','Crear Cuenta','La receta no se pudo crear');
                  }
                );
              }
            }
          ]
        });
        await alert.present();
      }
     
    /*  async editarReceta(){
           
        let recetaEditar = new Receta('', '' , '', '',this.id, '');
          const titulo = 'Editar Cuenta';
    const alert = await this.alert.create({
      header : titulo,
      inputs:[
        {
          name: 'Fecha',
          type: 'text',
          value: recetaEditar.fechaReceta,
          placeholder: 'Escribe la dosis' ,
        
        
        },
        {
          name: 'Dosis',
          type: 'text',
          value: recetaEditar.dosis,
          placeholder: 'Dosis'
        },
        {
          name: 'Nota',
          type: 'text',
          value: recetaEditar.nota,
          placeholder: 'Nota'
        }
        ,
        {
          name: 'FkMedicamento',
          type: 'text',
          value: recetaEditar.fkMedicamento,
          placeholder: 'FkMedicamento'
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
            recetaEditar.fechaReceta = data.Fecha;
            recetaEditar.dosis = data.Dosis;
            recetaEditar.nota = data.Nota;
            recetaEditar.fkMedicamento = data.FkMedicamento;
          
            this.recetaService.putReceta(recetaEditar).subscribe(
              res => {
                console.log(res);
                this.refresh();
                this.alerta('Éxito','Editar Cuenta','La receta ha sido editado correctamente!!');
              },
              err => {
                console.log(err);
                this.alerta('Error','Editar Cuenta','La receta no se pudo editar');
              }
            );
          }
        }
      ]
    });
    await alert.present();
  }

*/

     
     async eliminar (recetas:RecetaI ,i : number){
        const nombre = `${ recetas.receta } ${ recetas.dosis }`;
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
                  this.recetaService.deleteReceta(recetas.receta).subscribe(
                    
                    res => {
                      console.log(res);

                      this.refresh();
                      
                      this.alerta('Éxito','Crear Cuenta','La receta ha sido elimiada correctamente!!');
                      
                      
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

