import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';

require('dotenv').config();

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot({

    type: 'postgres',
    url: process.env.DB_URL,
    entities:[User],
    synchronize: true


  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
