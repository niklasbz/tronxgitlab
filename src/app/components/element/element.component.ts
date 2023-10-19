import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {
  @Input() title: string = '';
  @Input() last: boolean = false;
}
