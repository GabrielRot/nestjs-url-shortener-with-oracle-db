import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinksController } from 'src/links/links.controller';
import { Links } from 'src/links/links.entity';
import { LinksService } from 'src/links/links.service';

@Module({
  imports: [TypeOrmModule.forFeature([Links])],
  providers: [LinksService],
  exports: [LinksService],
  controllers: [LinksController],
})
export class LinksModule {}
