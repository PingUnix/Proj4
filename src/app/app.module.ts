import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroListComponent } from './hero-list.component';
import { NotFoundComponent } from './not-found.component';
import { CrisisListComponent } from './crisis-list.component';
import { SummaryComponent } from './summary.component';
const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  {path:'summary',component:SummaryComponent},
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    AppComponent,
    HeroListComponent,
    CrisisListComponent,
    HeroListComponent,
    NotFoundComponent,
    CrisisListComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [], //if here is a service, include the service name 
  bootstrap: [AppComponent]
})
export class AppModule { }
