import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Car } from 'src/app/model/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cars: Car[] = []
  @Output() switchStatusClicked: EventEmitter<number> = new EventEmitter<number>()

  onClickSwitchStatus (carId: number): void {
    this.switchStatusClicked.emit(carId)
  }

}
