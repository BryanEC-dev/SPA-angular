import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-resultado-busqueda-heroe',
  templateUrl: './resultado-busqueda-heroe.component.html',
  styles: []
})
export class ResultadoBusquedaHeroeComponent implements OnInit {
  
  reslutadoHeroes:Heroe[];
  constructor(private heroes: HeroesService, private _ActivatedRoute: ActivatedRoute) {
    this._ActivatedRoute.params.subscribe( params => {
      this.reslutadoHeroes = this.heroes.buscarHeroe(params.nombre)
      console.log(this.reslutadoHeroes);
     });
   }

  ngOnInit() {
  }

/*   buscarHeroe(nombre: string) {
  // realizar la redirección al nuevo componente creado con el nombre pasado por parametro
    this.router.navigate(['/resultado-heroes', nombre])
  } */
}
