import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor() { }

  login: boolean = false

  logar(){
    if(this.login){
      this.login = false
    }else{
      this.login = true
    }
    
  }

  ngOnInit(): void {
  }

}
