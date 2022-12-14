import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../modelos/paciente.model';

import { environment } from 'src/environments/environment';
import { delay } from 'rxjs/Operators';
import { PacienteI } from '../../interfaces/paciente.interface';
import { VisitaI } from '../../interfaces/visita.interface';


@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  path = `${environment.url}/pacientes`;
  
  path2 = `${environment.url}/visitas`;
  
  
  constructor(public http: HttpClient) { }
  cargarPacientes()
  {
   
    return this.http.get<PacienteI[]>(this.path).pipe(
      delay (150)
    );
    
  }
  agregarPaciente(paciente:Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(`${this.path}/create`,paciente)
  }


  
  cargarPaciente(id:string): Observable<any> {
   
    return this.http.get(`${this.path}/edit/${id}`)
    
  }




  cargarVisita (id){
    return this.http.get<VisitaI[]>(`${this.path2}/paciente/${id}`);
  }
 
  editarPaciente(paciente:Paciente): Observable<Paciente>{
    return this.http.put<Paciente>(`${this.path}/update/${paciente.id}`,paciente)
  }
  deletePaciente(id): Observable<Paciente>{
    return this.http.delete<Paciente>(`${this.path}/delete/${id}`);
  }
  getVisitasPaciente (id){
    return this.http.get<VisitaI[]>(`${this.path2}/paciente/${id}`);
  }
  
}
