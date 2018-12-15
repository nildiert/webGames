import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { VideoJuegosService } from './services/videojuegos.services';

import { RouterModule, Routes, Router } from '@angular/router';
import { VideoJuegosComponent } from './videojuegos/videojuegos.component';
import { PortadaComponent } from './portada/portada.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CategoriasService } from './services/categorias.services';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { CarritoAddComponent } from './carritoadd/carritoadd.component';
import { CarritoListComponent } from './carritolist/carritolist.component';
import { CarritoService } from './services/carrito.services';


const appRoutes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'videojuegos', component: VideoJuegosComponent },
  { path: 'carrito', component: CarritoListComponent },
  {path:'detalle/:id',component:DetalleComponent},
  {path:'categorias/:id',component:CategoriasComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    VideoJuegosComponent,
    PortadaComponent,
    DetalleComponent,
    CategoriasComponent,
    CarritoAddComponent,
    CarritoListComponent,
    FiltrosComponent,
    CarritoListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule, 
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [VideoJuegosService, CategoriasService, CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
