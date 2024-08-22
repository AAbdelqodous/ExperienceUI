import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// App Components
import { NavBarComponent } from './components/configuration/nav-bar/nav-bar.component'
import { AllPlacesComponent } from './components/places/all-places/all-places.component';
import { CreatePlaceComponent } from './components/places/create-place/create-place.component';
import { PlaceDetailsComponent } from './components/places/place-details/place-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    CreatePlaceComponent,
    AllPlacesComponent,
    PlaceDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ExperienceUI';
}
