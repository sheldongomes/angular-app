import { Component, OnInit } from '@angular/core';
import { phones } from '../../phones';

@Component({
  selector: 'app-cell-phones',
  templateUrl: './cell-phones.component.html',
  styleUrls: ['./cell-phones.component.css']
})
export class CellPhonesComponent implements OnInit {
  phones = phones;

  constructor( ) { }

  ngOnInit() { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
