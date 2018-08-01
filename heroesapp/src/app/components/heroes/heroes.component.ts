import { Component, OnInit } from '@angular/core';
import {HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading = true;

  constructor( private _heroeservice: HeroesService) {
    this._heroeservice.getHeroes().subscribe( data => {

      this.heroes = data;
      this.loading = false;

    } );
   }

  ngOnInit() {
  }

  borraHeroe(key: string) {
    this._heroeservice.borrarHeroe(key).subscribe( respuesta => {
      if ( respuesta ) {
        console.error( respuesta );
      } else {
        // todo bien
        delete this.heroes[key];
      }
    });
  }

}
