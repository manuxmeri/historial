import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../modelos/visita.model';
import { environment } from '../../environments/environment';
import { Receta } from '../modelos/receta.model';


@Injectable({
  providedIn: 'root'
})

export class VisitaService {
  path = `${environment.url}/visitas`;
  
  constructor(public http: HttpClient ) { }
  /*cargarVisitas(): Observable<any>
  {
   
    return this.http.get<Visita[]>(this.path).pipe(
      delay (100));
  }*/
  postVisita( visita: Visita): Observable<Visita>{
    return this.http.post<Visita>(`${this.path}/create`,visita);
  }
    
  getVisitasPaciente (id:string) :Observable<any>{
    return this.http.get(`${this.path}/paciente/${id}`);
  }

  cargarVisita(id:string): Observable<any> {
   
    return this.http.get(`${this.path}/edit/${id}`)
    
  }
  putVisita(visita:Visita): Observable<Visita>{
    return this.http.put<Visita>(`${this.path}/update/${visita.id}`,visita)
  }
  deleteVisita(id): Observable<Visita>{
    return this.http.delete<Visita>(`${this.path}/delete/${id}`);
  }
 
  
  

}
