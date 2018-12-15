import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-disponibles',
  templateUrl: './disponibles.component.html',
})
export class DisponiblesComponent{
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.buscarDisponibles();
  } 
}

