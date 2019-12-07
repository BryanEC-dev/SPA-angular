import { Injectable, ɵConsole } from '@angular/core';

@Injectable()
export class HeroesService {
    
    private heroes:any = [];

    constructor(){
        console.log('servicios listo para utilizar')
    }


}