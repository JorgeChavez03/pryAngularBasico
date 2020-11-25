import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service'

@Component({
  selector: 'app-peru',
  templateUrl: './peru.component.html',
  styleUrls: ['./peru.component.css'],
  providers: [ApiService]
})
export class PeruComponent implements OnInit {

  peru: any = []

  constructor(private api: ApiService) {
    this.getDataPeru()
  }

  ngOnInit() :void{
  }

  getDataPeru() {
    this.api.soloPeru().subscribe(x => {
      this.peru = x;
    })
  }

}
