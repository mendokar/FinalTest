import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-domicilios-test',
  templateUrl: './domicilios-test.component.html',
  styleUrls: ['./domicilios-test.component.scss']
})
export class DomiciliosTestComponent implements OnInit {
  value = '';

  constructor(private _dataService: TestServiceService,
              private modalService: NgbModal) { }
  testData = [];
  ngOnInit() {
    this.getDataService();
  }

  /**
   * getDataService
   */
  public getDataService() {
    this._dataService.getDataTest().subscribe((response: any) => {
      console.log((response.length));

      for (let i = 0; i < response.length; i++) {

        this.testData.push({
          user: response[i].user.name,
          text: response[i].text,
          comments: response[i].comments
        })

      }




    });
  }


  onEnter(value: string, i) {
    this.value = value + "-" + i;
    for (let i = 0; i < this.testData.length; i++) {

      this.testData.push({
        user: this.testData[i].user.name,
        text: this.testData[i].text,
        comments: this.testData[i].comments
      })

    }


  }


  open(content) {   
    this.modalService.open(content);

  }

}
