import { Observable } from "rxjs";
import { SaveConsultaClientRequest, SaveConsultaClientResponse } from "./horario.models";

export interface IHorario{

  save(request: SaveConsultaClientRequest): Observable<SaveConsultaClientResponse>

}
