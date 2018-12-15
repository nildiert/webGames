import { Component } from '@angular/core';
import { CategoriasService } from './services/categorias.services';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { VideoJuegosService } from './services/videojuegos.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myControl = new FormControl();
  opciones=null;
  title = 'webGames';
  categorias = null;
  constructor(private categoriasService:CategoriasService, private videojuegosService:VideoJuegosService){
    this.categorias = categoriasService.getCategorias();
    this.opciones = videojuegosService.getVideoJuegos();
    
  }
  filteredOptions: Observable<string[]>;
  debugger;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
        
      );
  }
  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(this.opciones[0].name)
    return this.opciones.filter(opciones => opciones.name.includes(filterValue));
  }
  
}
 