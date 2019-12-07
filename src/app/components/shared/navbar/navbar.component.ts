import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService,Heroe } from '../../../services/heroes.services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private heroes:HeroesService, private router:Router) { }

  ngOnInit() {
  }
  
  resultadoBusquedaHeroe:Heroe[];

  buscarHeroe(nombre: string) {
    // realizar la redirección al nuevo componente creado con el nombre pasado por parametro
    this.router.navigate(['/resultado-heroes',nombre])
  }

}
