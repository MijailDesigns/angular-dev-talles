import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListComponent, HeroComponent],
  declarations: [ListComponent, HeroComponent],
})
export class HeroesModule {}
