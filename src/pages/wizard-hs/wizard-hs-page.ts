import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup,} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-wizard-hs-page',
  templateUrl: 'wizard-hs-page.html'
})
export class Wizardhspage {

  constructor(
    public navCtrl: NavController) {

    };

  gotomap() {
    this.navCtrl.setRoot('CategoriesPage');
  };

    
  }

