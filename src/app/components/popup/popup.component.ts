import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Output() closePopup: EventEmitter<void> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closePopup.emit();
  }

}
