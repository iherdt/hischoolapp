import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { NavController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-wizard-t-page',
  templateUrl: 'wizard-t-page.html'
})
export class Wizardtpage extends BasePage {

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController) {

    super(injector)

    
    };
    enableMenuSwipe() {
      return false;
    }



  onSubmit(){
    
  }

gotomap(){
  this.navigateTo('MapPage', {})
}
  
}