import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PageModule } from './api/page/page.module';

@Module({
  imports: [PageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
