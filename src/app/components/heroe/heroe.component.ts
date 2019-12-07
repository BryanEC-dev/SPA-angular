import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  constructor(private activatedRoute: ActivatedRoute, private _heroeService:HeroesService) {
     this.activatedRoute.params.subscribe(params =>  {
       this.heroe = this._heroeService.getHeroe(params['id']);
       console.log(this.heroe)
     })
   }

  ngOnInit() {
  }

}
