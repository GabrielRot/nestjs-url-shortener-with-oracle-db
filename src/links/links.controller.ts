import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import type { Response } from 'express';
import { Links } from 'src/links/links.entity';
import { LinksService } from 'src/links/links.service';

@Controller()
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post('/encurtar')
  createLink(@Body() payload: Partial<Links>): Promise<Links | null> {
    return this.linksService.create(payload);
  }

  @Get(':codigo')
  async redirect(@Param('codigo') codigo: string, @Res() res: Response) {
    const links = await this.linksService.getLinks(codigo);

    const url = links?.linkOrigem;

    return res.redirect((url as string));
  }
}
