import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Element } from '@angular/compiler';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-detalha-parceiros',
  templateUrl: 'detalha-parceiros.html',
})
export class DetalhaParceirosPage {

  @ViewChild('map') mapRef: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.showMap();
    console.log(this.mapRef);
  }

  showMap() {
    //lagitude e longitude
    const location = new google.maps.LatLng(51.507351, -0.127758);

    //opções do mapa
    const options = {
      center: location,
      zoom: 16,
      streetViewControl: false,
      mapTypeId: 'terrain'
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);

  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });
  }

}
