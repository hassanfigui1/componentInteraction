import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent {
  @Input() id = '';
  @Input() disabled = false;

  @Output() changeFile = new EventEmitter<Event>();
  uploadFile(event: Event) {
    this.changeFile.emit(event);
    console.log(event);
  }
}
