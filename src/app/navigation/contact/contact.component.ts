import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  fone: string = './././assets/img/fone.png';
  altFone: string = 'Telefone';
  email: string = './././assets/img/contato.png';
  altEmail: string = 'Email';

  constructor() { }

  ngOnInit() {
  }

}
