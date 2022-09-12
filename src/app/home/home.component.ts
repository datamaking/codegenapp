import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { RequestModel } from '../requestmodel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  requestList: Array<RequestModel> = [];
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.requestService.getRequestList().subscribe(
      data => { console.log("Response received"); this.requestList = data },
      error => console.log("Exception occured")
    )
  }

}
