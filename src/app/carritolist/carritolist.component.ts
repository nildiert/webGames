import { OnInit, Component } from '@angular/core';
import { CarritoService } from '../services/carrito.services';
import { Carrito } from '../carritoadd/carrito.model';

@Component({
    selector: 'app-carritolist',
    templateUrl: './carritolist.component.html',
    styleUrls: ['./carritolist.component.css']
  })
export class CarritoListComponent implements OnInit{
    private carritoList:Carrito[]
    constructor(private carritoService: CarritoService){
        this.carritoList = carritoService.getCarrito();
        
    }

    ngOnInit(){
        this.carritoService.add_subject.subscribe(response =>{
            this.carritoList = this.carritoService.carritoList;
            console.log(this.carritoList)
        })
    }
}