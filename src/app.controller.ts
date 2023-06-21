import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Decorator são funções que implementam outras funções dento de sí
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('random-number')
  getRandomNumber(): Number {
    return this.appService.getRandomNumber();
  }
}
