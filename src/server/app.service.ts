import { Injectable } from '@nestjs/common';
import { Story } from 'src/shared/types';

const stories: Story[] = [
  {
    id: 1,
    title: '国歌',
    description: '首相が豚と…',
  },
  {
    id: 2,
    title: '1500万メリット',
    description: '超管理社会',
  },
  {
    id: 3,
    title: '人生の軌跡のすべて',
    description: '記憶をデータとして正確に閲覧できる世界の話',
  },
];

@Injectable()
export class AppService {
  getStories() {
    return stories;
  }
}
