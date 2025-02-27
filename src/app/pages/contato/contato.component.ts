import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { GoogleMap, MapMarker } from '@angular/google-maps';
@Component({
  selector: 'app-contato',
  imports: [GoogleMap, MapMarker, FormComponent],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  center = { lat: -22.878952795786375, lng: -47.11978834110448 }; // Localização inicial (São Paulo)
  zoom = 19;

  markerPosition = { lat: -22.878952795786375, lng: -47.11978834110448 }; // Posição do marcador
  markerOptions = {
    animation: google.maps.Animation.DROP,
    icon: {
      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png', // Ícone azul
      scaledSize: new google.maps.Size(40, 40), // Ajustar o tamanho
    },
  };
}
