import { Injectable } from '@angular/core';
import { IHorario } from './ihorario.service';
import { Observable } from 'rxjs';
import { SaveConsultaClientRequest, SaveConsultaClientResponse } from './horario.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService implements IHorario {


  private readonly basePath = environment.apiUrl

  constructor(private http: HttpClient) { }


  save(request: SaveConsultaClientRequest): Observable<SaveConsultaClientResponse> {
    return this.http.post<SaveConsultaClientResponse>(`${this.basePath}consultas/clients`, request)
  }
}
