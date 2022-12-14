import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { ExamenI } from '../../interfaces/examen.interface';
import { Examen } from '../modelos/examen.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  path = `${environment.url}/examenes`;
 
  constructor(public http: HttpClient) { }
  getExamenesPaciente (id){
    return this.http.get<ExamenI[]>(`${this.path}/paciente/${id}`);
  }
  postExamen( examen: Examen): Observable<Examen>{
    return this.http.post<Examen>(`${this.path}/create`,examen);
  }
  

  cargarExamen(id:string): Observable<any> {
   
    return this.http.get(`${this.path}/edit/${id}`)
    
  }
  putExamen(examen:Examen): Observable<Examen>{
    return this.http.put<Examen>(`${this.path}/update/${examen.id}`,examen)
  }
  deleteExamen(id): Observable<Examen>{
    return this.http.delete<Examen>(`${this.path}/delete/${id}`);
  }
 
}
