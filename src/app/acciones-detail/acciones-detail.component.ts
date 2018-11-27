import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Accion } from '../accion';


@Component({
  selector: 'app-acciones-detail',
  templateUrl: './acciones-detail.component.html',
  styleUrls: ['./acciones-detail.component.css']
})
export class AccionesDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
