import { Controller } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMSG } from 'src/common/constants';

@Controller() 
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMSG.CREATE)
  create(@Payload() userDTO: UserDTO) {
    return this.userService.create({ userDTO });
  }

  @MessagePattern(UserMSG.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMSG.FIND_ONE)
  findOne(@Payload('id') id: string) {
    return this.userService.findOne({ id });
  }

  @MessagePattern(UserMSG.UPDATE)
  updateById(@Payload() payload: any) {
    const{id, userDTO} = payload
    return this.userService.updateById({ id, userDTO });
  }

  @MessagePattern(UserMSG.DELETE)
  deleteById(@Payload('id') id: string) {
    return this.userService.deleteById({ id });
  }

  @MessagePattern(UserMSG.VALID_USER)
  async validateUser(@Payload() payload:any): Promise<any> {
    const { username, password } = payload;
    const user = await this.userService.findByUsername({ username });
    const isValidPassword = await this.userService.checkPassword({ password, passwordRegister: user.password });
    if (user && isValidPassword) {
      return user;
    }

    return null;
  }
}
