import { Injectable } from "@angular/core";

@Injectable()

export class CategoriasService{
    categorias:any=[
        {
            "id": 1,
            "name": "Acción",
            "img":"https://image.flaticon.com/icons/svg/1198/1198983.svg",
            
        },
        {
            "id": 2,
            "name": "Aventura",
            "img":"https://image.flaticon.com/icons/svg/1198/1198977.svg",
        },       
        {
            "id": 3,
            "name": "Conducción",
            "img":"https://image.flaticon.com/icons/svg/1198/1198977.svg",
        },
        {
            "id": 4,
            "name": "Deportes",
            "img":"https://image.flaticon.com/icons/svg/1198/1198977.svg",
        },
        {
            "id": 5,
            "name": "Estrategia",
            "img":"https://image.flaticon.com/icons/svg/1198/1198977.svg",
        },
        {
            "id": 6,
            "name": "Lucha",
            "img":"https://image.flaticon.com/icons/svg/1198/1198989.svg",
        }
    ];

    public getCategorias(){
        return this.categorias;
    }

    // public buscarCategoria(id){
    //     return
    // }
    

}

