import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor() { }

  nombreEmpresa='Viajes Seguros';
  emailEmpresa='contactos@viajesseguros.com';
  direcEmpresa='Av. Heroes #2021';
  telefEmpresa='976-895600';

  descripcion='Empresa joven dedicada a realizr vuelos internacionales a precios comodos y accesibles con promociones por fiestas navideñas'

  ngOnInit(): void {
  }

}
