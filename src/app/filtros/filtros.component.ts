import { Component } from '@angular/core';
import { VideoJuegosService } from '../services/videojuegos.services';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
})
export class FiltrosComponent {
  
  id = null;
  juegos = null;
  constructor( private juegoService: VideoJuegosService){

  }

  // constructor(private route: ActivatedRoute, private juegoService: VideoJuegosService, private router: Router){
  //   router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.actualizarJuegos()
  //     }
  //   })
  // }
  
  ejecutar(){
    alert('lo que sea');
  }
  
  actualizarJuegos() {
    this.juegos = (this.juegoService.buscarBestSeller());
  }
}



