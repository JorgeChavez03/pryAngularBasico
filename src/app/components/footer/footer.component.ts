import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  urlEscudoUnc='assets/imgs/iunc.jpg';
  correoUnc='@Universidad Nacional de Cajamarca';
  facultad='Facultad de Ingeniería';
  escuela='Escuela de Ingenieria de Sistemas';

  urlFoto='assets/imgs/img10.jpg';
  myCorreo='jechavezb@unc.edu.pe';
  myNombre='CHAVEZ BRAVO JORGE EDSON';
  myCarrera='Estudiante de Ingenieria de Sistemas';

  ngOnInit(): void {
  }

}
