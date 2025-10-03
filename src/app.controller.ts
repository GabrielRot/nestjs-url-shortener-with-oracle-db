import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get(':codigo')
  // getLinks(@Param('codigo') codigo: string, @Res() res: Response)  {
  //   const url = await
  // }
}
