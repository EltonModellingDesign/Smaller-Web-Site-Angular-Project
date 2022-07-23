import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  classChange = 'none'

  constructor() { }

  ngOnInit(): void {
  }

  funfou(){
    if(this.classChange=='none'){this.classChange='on'}
    else{this.classChange='none'}
    console.log('funfou')
  }

}
