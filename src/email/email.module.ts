import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { PostmarkModule } from '../postmark/postmark.module';

@Module({
  providers: [
    EmailService,
  ],
  imports: [
    PostmarkModule
  ]
})
export class EmailModule {}