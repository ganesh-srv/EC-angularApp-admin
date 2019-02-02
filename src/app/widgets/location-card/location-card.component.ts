import { Component, OnInit } from '@angular/core';
import { LocationCardService } from '../location-card/location-card.service';
@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  location: any;

  constructor(private readonly locationservice: LocationCardService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.location = position;

      console.log('location', this.location.coords.latitude);
      this.findArea( this.location.coords.latitude, this.location.coords.longitude);
    });
  }

  findArea(lat,lng) {
    console.log('lat','lng',lat,lng);
    
    // this.locationservice.getCurrentIpLocation(lat,lng);

  }


}
