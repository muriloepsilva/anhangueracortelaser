import { Component, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Card } from '../../components/card/utils/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  servicesCards: Card[] = [
    {
      image: 'assets/corte.png',
      title: 'Corte a Laser',
    },
    {
      image: 'assets/dobra.png',
      title: 'Dobra CNC',
    },
    {
      image: 'assets/calandra.png',
      title: 'Calandra',
    },
    {
      image: 'assets/pintura.png',
      title: 'Pintura Eletrostática',
    },
    {
      image: 'assets/solda.png',
      title: 'Solda',
    },
  ];

  sectorsCards: Card[] = [
    {
      image: 'assets/ferroviaria.png',
      title: 'Ferroviário e <br/> Automobilístico',
    },
    {
      image: 'assets/construcao.png',
      title: 'Construção Civil',
    },
    {
      image: 'assets/farmaceutica.png',
      title: 'Indústria Médica e <br/> Farmacêutica',
    },
    {
      image: 'assets/arquitetura.png',
      title: 'Arquitetura e <br/> Design de Interiores',
    },
  ];
}
