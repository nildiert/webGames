import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-agotados',
  templateUrl: './agotados.component.html',
})
export class AgotadosComponent{
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.buscarAgotados();
  } 
}

