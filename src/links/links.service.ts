import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Links } from 'src/links/links.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LinksService {
  constructor(@InjectRepository(Links) private linksRepository: Repository<Links>) {
  }

  async create(linksData: Partial<Links>): Promise<Links> {
    const link = this.linksRepository.create(linksData);

    return this.linksRepository.save(link);
  }

  async getLinks(codigoLinkEncurtado: string): Promise<Links | null> {
    const links = await this.linksRepository.findOne({ where: { codigoLinkEncurtado } }); 
    return links;
  }

}
