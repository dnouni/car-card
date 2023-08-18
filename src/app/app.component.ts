import { Component } from '@angular/core'
import { Car } from './model/car.model'
import { CarService } from './service/car/car.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = []

  carStatus: typeof Car.Status = Car.Status

  constructor (private carService: CarService) {

  }

  ngOnInit() {
    this.cars = this.carService.cars
  }
  
  handleSwitchStatus (carId: number): void {
    this.carService.switchStatus(carId)
    this.cars = this.carService.cars
  }

  handleSwitchAll (nextStatus: Car.Status) {
    this.carService.switchAllStatus(nextStatus)
    this.cars = this.carService.cars
  }
}
