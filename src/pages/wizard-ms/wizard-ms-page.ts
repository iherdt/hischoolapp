import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { ViewController, Events } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LocalStorage } from '../../providers/local-storage';
import { NavController, MenuController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-wizard-ms-page',
  templateUrl: 'wizard-ms-page.html'
})
export class Wizardmspage {

  constructor(injector: Injector,
    private formBuilder: FormBuilder,
    private events: Events,
    private viewCtrl: ViewController,
    public navCtrl: NavController) {

    };

    
  
    enableMenuSwipe() {
      return false;
    }





  onsubmit(){

    
  }

gotomap(){
  this.navCtrl.setRoot('CategoriesPage');
}
  
}