import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import{ListapaisesI} from '../../modelos/listapaises.interface';
import{peruI} from '../../modelos/peru.interface';
import{postI} from '../../modelos/post.interface'


@Injectable()
export class ApiService{

    url:string="https://restcountries.eu/rest/v2/";

    url2:string="https://jsonplaceholder.typicode.com/posts";

    constructor(private http: HttpClient){}

    datosPaises():Observable<ListapaisesI[]>{
        let dir=this.url+"all";
        return this.http.get<ListapaisesI[]>(dir);
    }

    soloPeru():Observable<peruI[]>{
        let dir=this.url+"name/peru?fullText=true";
        return this.http.get<peruI[]>(dir);
    }

    mostrarPost():Observable<postI[]>{
        let dir=this.url2;
        return this.http.get<postI[]>(dir);
    }

}