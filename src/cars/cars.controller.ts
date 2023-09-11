import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['toyota', 'bmw', 'tesla'];

    @Get()
    getAllCars() {
        return this.cars;
    }
    @Get(':id')
    getCarById(@Param('id') id) {
        if (+id - 1 >= this.cars.length) {
            return;
        }
        let car = this.cars[id];
        return { car };
    }
}
