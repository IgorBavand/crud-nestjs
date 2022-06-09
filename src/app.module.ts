import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://igorbavand:senhaDificil123@cluster0.gq941lo.mongodb.net/test')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
