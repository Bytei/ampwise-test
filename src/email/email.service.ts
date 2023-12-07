import { Injectable } from '@nestjs/common';
import { SendEmailDto } from './dto/send-email.dto';
import { PostmarkService } from '../postmark/postmark.service';

@Injectable()
export class EmailService {    
    constructor(private postmarkService: PostmarkService) {}
    
    async sendEmail(sendEmailDto: SendEmailDto) {
        await this.postmarkService.sendEmail(
            sendEmailDto.to,
            sendEmailDto.subject,
            sendEmailDto.templateName,
            sendEmailDto.templateVariables
        )
    }
}
