import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BasicButtonComponent } from './basic-button/basic-button.component';
@NgModule({
  imports: [CommonModule, MatBadgeModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatTooltipModule],
  declarations: [
    BasicButtonComponent,
  ],
  exports: [
    BasicButtonComponent,
  ],
})
export class ButtonsModule {}
