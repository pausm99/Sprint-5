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
}
