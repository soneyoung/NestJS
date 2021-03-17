import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()                               // controller -> take url & execute function
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()                                    // decorator -> express get router 와 비슷
  getHello(): string {
    return this.appService.getHello();      // service -> funtion 
  }

  @Get('/hello')                             
  sayHello(): string {                       // 데코레이터 & 함수 사이에 빈칸 노노
    return this.appService.getHi();
  }

}
