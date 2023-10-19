import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.css']
})
export class TextElementComponent
{
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() noContent: string = '-';
}
