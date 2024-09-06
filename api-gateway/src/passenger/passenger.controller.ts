import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { PassengerDTO } from './dto/passsenger.dto';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { Observable } from 'rxjs';
import { PassengerMSG } from 'src/common/constants';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('passengers')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.CREATE, passengerDTO);
  }

  @Get()
  findAll(): Observable<IPassenger[]> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
  }

  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body() passengerDTO: PassengerDTO,
  ): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {
      id,
      passengerDTO,
    });
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string): Observable<any> {
    return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
  }
}
