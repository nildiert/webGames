import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Carrito } from '../carritoadd/carrito.model';

@Injectable()

export class CarritoService{
    public carritoList:Carrito[]
    public add_subject= new Subject<string>()

    constructor(){
        // Creamos el arreglo para guardar los datos
        this.carritoList = []
    }

    addJuego(item,id,precio){
        // Añadimos los nuevos datos al arreglo creado en el constructor
        this.carritoList.push(new Carrito(item, id,precio,false))
        this.add_subject.next()

        console.log(this.carritoList    ) 
    }
    getCarrito(){
        return this.carritoList;
    }
}