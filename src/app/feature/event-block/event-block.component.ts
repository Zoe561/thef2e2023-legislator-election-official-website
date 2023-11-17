import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.scss'],
})
export class EventBlockComponent {
  @Input() imgPath!: string;
  @Input() title!: string;
  @Input() time!:string;
  @Input() desc!:string;
}
