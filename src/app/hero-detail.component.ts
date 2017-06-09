import { Component, OnInit,Input , Inject,OnDestroy} from '@angular/core';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit,OnDestroy  {
  id:number;
  sub:any;

  @Input() hero:Hero;
  heroes : Hero[];
  //constructor(@Inject(HeroService) private herolist) { }
  constructor(private herolist:HeroService,private route:ActivatedRoute){}
  ngOnInit() {
    this.heroes = this.herolist.getHeroes();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // listener to get the id paramter from router 
    });
  }
  ngOnDestroy (){
    this.sub.unsubscribe();
  }
}
