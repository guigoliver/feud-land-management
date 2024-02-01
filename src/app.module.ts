import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcreModule } from './acre/acre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acre } from './acre/entities/acre.entity';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3001,
    username: 'root',
    password: 'root',
    database: 'feud',
    entities: [Acre],
    synchronize: true,
    logging: true,
  }),
    AcreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
