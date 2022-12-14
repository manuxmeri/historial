import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { RecetaI } from '../../interfaces/receta.interface';
import { Receta } from '../modelos/receta.model';
import { Visita } from '../modelos/visita.model';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  path = `${environment.url}/recetas`;
  constructor(public http: HttpClient) { }
  cargarRecetas()
  {
   
    return this.http.get<RecetaI[]>(this.path).pipe(
    
    );
  }
 /* getRecetasPaciente (id){
    return this.http.get<RecetaI[]>(`${this.path}/paciente/${id}`);
  }*/
  getRecetasPaciente (id:string) :Observable<any>{
    return this.http.get(`${this.path}/paciente/${id}`);
  }
  postReceta( receta: Receta): Observable<Receta>{
    return this.http.post<Receta>(`${this.path}/create`,receta);
  }
  cargarReceta(id:string): Observable<any> {
   
    return this.http.get(`${this.path}/edit/${id}`)
    
  }
  putReceta(receta:Receta): Observable<Receta>{
    return this.http.put<Receta>(`${this.path}/update/${receta.id}`,receta)
  }
  deleteReceta(id): Observable<Receta>{
    return this.http.delete<Receta>(`${this.path}/delete/${id}`);
  }
    
}
