import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksController } from './links/links.controller';
import { LinksService } from './links/links.service';
import { LinksModule } from './links/links.module';
import * as dotenv from 'dotenv';
import * as oracledb from 'oracledb';

dotenv.config();

oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_19_28' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      // host: process.env.ORACLE_DB_HOST,
      port: 1521,
      username: process.env.ORACLE_DB_USERNAME,
      password: process.env.ORACLE_DB_PASSWORD,
      connectString: `${process.env.ORACLE_DB_HOST}:${process.env.ORACLE_DB_PORT}/${process.env.ORACLE_DB_ENDPOINT}`,
      synchronize: true,
      autoLoadEntities: true
    }),
    LinksModule
  ],
  providers: [AppService],
})
export class AppModule {}
