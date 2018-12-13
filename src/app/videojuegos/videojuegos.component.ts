import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
})
export class VideoJuegosComponent {
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.getVideoJuegos();
  } 
}

