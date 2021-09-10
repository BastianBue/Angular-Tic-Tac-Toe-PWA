import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
   <div class="square">
        <h1 *ngIf="owner">{{owner}}</h1>
        </div>
  `,
  styles: [
 
  ]
})
export class SquareComponent {

 @Input() square : number = 0;
 @Input() owner : "X"| "O" | null = null;

}
