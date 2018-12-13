import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { VideoJuegosService } from './services/videojuegos.services';

import { RouterModule, Routes, Router } from '@angular/router';
import { VideoJuegosComponent } from './videojuegos/videojuegos.component';
import { PortadaComponent } from './portada/portada.component';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'videojuegos', component: VideoJuegosComponent },
  {path:'detalle/:id',component:DetalleComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    VideoJuegosComponent,
    PortadaComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [VideoJuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
