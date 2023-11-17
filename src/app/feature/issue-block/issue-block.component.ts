import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-issue-block',
  templateUrl: './issue-block.component.html',
  styleUrls: ['./issue-block.component.scss'],
})
export class IssueBlockComponent {
  @Input() imgPath: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
}
