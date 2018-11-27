import { Component, OnInit } from '@angular/core';
import { Accion } from '../accion';
import { ACCIONES } from '../lista-acciones';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})

export class AccionesComponent implements OnInit {

  acciones = ACCIONES;

  constructor() { }

  ngOnInit() {
  }

}
