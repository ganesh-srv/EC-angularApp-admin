import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationCardService {

  constructor(private readonly _httpClient: HttpClient) { }

//   getCurrentIpLocation(lat,lng): Observable<any> {
//     // return this._httpClient.get('http://ipinfo.io');
//     // return this._httpClient.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&sensor=true")
// }
}
