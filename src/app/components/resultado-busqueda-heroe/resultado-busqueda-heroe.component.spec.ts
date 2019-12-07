import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaHeroeComponent } from './resultado-busqueda-heroe.component';

describe('ResultadoBusquedaHeroeComponent', () => {
  let component: ResultadoBusquedaHeroeComponent;
  let fixture: ComponentFixture<ResultadoBusquedaHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
