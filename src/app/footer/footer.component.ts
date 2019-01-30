import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() footerInput: string;
  @Output() footerInputChanged = new EventEmitter<string>();

  showFooterInput($event) {
    this.footerInput = $event.target.value;
    this.footerInputChanged.emit(this.footerInput);
  }
}
