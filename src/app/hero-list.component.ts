import { Component, OnInit } from '@angular/core';


@Component({
  template: `
    <h2>HEROES</h2>
    <p>Get your heroes here</p>

    <button routerLink="/sidekicks">Go to sidekicks</button>
    <my-heroes></my-heroes>
  `
})
export class HeroListComponent { }