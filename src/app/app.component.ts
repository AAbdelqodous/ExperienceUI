import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// App Components
import { PlaceFormComponent } from './place-form/place-form.component';
import { PlaceTableComponent } from './place-table/place-table.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlaceFormComponent,
    PlaceTableComponent,
    PlaceDetailsComponent,
    NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ExperienceUI';
}
