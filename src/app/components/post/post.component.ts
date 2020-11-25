import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ApiService]
})
export class PostComponent implements OnInit {

  post:any=[]

  constructor(private api:ApiService) {
    this.getPost()
   }

  ngOnInit(){
  }

  getPost() {
    this.api.mostrarPost().subscribe(x => {
      this.post = x;
    })
  }

}
