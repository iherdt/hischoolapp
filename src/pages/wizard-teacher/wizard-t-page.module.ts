import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wizardtpage } from './wizard-t-page';

@NgModule({
    declarations: [
      Wizardtpage,
    ],
    imports: [
      IonicPageModule.forChild(Wizardtpage),
    ],
    exports: [
      Wizardtpage
    ]
  })
  export class WizardtpageModule {
      
  }