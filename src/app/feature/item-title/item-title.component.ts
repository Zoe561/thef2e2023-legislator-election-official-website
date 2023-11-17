import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-title',
  template: `<div class="text-primary-500 text-display">{{title}}</div><div class="text-primary-500 text-subtitle">{{subtitle}}</div>`,
  styleUrls: ['./item-title.component.scss'],
})
export class ItemTitleComponent {
  @Input() title:string = '';
  @Input() subtitle:string = '';
 }
