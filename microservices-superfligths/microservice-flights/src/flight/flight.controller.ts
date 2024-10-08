import { Controller } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FlightMSG } from 'src/common/constants';

@Controller()
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @MessagePattern(FlightMSG.CREATE)
  create(@Payload() flightDTO: FlightDTO) {
    return this.flightService.create({ flightDTO });
  }

  @MessagePattern(FlightMSG.FIND_ALL)
  findAll() {
    return this.flightService.findAll();
  }

  @MessagePattern(FlightMSG.FIND_ONE)
  findById(@Payload() id: string) {
    return this.flightService.findById({ id });
  }

  @MessagePattern(FlightMSG.UPDATE)
  updateById(@Payload() payload: any) {
    const { id, flightDTO } = payload;
    return this.flightService.updateById({ id, flightDTO });
  }

  @MessagePattern(FlightMSG.DELETE)
  deleteById(@Payload() id: string) {
    return this.flightService.deleteById({ id });
  }

  @MessagePattern(FlightMSG.ADD_PASSENGER)
  addPassenger(@Payload() payload: any) {
    const { flightId, passengerId } = payload;
    return this.flightService.addPassenger({ flightId, passengerId });
  }
}
