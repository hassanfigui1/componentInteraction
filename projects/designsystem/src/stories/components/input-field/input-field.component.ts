import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-input',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() placeholder = '';

  @Input() value = '';
  @Input() path = '';
  @Input() type: 'text' | 'email' | 'number' = 'text';

  @Input() showHint = false;
  @Input() hintMessage = '';
  @Input() maxlength = '';

  @Input() showError = false;
  @Input() errorMessage = '';

  @Input() tooltip = '';
  @Input() iconClass = 'security';
  @Input() internal = false;

  @Input() disabled = false;
  @Input() required = false;
  @Input() unique = false;
  @Input() files!: Array<any>;
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() inputChange = new EventEmitter<{
    path: string;
    value: string;
    unique: boolean;
  }>();

  @Output() Change = new EventEmitter<{
    path: string;
    value: string;
    unique: boolean;
    files: any;
  }>();

  pwHide = true;

  onChangeInput() {
    this.inputChange.emit({
      path: this.path,
      value: this.value,
      unique: this.unique,
    });
  }
  onChange() {
    this.Change.emit({
      path: this.path,
      value: this.value,
      unique: this.unique,
      files: this.files,
    });
  }
}
