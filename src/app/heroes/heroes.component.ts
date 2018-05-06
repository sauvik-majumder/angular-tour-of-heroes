import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


  heroes: Hero[];

  constructor(private heroService: HeroService) { }
  //hero = 'Windstorm';

  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
 // }

 getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

  ngOnInit() {
    this.getHeroes();
  }

}
