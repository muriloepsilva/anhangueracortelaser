import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto',
  imports: [CommonModule],
  templateUrl: './projeto.component.html',
  styleUrl: './projeto.component.scss',
})
export class ProjetoComponent {
  services = [
    {
      image: 'assets/imagens/image 6.png',
      title: 'Corte a Laser',
      description:
        'Precisão milimétrica para cortes detalhados e sem rebarbas.',
    },
    {
      image: 'assets/imagens/image-3.png',
      title: 'Dobra de Chapas',
      description:
        'Alinhamento perfeito e sob medida para atender às necessidades do seu projeto.',
    },
    {
      image: 'assets/imagens/image-2.png',
      title: 'Guilhotina e Calandra',
      description:
        'Produzimos cortes retos e curvaturas precisas para peças complexas.',
    },
    {
      image: 'assets/imagens/image-1.png',
      title: 'Pintura Eletrostática',
      description:
        'Proteção contra corrosão e acabamento impecável para durabilidade estética.',
    },
    {
      image: 'assets/imagens/image.png',
      title: 'Solda Especializada',
      description:
        'Estruturas resistentes e bem acabadas, realizadas por uma equipe de especialistas.',
    },
    {
      image: 'assets/imagens/usinagem.jpg',
      title: 'Usinagem Personalizada',
      description:
        'Componentes fabricados com precisão milimétrica para qualquer tipo de aplicação.',
    },
  ];
}
