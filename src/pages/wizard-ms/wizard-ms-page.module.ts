import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Wizardmspage } from './wizard-ms-page';
import { SharedModule } from '../../shared.module';

@NgModule({
    declarations: [
      Wizardmspage,
    ],
    imports: [
      IonicPageModule.forChild(Wizardmspage),
    ],
    exports: [
      Wizardmspage
    ]
  })
  export class WizardmspageModule {
      
  }