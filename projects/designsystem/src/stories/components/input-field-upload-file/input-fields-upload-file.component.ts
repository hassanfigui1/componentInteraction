import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-input-fields-upload-file',
  templateUrl: './input-fields-upload-file.component.html',
  styleUrls: ['./input-fields-upload-file.component.scss'],
})
export class InputFieldsUploadFileComponent {
  @Input() label = '';
  @Input() ariaLabel = '';
  @Input() placeholder = '';

  @Input() value = '';
  @Input() path = '';
  @Input() type: 'text' | 'email' | 'number' = 'text';

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
  @Input()
  color: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() inputChange = new EventEmitter<{
    path: string;
    value: string;
    unique: boolean;
  }>();

  @Input() files?: Array<any>;
  @Output() filesChange = new EventEmitter<any>();
  @Output() onfilesChange = new EventEmitter<any>();

  onChangeInput() {
    this.filesChange.emit(this.files);
    this.onfilesChange.emit();
  }
}
