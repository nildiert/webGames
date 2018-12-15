import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.component.html',
})
export class MayorComponent{
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.buscarMayor();
  } 
}

