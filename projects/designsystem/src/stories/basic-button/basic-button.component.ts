import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
})
export class BasicButtonComponent {
  @Input() tooltipLabel = '';
  @Input() toolTipPosition: 'left' | 'right' | 'above' | 'below' = 'below';
  @Input() toolTipHideDelay = '';
  @Input() label = '';
  @Input() disabled = false;
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() fullWidth = false;

  @Output()
  clickButton = new EventEmitter<MouseEvent>();
}
