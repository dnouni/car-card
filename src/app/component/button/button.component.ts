import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() name: string =""
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  onClickButton () {
    this.clicked.emit()
  }

}
