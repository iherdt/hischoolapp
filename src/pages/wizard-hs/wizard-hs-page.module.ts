import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wizardhspage } from './wizard-hs-page';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
      Wizardhspage,
    ],
    imports: [
      IonicPageModule.forChild(Wizardhspage),
    ],
    exports: [
      Wizardhspage
    ]
  })
  export class WizardhspageModule {
      
  }