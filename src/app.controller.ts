import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Ovo je prva putanja: ROOT';
  }

  @Get('world')
  getWorld(): string {
    return 'Ovo je druga putanja';
  }
}
