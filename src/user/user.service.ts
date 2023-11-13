import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
async  create(createUserDto: CreateUserDto) {
    return await User.create({
      name:createUserDto.name,
      phone:createUserDto.phone
    })
  }

 async findAll() {
    return await User.findAll()
  }

 async findOne(id: number) {
    return await User.findByPk(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

 async remove(id: number) {
    return await User.destroy({
      where:{
        id:id
      }
    })
  }
}
