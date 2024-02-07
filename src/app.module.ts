import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcreModule } from './acre/acre.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Acre } from './acre/entities/acre.entity';
import { LandParcelModule } from './land-parcel/land-parcel.module';

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
    AcreModule,
    LandParcelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
