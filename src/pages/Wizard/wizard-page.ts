import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';

import { FormGroup,} from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-wizard-page',
  templateUrl: 'wizard-page.html'
})
export class Wizardpage {

  form:FormGroup;
  trans: any;



  
}