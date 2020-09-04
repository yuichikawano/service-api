import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { CatsController } from './cats/cats.controller'
import { CatsService } from './cats/cats.service'
import { UserModule } from './user/user.module'
import { UserController } from './user/user.controller'
import { UserService } from './user/user.service'
import { AppController } from './app.controller'
import { AppService } from './app.service'
// DB_URL="mysql://ns_user:sM5T\\$e7D4@localhost/cuc_pcr_test"
import * as path from 'path'
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'do0514mysql',
            database: 'service_dev',
            entities: [path.resolve(__dirname, '**/*.entity{.ts,.js}')],
            synchronize: true,
        }),
        UserModule,
        // TypeOrmModule.forRoot(ormConfig as TypeOrmModuleOptions)
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
