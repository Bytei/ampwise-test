import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}
    
    @Post()
    @HttpCode(200)
    async sendEmail(@Body() sendEmailDto: SendEmailDto): Promise<void> {
        await this.emailService.sendEmail(sendEmailDto);
    }
}
