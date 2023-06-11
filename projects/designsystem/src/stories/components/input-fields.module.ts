import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TextareaComponent } from './textarea/textarea.component';
import { InputFileComponent } from './input-file/input-file.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InputFieldsUploadFileComponent } from './input-field-upload-file/input-fields-upload-file.component';
@NgModule({
  declarations: [
    InputFieldComponent,
    PasswordFieldComponent,
    TextareaComponent,
    InputFileComponent,
    InputFieldsUploadFileComponent,
    InputFieldsUploadFileComponent,
  ],
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [
    InputFieldComponent,
    PasswordFieldComponent,
    TextareaComponent,
    InputFileComponent,
    InputFieldsUploadFileComponent,
  ],
})
export class InputFieldsModule {}
