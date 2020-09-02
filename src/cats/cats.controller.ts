// ただのGET
// import { Controller, Get } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {
//   @Get('testt')
//   findAll(): string {
//     return 'This action returns all cats';
//   }
// }

// ＠Injectable
// import { Controller, Get, Post, Body } from '@nestjs/common';
// // import { CreateCatDto } from './dto/create-cat.dto';
// import { CatsService } from './cats.service';
// import { Cat } from './interfaces/cat.interface';

// @Controller('cats')
// export class CatsController {
//   constructor(private catsService: CatsService) {}

//   @Post()
//   async create(@Body() createCatDto: CreateCatDto) {
//     this.catsService.create(createCatDto);
//   }

//   @Get()
//   async findAll(): Promise<Cat[]> {
//     return this.catsService.findAll();
//   }
// }

// Promise
import { Controller, Get } from '@nestjs/common'
import { CatsService } from './cats.service'
import { Cat } from './interfaces/cat.interface'

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll()
    }
}
