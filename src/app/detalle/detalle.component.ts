import { Component, OnInit } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { CarritoService } from '../services/carrito.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
})
export class DetalleComponent implements OnInit {
  // private juegoItem
  id=null;
  juego:any ={};
  // constructor(private route:ActivatedRoute,private juegoService:VideoJuegosService, private router: Router)
  constructor(private route:ActivatedRoute,private juegoService:VideoJuegosService, private router: Router, private carritoService: CarritoService)
  {
    router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationEnd){
        this.actualizarJuego()
      }
      })
  }
  addJuego(){
    // alert(""+)
    this.carritoService.addJuego(this.juego.name)
  //   this.juegoItem=""

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



