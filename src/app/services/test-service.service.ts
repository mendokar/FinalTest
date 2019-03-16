import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  API_ENDPOINT = "http://www.mocky.io/v2/5a663e0d2e0000002b323e0e";

  constructor(private httpClient: HttpClient) { }


  /**
   * getDataTest
   */
  public getDataTest() {
    return this.httpClient.get(this.API_ENDPOINT);
  }
}
