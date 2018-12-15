import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-menor',
  templateUrl: './menor.component.html',
})
export class MenorComponent{
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.buscarMenor();
  } 
}

