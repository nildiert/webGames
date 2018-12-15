import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
})
export class CategoriasComponent implements OnInit {
  id = null;
  juegos = null;
  // constructor(private route:ActivatedRoute,private juegoService:VideoJuegosService){
  constructor(private route: ActivatedRoute, private juegoService: VideoJuegosService, private router: Router){
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.actualizarJuegos()
      }
    })
  }

  ngOnInit() {
  }

  actualizarJuegos() {
    this.id = this.route.snapshot.params['id'];
    this.juegos = (this.juegoService.buscarCategoria(parseInt(this.id)));
  }


}



