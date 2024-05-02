import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { ProfileModule } from './profile/profile.module';
import { WorkModule } from './work/work.module';
import { StoryModule } from './story/story.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProductsModule,
    AdminModule,
    ProfileModule,
    WorkModule,
    StoryModule,
    PostModule,
  ],
})
export class AppModule {}
