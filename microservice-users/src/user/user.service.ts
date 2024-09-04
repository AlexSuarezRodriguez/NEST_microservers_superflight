import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}

  async findByUsername({username}:{username:string}):Promise<IUser>{
    return await this.model.findOne({username})
  }

  async checkPassword({password, passwordRegister}:{password:string, passwordRegister:string}):Promise<boolean>{
    return await bcrypt.compare(password, passwordRegister);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create({ userDTO }: { userDTO: UserDTO }): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this.model({ ...userDTO, password: hash });
    return await newUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.model.find();
  }

  async findOne({ id }: { id: string }): Promise<IUser> {
    return await this.model.findById(id);
  }

  async updateById({ id, userDTO }: { id: string; userDTO: UserDTO }): Promise<IUser> {
    const hash = await this.hashPassword(userDTO.password);
    const user = { ...userDTO, password: hash };

    return await this.model.findByIdAndUpdate(id, user);
  }

  async deleteById({ id }: { id: string }) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      message: 'Deleted',
    };
  }
}
