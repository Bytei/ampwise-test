import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostmarkModule } from './postmark/postmark.module';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    PostmarkModule, 
    EmailModule,
    ConfigModule.forRoot()
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class AppModule {}