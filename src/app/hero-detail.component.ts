import { Component, OnInit,Input , Inject} from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;
  heroes : Hero[];
  //constructor(@Inject(HeroService) private herolist) { }
  constructor(private herolist:HeroService){}
  ngOnInit() {
    this.heroes = this.herolist.getHeroes();
  }

}
