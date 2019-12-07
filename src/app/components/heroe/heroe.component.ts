import { Component, OnInit } from '@angular/core';
// se mantiene a la escucha de cuando se pase un valor por parametros
import { ActivatedRoute } from '@angular/router'; 
import { HeroesService, Heroe } from '../../services/heroes.services';
// para poder retroceder a la pagina inmediatamente anterior
import { Location } from '@angular/common'; 


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  constructor(private activatedRoute: ActivatedRoute, private _heroeService:HeroesService , private _location:Location) {
     this.activatedRoute.params.subscribe(params =>  {
       this.heroe = this._heroeService.getHeroe(params['id']);
       console.log(this.heroe)
     })
   }

   retroceder() {
      this._location.back();
   }

  ngOnInit() {
  }

}
