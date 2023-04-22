import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  popup: unknown;

  openPopup(): void {
    this.popup = true;
  }

  closePopup(): void {
    this.popup = false;
  }
}
