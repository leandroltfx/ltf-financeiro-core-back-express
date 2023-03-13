import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://leandroltfx:asd123@cluster0.wyld4ap.mongodb.net/ltf-financeiro-database-mongo')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
