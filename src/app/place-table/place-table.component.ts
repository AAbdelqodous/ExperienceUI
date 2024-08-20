import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
//PrimeNG Components
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
// Services
import { PlaceService } from 'src/app/services/api/places/place.service';

@Component({
  selector: 'app-place-table',
  standalone: true,
  imports: [ TableModule, FormsModule, CommonModule, ButtonModule ],
  templateUrl: './place-table.component.html',
  styleUrl: './place-table.component.scss'
})
export class PlaceTableComponent implements OnInit {
 places: any[] = [];

  constructor(
    private router: Router,
    private placeService: PlaceService
    ){
      }

    ngOnInit(): void {
        this.placeService.getAllPlaces()
          .subscribe({
            next: (data) => {
              this.places = data;
              console.log(data);
            }
          });
      }

  goToPlaceDetails(id: string) {
      // Implement your logic here (e.g., emit an event, fetch data)
      console.log('Navigating to place details:', id);
      this.router.navigate(['/place-details', id])
    }
}
