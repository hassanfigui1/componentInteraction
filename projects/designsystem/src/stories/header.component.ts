import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { User } from './User';

@Component({
  selector: 'storybook-header',
  template: `<header>
  </header>`,
  styleUrls: ['./header.css'],
})
export default class HeaderComponent {
  @Input()
  user: User | null = null;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();
}
