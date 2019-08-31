import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  mushrooms: string = './././assets/img/portfolio-1.jpg';
  altMushrooms: string = 'Cogumulos';
  wheatField: string = './././assets/img/portfolio-2.jpeg';
  altWheatField: string = 'Campo de trigo';
  mountains: string = './././assets/img/portfolio-3.jpeg';
  altMountains: string = 'Montanhas';
  frozenForest: string = './././assets/img/portfolio-4.jpg';
  altFrozenForest: string = 'Floresta congelada';
  beach: string = './././assets/img/portfolio-5.jpeg';
  altBeach: string = 'Praia';
  hart: string = './././assets/img/portfolio-6.jpeg';
  altHart: string = 'Cervo na natureza';

  constructor() { }

  ngOnInit() {
  }

}
