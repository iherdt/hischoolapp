import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list-page';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
      ListPage
    ],
    imports: [
      IonicPageModule.forChild(ListPage),
      SharedModule
    ],
    exports: [
      ListPage
    ]
  })
  export class ListPageModule {
      
  }