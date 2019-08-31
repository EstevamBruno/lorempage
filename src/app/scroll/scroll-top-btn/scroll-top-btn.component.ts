import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.css']
})
export class ScrollTopBtnComponent implements OnInit {

  windowScrolled: boolean;

  constructor() {}


  ngOnInit() {
  }

}
