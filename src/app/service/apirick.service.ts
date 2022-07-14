import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApirickService {

  Personajes: string = "";  
  Idpersonajes: string = "";

  constructor(private http: HttpClient) {
    this.Personajes = `https://rickandmortyapi.com/api/character`;
    this.Idpersonajes = `https://rickandmortyapi.com/api/character/2`
  }
  
  getPersonajes(){
    return this.http.get(this.Personajes);
  }

  
  getIdpersona(id: number){    
    return this.http.get(`${this.Idpersonajes}${id}`);
  }
  


}
