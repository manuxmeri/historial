import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../modelos/medicamento.model';
import { delay } from 'rxjs/Operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  path = `${environment.url}/medicamentos`;
  constructor(public http: HttpClient) { }
  cargarMedicamentos(): Observable<any>
  {
   
    return this.http.get<Medicamento[]>(this.path).pipe(
      delay (100));
  }
  agregarMedicamento(medicamento:Medicamento): Observable<any>{
    return this.http.post<Medicamento>(`${this.path}/create`,medicamento)
  }
  cargarMedicamento(id:string): Observable<any> {
   
    return this.http.get(`${this.path}/edit/${id}`)
    
  }
  
  editarMedicamento(medicamento:Medicamento): Observable<Medicamento>{
    return this.http.put<Medicamento>(`${this.path}/update/${medicamento.id}`,medicamento)
  }
  
  deleteMedicamento(id): Observable<Medicamento>{
    return this.http.delete<Medicamento>(`${this.path}/delete/${id}`);
  }
    
  }
 
