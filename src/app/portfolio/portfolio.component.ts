import { Component, ElementRef, ViewChild } from '@angular/core';
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

  imgSrc!: any;


  @ViewChild('myItem') myElement!: ElementRef

  showElement(): void {
    console.log(this.myElement.nativeElement.currentSrc)
  }
}
