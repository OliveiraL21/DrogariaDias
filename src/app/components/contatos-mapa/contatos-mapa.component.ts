import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-mapa',
  templateUrl: './contatos-mapa.component.html',
  styleUrls: ['./contatos-mapa.component.scss'],
})
export class ContatosMapaComponent implements OnInit {
  latitude: number = -22.346445170939926;
  longitude: number = -46.94231557998692;
  constructor() {}

  ngOnInit(): void {}
}
