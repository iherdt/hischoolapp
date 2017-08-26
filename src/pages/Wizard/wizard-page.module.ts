import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wizardpage } from './wizard-page';


@NgModule({
    declarations: [
      Wizardpage,
    ],
    imports: [
      IonicPageModule.forChild(Wizardpage),
    ],
    exports: [
      Wizardpage
    ]
  })
  export class WizardpageModule {
      
  }