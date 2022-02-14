import { Module } from '@nestjs/common';
import { RenderModule } from 'nest-next';
import Next from 'next';
import { isProd } from 'src/shared/data/is-prod';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    RenderModule.forRootAsync(Next({ dev: !isProd }), { viewsDir: null }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
