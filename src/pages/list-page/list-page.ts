import { IonicPage } from 'ionic-angular';
import { Component, Injector } from '@angular/core';
import { Place } from '../../providers/place-service';
import { BasePage } from '../base-page/base-page'
@IonicPage()
@Component({
    selector: 'page-list-page',
    templateUrl: 'list-page.html'
})
export class ListPage extends BasePage {
    places: Array<Place>;
    params: any = {};
    
      constructor(injector: Injector,){
            super(injector)
    }   
    enableMenuSwipe() {
        return false;
    }

    goToPlace(place) {
        this.navigateTo('PlaceDetailPage', place);
    }

    ionViewDidLoad() {
        this.showLoadingView();
        this.loadData();
    }
    loadData() {
        Place.load(this.params).then(data => {
          this.places = data;
    
          if (this.places.length) {
            this.showContentView();
          } else {
            this.showEmptyView();
          }
    
          this.onRefreshComplete();
    
        });
      }
    
}
