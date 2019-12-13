import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from '../../model/hero/heroes';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  Hero: Hero = new Hero(1, 'GrandeGiove', 37);
  Hero1: Hero = new Hero(2, 'TigerMicio', 54);
  Hero2: Hero = new Hero(3, 'BlackDiamond', 42);
  Hero3: Hero = new Hero(4, 'VivaLaWiga', 21);
  Hero4: Hero = new Hero(5, 'CheLasaGna', 25);
  Hero5: Hero = new Hero(6, 'Putenza', 59);
  Hero6: Hero = new Hero(7, 'xLoNi', 78);
  heroes: Hero[] = [];

  constructor() {
    this.heroes.push(this.Hero,
      this.Hero1,
      this.Hero2,
      this.Hero3,
      this.Hero4,
      this.Hero5,
      this.Hero6
    );
  }

  createDb() {
    return this.heroes;
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
