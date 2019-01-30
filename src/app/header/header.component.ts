import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerInput: string;

  getHeaderInpu(name: string) {
    this.headerInput = name;
  }

  showHeaderInput($event) {
    this.headerInput = $event.target.value;
  }
}
