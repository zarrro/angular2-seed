import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroComponent }  from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ HeroComponent, HeroDetailComponent ],
  exports: [HeroComponent]
})
export class HeroModule { }
