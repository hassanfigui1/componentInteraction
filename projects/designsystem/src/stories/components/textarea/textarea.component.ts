import { Component, EventEmitter, Input, Output, ViewChild,SimpleChanges,ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
@Component({
  selector: 'ds-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent implements OnChanges{
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() placeholder = '';
  @Input() maxRow = '5';
  @Input() minRow = '1';
  @Input() value ='';
  @Input() path = '';
  @Input() type: 'text' | 'email' | 'number' = 'text';
  @Input() color: 'primary' | 'accent' | 'warn' = 'accent';

  @Input() autoResize = false;
  @Input() showHint = false;
  @Input() hintMessage = '';

  @Input() showError = false;
  @Input() errorMessage = '';

  @Input() tooltip = '';
  @Input() iconClass = 'security';
  @Input() internal = false;

  @Input() disabled = false;
  @Input() required = false;
  @Input() unique = false;

  @Output() inputChange = new EventEmitter<{
    path: string;
    value: string;
    unique: boolean;
  }>();

  pwHide = true;

  onChangeInput() {
    this.inputChange.emit({
      path: this.path,
      value: this.value,
      unique: this.unique,
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.value=changes['value'].currentValue;
  }
  
}
