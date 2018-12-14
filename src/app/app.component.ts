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
  options: string[] = ['One', 'Two', 'Three'];
  title = 'webGames';
  categorias = null;
  constructor(private categoriasService:CategoriasService, private videojuegosService:VideoJuegosService){
    this.categorias = categoriasService.getCategorias();
  }
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
