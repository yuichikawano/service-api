import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../dto/user/createUserDto'
import { EntityManager } from 'typeorm/entity-manager/EntityManager'

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    async findById(id: number) {
        return await this.userRepository.findOne(id)
    }

    async create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }
}
