import { Component,OnInit} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService} from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
 
   
  name ="wnys";
  heroes : Hero[]; //declare an array of Hero
  title = 'App... works!';
  selectedHero : Hero;
  flag:boolean;

  onSelect(hero:Hero){
    this.selectedHero = hero;
   
  }
  constructor(private heroServ:HeroService){

  }
  getHeroes():void{
    this.heroes = this.heroServ.getHeroes();

  }
  ngOnInit():void{
    this.getHeroes();
  }

}
