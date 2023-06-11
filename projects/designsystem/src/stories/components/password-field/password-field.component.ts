import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
})
export class PasswordFieldComponent {
  @Input() label = 'Password';
  @Input() placeholder = 'Password';
  @Input() ariaLabel = 'Password field';
  @Input() color: 'primary' | 'accent' | 'warn' = 'accent';
  @Input() ariaLabelHideBtn = 'Show password';
  @Input() required = false;
  @Input() showError = false;
  @Input() matchError = false;
  @Input() errorMessage = '';
  @Input() matchPasswordMessage = '';
  @Input() pattern = '';
  @Output() inputChange = new EventEmitter<{ passwordValue: string }>();
  @Output() onchange = new EventEmitter<{ passwordValue: string }>();
  @Input() minlength = '';
  passwordValue = '';
  hide = true;

  onChangeInput() {
    this.inputChange.emit({
      passwordValue: this.passwordValue,
    });
  }
  onChange() {
    this.onchange.emit({
      passwordValue: this.passwordValue,
    });
  }
}
