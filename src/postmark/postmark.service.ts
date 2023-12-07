import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ServerClient } from 'postmark';
import PostmarkConfig from '../config/postmark';
import dot = require('dot');


@Injectable()
export class PostmarkService {
    private client: ServerClient;
    private dots: Record<string, dot.RenderFunction>;
    
    constructor(
        @Inject(PostmarkConfig.KEY)
        private postmarkConfig: ConfigType<typeof PostmarkConfig>,
    ) {
        this.dots = dot.process({ path: postmarkConfig.templatePath })
        this.client = new ServerClient(postmarkConfig.token)
    }
    
    async sendEmail(to: string, subject: string, templateName: string, templateVariables: object) {
        const template = this.dots[templateName]
        if (!template) {
            throw new HttpException('Template not found', HttpStatus.BAD_REQUEST)
        }

        const html = template(templateVariables)

        const email = {
            From: this.postmarkConfig.fromEmail,
            To: to,
            Subject: subject,
            HtmlBody: html,
        };
        await this.client.sendEmail(email);
    }
}
