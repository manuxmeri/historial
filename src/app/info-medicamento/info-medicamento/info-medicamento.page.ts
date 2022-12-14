import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from '../../servicio/medicamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Medicamento } from '../../modelos/medicamento.model';

@Component({
  selector: 'app-info-medicamento',
  templateUrl: './info-medicamento.page.html',
  styleUrls: ['./info-medicamento.page.scss'],
})
export class InfoMedicamentoPage implements OnInit {
  medicamento : Medicamento;
  constructor(private medicamentoService: MedicamentoService, private router: Router,
    private activatedRoute: ActivatedRoute, http: HttpClient, private navController: NavController) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('medicamentoId');
         this.medicamentoService.cargarMedicamento(id).subscribe( data => {
           this.medicamento = data
          
       })
      
     })
  }
  editarMedicamento (medicamento){
    this.navController.navigateForward(['/medicamentos/medicamento-editar',medicamento.id]);
  
  }
}
