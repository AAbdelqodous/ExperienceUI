import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Place {
  name_ar: string;
  address_ar: string;
  name_en: string;
  contact: string;
  description_ar: string;
  address_en: string;
  description_en: string;
  created_at: string;
  created_by: string;
  last_modified_at: string;
  last_modified_by: string;
  address_auto_num: string;
  block_no: string;
  building_name: string;
  building_no: string;
  construction_no: string;
  floor_no: string;
  full_address: string;
  government_id: string;
  locationx: string;
  locationy: string;
  note: string;
  plot_no: string;
  street: string;
  unit_no: string;
  unit_type: string;
  }
@Component({
  selector: 'app-place-form',
  standalone: true,
  imports: [ InputTextModule, ButtonModule, FormsModule, CommonModule ],
  templateUrl: './place-form.component.html',
  styleUrl: './place-form.component.scss'
})
export class PlaceFormComponent {
  place: Place = {} as Place;
  isSubmitted: boolean = false;

  onSubmit(): void{
    console.log(this.place.name_ar);
    this.isSubmitted = true;
  }
}
