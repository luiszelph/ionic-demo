import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBackButton, IonCardHeader, IonCard, IonCardSubtitle, IonCardContent, IonCardTitle, IonAvatar, IonItem, IonLabel, IonChip, IonFooter, IonInput } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonInput, IonFooter, IonChip, IonLabel, IonItem, IonAvatar, IonCardTitle, IonCardContent, IonCardSubtitle, IonCard, IonCardHeader, IonBackButton, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  
  Personajes: Array<Personaje> = [];
  pagina: number = 1;
  cargando: boolean = false;

  constructor(private PersonajesService: PersonajesService) {}

  ngOnInit() {
    this.PersonajesService.fnCargar(1).subscribe( res => {
      this.Personajes = res;
    }

    );

  }

  cargarPorPagina(event: CustomEvent){
    this.cargando = true;
    const paginaSeleccionada = event.detail.value;
    this.PersonajesService.fnCargar(paginaSeleccionada).subscribe(
      (listado) => {
        this.Personajes = listado;
        this.cargando = false;
      }
    )
  }
}