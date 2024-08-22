import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
// primeng
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
// service
import { PlaceService } from '../../../services/api/places/place.service';


@Component({
  selector: 'app-all-places',
  standalone: true,
  imports: [TableModule, FormsModule, CommonModule, ButtonModule, HttpClientModule],
  providers: [PlaceService, Router],
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.scss']
})
export class AllPlacesComponent implements OnInit {
  places: any[] = [];

  constructor(
    private router: Router,
    private placeService: PlaceService
  ) {
  }

  ngOnInit(): void {
    console.log('------- ngOnInit() -----------');
    // Call service method to get places
    this.placeService.getAllPlaces().subscribe({
      next: (data: any[]) => {
        this.places = data;
        console.log(data);
      }
    });
    console.log('------- ngOnInit(): finished -----------');
  }

  goToPlaceDetails(id: string) {
    console.log('Navigating to place details:', id);
    this.router.navigate(['/place-details', id])
  }
}
