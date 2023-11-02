import { Component, Input } from '@angular/core';
import { iStep } from 'src/app/interfaces/istep.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {

  @Input()
  public frasesList: iStep[] = [];

  public currentStep: number = 0;

  public stepBack(): void {
    if (this.currentStep !== 0) --this.currentStep;
  }

  public stepForward(): void {
    if (this.currentStep !== this.frasesList.length-1) ++this.currentStep;
  }

  public moveToDot(i: number): void {
    this.currentStep = i;
  }

}
