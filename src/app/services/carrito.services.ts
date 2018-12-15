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

    // addJuego(item){
    //     // Añadimos los nuevos datos al arreglo creado en el constructor
    //     this.carritoList.push(new Carrito(item, false))
    //     this.add_subject.next()
    // }
}