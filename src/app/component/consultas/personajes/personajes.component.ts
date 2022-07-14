import { Component, OnInit } from '@angular/core';
import { ApirickService } from 'src/app/service/apirick.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  
  ResultadoNombre: any = []; //Array que nos ayuda colocanos en el array de los nombres  
  imgNombre: any = [];


  constructor(private serviceRick: ApirickService) { }

  ngOnInit(): void {
    this.getNombres();
  }

  async getNombres(){
    this.serviceRick.getPersonajes().subscribe(
      res =>{
        this.ResultadoNombre = res;                
        this.ResultadoNombre.results.forEach( ( i : { name: any; image: any; }) => {
          const personaje = {
                name: i.name,
                img: i.image
          }      
          this.imgNombre.push(personaje);
        })               
      },error => {
        console.log(error);
      }
    )        
  }

}
