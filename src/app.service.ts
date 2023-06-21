import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getRandomNumber(): Number {
    const max = 10;
    const min = 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
