import { Controller } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';

@Controller() 
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @MessagePattern(UserMSG.CREATE)
  create(@Payload() userDTO: UserDTO) {
    return this.usersService.create({ userDTO });
  }

  @MessagePattern(UserMSG.FIND_ALL)
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern(UserMSG.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.usersService.findOne({ id });
  }

  @MessagePattern(UserMSG.UPDATE)
  updateById(@Payload() paylaod: any) {
    const{id, userDTO} = paylaod
    return this.usersService.updateById({ id, userDTO });
  }

  @MessagePattern(UserMSG.DELETE)
  deleteById(@Payload('id') id: string) {
    return this.usersService.deleteById({ id });
  }
}
