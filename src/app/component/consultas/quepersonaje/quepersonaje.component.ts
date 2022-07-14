import { Component, OnInit } from '@angular/core';

import { ApirickService } from 'src/app/service/apirick.service';

@Component({
  selector: 'app-quepersonaje',
  templateUrl: './quepersonaje.component.html',
  styleUrls: ['./quepersonaje.component.scss']
})
export class QuepersonajeComponent implements OnInit {

  ramdon: number = 0;


  resultado: any = [];  
  personajes: any = [];
  
  resultadoCantidad: any = [];
  cantidad: number = 0;  

  Idresultado: any = [];
  idpersonaje: any = [];

  busqueda: boolean = false;
  planeta: any = [];

  constructor(private apirick: ApirickService) { }

  ngOnInit(): void {
    
  }

  async personaje(){
    // this.ramdon = Math.random();  
    
    this.apirick.getPersonajes().subscribe(
      res =>{
        this.resultado = res;  
        this.resultadoCantidad = res;                      
        this.cantidad = this.resultadoCantidad.info.count
        console.log(`ver: ${this.resultado.results}`);        
        this.resultado.results.forEach((i: { id: any; image: any; name: any; species: any; genere: any; episode: any; }) =>{
          const personaje = {
            id: i.id,
            img: i.image,            
            name: i.name,
            specie: i.species,
            genero: i.genere,
            episodio: i.episode
          }
          this.personajes.push(personaje);
        });                
      },
      error => {
        console.log(`ERROR: ${error}`);
      }
    )    
    this.ramdon = Math.floor((Math.random() * ( 20 - 1 + 1)) + 1);    
    this.getIdpersonaje(this.ramdon);   
  }

  async getIdpersonaje(id: number){
    this.busqueda = true
    this.apirick.getIdpersona(id).subscribe(
      res =>{
        this.Idresultado = res; 
        this.planeta = this.Idresultado.location;
      },
      error => {
        console.log(`ERROR: ${error}`);
      }
    )

  }
}
