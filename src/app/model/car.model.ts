export interface Car {
    id: number
    nom: string
    status: Car.Status
}

export namespace Car {
    export enum Status {
        DISPO = 'Louée',
        INDISPO = 'Disponible'
    }

    export function generateFakeCars(): Car[] {
        const cars = []
        for(let i=1; i<= 15; i++){
            cars.push({
                id: i,
                nom: `Voiture N°${i}`,
                status: i % 2 === 0 ? Status.DISPO : Status.INDISPO
            })
        }
        return cars
    }
}