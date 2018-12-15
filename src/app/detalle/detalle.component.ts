import { Component, OnInit } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {
  id=null;
  juego:any ={};
  constructor(private route:ActivatedRoute,private juegoService:VideoJuegosService, private router: Router)
  {
    router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationEnd){
        this.actualizarJuego()
      }
      })
  }

  ngOnInit(){

  }

  actualizarJuego(){
    // console.log(this.juego.name);
    this.id = this.route.snapshot.params['id'];
    // console.log( this.juego);
    this.juego = (this.juegoService.buscarVideoJuego(this.id));
  }
}



