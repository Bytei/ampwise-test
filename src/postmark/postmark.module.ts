import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostmarkService } from './postmark.service';
import postmarkConfig from '../config/postmark';

@Module({
  providers: [
    PostmarkService
  ],
  imports: [
    ConfigModule.forFeature(postmarkConfig)
  ],
  exports: [
    PostmarkService
  ]
})
export class PostmarkModule {}
