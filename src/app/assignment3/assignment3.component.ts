import { Component, OnInit } from '@angular/core';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayDetails = false;
  clickLog = [];

  constructor() { }

  ngOnInit(): void {
  }

  detailsButtonClicked() {
    this.displayDetails = !this.displayDetails;
    this.clickLog.push(Date.now());
  }
}
