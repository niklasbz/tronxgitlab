import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {
  @Input() title: string | null = '';
  @Input() last: boolean = false;
}
