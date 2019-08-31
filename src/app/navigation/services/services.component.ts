import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services: string = './././assets/img/configs.png';
  altServices: string = 'configurações';
  accommodation: string = './././assets/img/hospedagem.png';
  altAccommodation: string = 'hospedagem';
  site: string = './././assets/img/site.png';
  altSite: string = 'site';
  heart: string = './././assets/img/coracao.png';
  altHeart: string = 'coração';

  constructor() {}

  ngOnInit() {
  }
}


