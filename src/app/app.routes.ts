import { Routes, RouterModule  } from '@angular/router';
//App Components
import { HomeComponent } from './components/configuration/home/home.component'
import { AllPlacesComponent } from './components/places/all-places/all-places.component';
import { CreatePlaceComponent } from './components/places/create-place/create-place.component';
import { PlaceDetailsComponent } from './components/places/place-details/place-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'place-details/:id', component: PlaceDetailsComponent },
    { path: 'new-place', component: CreatePlaceComponent },
    { path: 'places', component: AllPlacesComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
  ];
