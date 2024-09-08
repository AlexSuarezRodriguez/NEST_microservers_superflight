import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { FLIGHT } from 'src/common/models/models';
import { FlightDTO } from './dto/flight.dto';

@Injectable()
export class FlightService {
  constructor(@InjectModel(FLIGHT.name) private readonly model: Model<IFlight>) {}

  async create({ flightDTO }: { flightDTO: FlightDTO }): Promise<IFlight> {
    const newPassenger = new this.model(flightDTO);
    return await newPassenger.save();
  }

  async findAll(): Promise<IFlight[]> {
    return await this.model.find().populate('passengers');
  }

  async findById({ id }: { id: string }): Promise<IFlight> {
    return await this.model.findById(id).populate('passengers');
  }

  async updateById({ id, flightDTO }: { id: string; flightDTO: FlightDTO }): Promise<IFlight> {
    return await this.model.findByIdAndUpdate(id, flightDTO, { new: true });
  }

  async deleteById({ id }: { id: string }) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      message: 'Deleted',
    };
  }

  async addPassenger({ flightId, passengerId }: { flightId: string; passengerId: string }): Promise<IFlight> {
    return await this.model.findByIdAndUpdate(
      flightId,
      {
        $addToSet: { passengers: passengerId },
      },
      { new: true },
    ).populate('passengers');
  }
}
