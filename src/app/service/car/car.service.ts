import { Injectable } from '@angular/core'
import { Car } from 'src/app/model/car.model'

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private _cars: Car[]

  constructor() {
    this._cars = Car.generateFakeCars()

  }

  get cars (): Car[] {
    return this._cars.map(car => ({ ...car }))
  }

  set car(newVal: Car[]) {
    this._cars = newVal
  }

  switchStatus (carId: number) {
    const indexCarToUpdate = this._cars.findIndex(b => b.id === carId)
    if(indexCarToUpdate > -1){
      this._cars[indexCarToUpdate].status = this._cars[indexCarToUpdate].status === Car.Status.DISPO
      ? Car.Status.INDISPO
      : Car.Status.DISPO
    }
  }

  switchAllStatus (nextStatus: Car.Status) {
    this._cars
      .filter(b => b.status !== nextStatus)
      .forEach(b => b.status = nextStatus)
  }
}
