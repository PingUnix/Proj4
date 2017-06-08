import { Component,OnInit,Inject} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
 
   
  name ="wnys";
  heroes : Hero[]; //declare an array of Hero
  title = 'App... works!';
  selectedHero : Hero;
  flag:boolean;

  onSelect(hero:Hero){
    this.selectedHero = hero;
   
  }
  constructor(@Inject(HeroService) private heroService){

  }
  getHeroes(): void {
   // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   this.heroes = this.heroService.getHeroes();
  }

  ngOnInit():void{
    this.getHeroes();
  }

}
