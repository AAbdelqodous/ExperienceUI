import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'place-details/:id', component: PlaceDetailsComponent },
    { path: 'new-place', component: PlaceFormComponent },
    { path: 'places', component: PlaceTableComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home' }
  ];
