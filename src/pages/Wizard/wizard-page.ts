import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../providers/user-service';


@IonicPage()
@Component({
  selector: 'page-wizard-page',
  templateUrl: 'wizard-page.html'
})
export class Wizardpage {

  form:FormGroup;
  trans: any;



  
}