import {
  Controller,
  Get,
  Param,
  Render,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ParamsInterceptor } from './params.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @UseInterceptors(ParamsInterceptor)
  home() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  @UseInterceptors(ParamsInterceptor)
  public storyPage() {
    return {};
  }

  @Get('/api/stories')
  public getStories() {
    return this.appService.getStories();
  }

  @Get('/api/story/:id')
  public getStory(@Param('id') id: number) {
    return this.appService.getStory(Number(id));
  }
}
