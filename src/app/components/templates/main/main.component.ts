import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

ativo1: boolean = true;
ativo2: boolean = false;
ativo3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo1(){
    this.ativo1 = !this.ativo1;
    this.ativo2 = false;
    this.ativo3 = false;
  }
  mudarAtivo2(){
    this.ativo2 = !this.ativo2;
    this.ativo1 = false;
    this.ativo3 = false;
  }
  mudarAtivo3(){
    this.ativo3 = !this.ativo1;
    this.ativo2 = false;
    this.ativo1 = false;
  }

}
