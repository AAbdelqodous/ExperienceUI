import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// PrimNG Components
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-place-details',
  standalone: true,
  imports: [ InputTextModule, ButtonModule, FormsModule, CommonModule ],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.scss'
})
export class PlaceDetailsComponent implements OnInit {

  @Input()
  place: any = {};
  placeId: any;

  // Constructor
  constructor(
    private activatedRoute: ActivatedRoute
    ) {
      }

    ngOnInit(): void{
      console.log(this.activatedRoute);
      this.placeId = this.activatedRoute.snapshot.params['id'];
    }

  // Method to handle form submission
  searchPlace():void {
    console.log('Back to search page');
  }
}
