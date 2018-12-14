import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent {
  id=null;
  juego:any ={};
  constructor(private route:ActivatedRoute,private juegoService:VideoJuegosService){
    this.id = this.route.snapshot.params['id'];
    console.log(this.juego.name);
    this.juego = (this.juegoService.buscarVideoJuego(this.id));
    console.log( this.juego);
  }

  

}



