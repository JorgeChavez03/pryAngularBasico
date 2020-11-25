import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
  providers: [ApiService]
})
export class PaisComponent implements OnInit {

  pais:any=[]

  constructor(private api:ApiService) {
    this.getDatosPaises()
   }

  ngOnInit(){
  }

  getDatosPaises() {
    this.api.datosPaises().subscribe(x => {
      this.pais = x;
    })
  }

}
