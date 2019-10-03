import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http: HttpClient) { }

  public GetOrdenes() {
    return this.http.get<any>(environment.url.concat('/listado'))
  }

  public SetOrden(unaOrden: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(environment.url.concat('/Alta'), unaOrden, httpOptions);
  }
}
