import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactusComponent } from './contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { SoupComponent } from './menu/soup/soup.component';
import { DimsumComponent } from './menu/dimsum/dimsum.component';
import { StartersComponent } from './menu/starters/starters.component';
import { GrillComponent } from './menu/grill/grill.component';
import { MainsCurriesComponent } from './menu/mains-curries/mains-curries.component';
import { SidesComponent } from './menu/sides/sides.component';
import { ComboMealComponent } from './menu/combo-meal/combo-meal.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/soup', component: SoupComponent },
  { path: 'menu/dimsum', component: DimsumComponent },
  { path: 'menu/starters', component: StartersComponent },
  { path: 'menu/grill', component: GrillComponent },
  { path: 'menu/mains-curries', component: MainsCurriesComponent },
  { path: 'menu/sides', component: SidesComponent },
  { path: 'menu/combo-meal', component: ComboMealComponent },
  { path: 'contactus', component: ContactusComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactusComponent,
    SoupComponent,
    DimsumComponent,
    StartersComponent,
    GrillComponent,
    MainsCurriesComponent,
    SidesComponent,
    ComboMealComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
