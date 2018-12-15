import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
})
export class BestSellerComponent {
  title = 'Videojuegos';
  juegos = null;  
  constructor(private juegosService:VideoJuegosService){
    this.juegos = juegosService.buscarBestSeller();
  } 
}

