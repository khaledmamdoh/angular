import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import e from 'express';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  disply(): void {

   true;
  }


}
