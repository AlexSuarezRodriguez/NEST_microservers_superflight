import { Controller } from '@nestjs/common';
import { PassengerDTO } from './dto/passsenger.dto';
import { PassengerService } from './passenger.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/constants';

@Controller()
export class PassengerController {
  constructor(private readonly PassengerService: PassengerService) {}

  @MessagePattern(PassengerMSG.CREATE)
  create(@Payload() passengerDTO: PassengerDTO) {
    return this.PassengerService.create({ passengerDTO });
  }

  @MessagePattern(PassengerMSG.FIND_ALL)
  findAll() {
    return this.PassengerService.findAll();
  }

  @MessagePattern(PassengerMSG.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.PassengerService.findOne({ id });
  }

  @MessagePattern(PassengerMSG.UPDATE)
  updateByID(@Payload() paylaod: any) {
    const { id, passengerDTO } = paylaod;
    return this.PassengerService.updateByID({ id, passengerDTO });
  }

  @MessagePattern(PassengerMSG.DELETE)
  deleteById(@Payload('id') id: string) {
    return this.PassengerService.deleteById({ id });
  }
}
