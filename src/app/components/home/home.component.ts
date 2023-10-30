import { Component } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public stepService: StepsService) {}

}
