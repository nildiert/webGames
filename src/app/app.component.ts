import { Component } from '@angular/core';
import { CategoriasService } from './services/categorias.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webGames';
  categorias = null;
  constructor(private categoriasService:CategoriasService){
    this.categorias = categoriasService.getCategorias();
  }
}
