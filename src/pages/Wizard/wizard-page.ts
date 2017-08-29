import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { BasePage } from '../base-page/base-page';
import { LocalStorage } from '../../providers/local-storage';
import { NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wizard-page',
  templateUrl: 'wizard-page.html'
})
export class Wizardpage extends BasePage { 

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController) {

    super(injector)

    
    };
    enableMenuSwipe() {
      return false;
    }
  Questype(){

    
  }

 Mpage(){
this.navigateTo('Wizardmspage', {})
 }

 Hpage(){
  this.navigateTo('Wizardhspage', {})
 } 

Tpage(){
  this.navigateTo('Wizardtpage', {})
}

}