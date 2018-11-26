import { Component, OnInit } from '@angular/core';
import { Accion } from '../accion';
import { ACCIONES } from '../mock-acciones';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})

export class AccionesComponent implements OnInit {

  acciones = ACCIONES;
  selectedAccion: Accion;

  constructor() { }

  ngOnInit() {
  }

    onSelect(accion: Accion): void {
    this.selectedAccion = accion;
  }
}
