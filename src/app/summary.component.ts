import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  providers:[HeroService]
})
export class SummaryComponent implements OnInit {
  Heroes : Hero[];
  constructor(private heroes:HeroService) { }

  ngOnInit() {
    this.Heroes = this.heroes.getHeroes();
  }

}
