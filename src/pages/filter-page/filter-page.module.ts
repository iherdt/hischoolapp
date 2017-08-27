import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Filter } from './filter-page';

@NgModule({
    declarations: [
      Filter,
    ],
    imports: [
      IonicPageModule.forChild(Filter),
    ],
    exports: [
      Filter
    ]
  })
  export class FilterModule {
      
  }