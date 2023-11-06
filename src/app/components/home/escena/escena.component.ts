import { Component, Input } from '@angular/core';
import { iStep } from 'src/app/interfaces/istep.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
  animations: [
    trigger('changeElement', [
      state('in', style({ opacity: 1 , transform: 'translateX(0%)'})),
      state('out', style({ opacity: 0 , transform: 'translateX(100%)'})),
      transition('in => out', animate('0.5s')),
      transition('out => in', animate('0.5s')),
    ]),
  ],
})
export class EscenaComponent {

  @Input()
  public frasesList: iStep[] = [];

  public currentStep: number = 0;
  public nextStep: number = 0;
  public changeState: 'in' | 'out' = 'in';

  public stepForward(): void {
    if (this.currentStep !== this.frasesList.length - 1) {
      this.changeState = 'out';
      this.nextStep = this.currentStep + 1;

      setTimeout(() => {
        this.currentStep = this.nextStep;
        this.changeState = 'in';
      }, 500); // Ajusta el tiempo según la duración de la animación
    }
  }

  public stepBack(): void {
    if (this.currentStep !== 0) {
      this.changeState = 'out';
      this.nextStep = this.currentStep - 1;

      setTimeout(() => {
        this.currentStep = this.nextStep;
        this.changeState = 'in';
      }, 500); // Ajusta el tiempo según la duración de la animación
    }
  }

  public moveToDot(i: number): void {
    this.changeState = 'out';
    this.nextStep = i;

    setTimeout(() => {
      this.currentStep = this.nextStep;
      this.changeState = 'in';
    }, 500);
  }
}
