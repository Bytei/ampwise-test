import {
  Length,
  IsEmail,
} from 'class-validator';

export class SendEmailDto {
  @Length(0, 256)
  subject: string;
  @Length(0, 256)
  templateName: string;

  templateVariables: object;
  @IsEmail()
  to: string;
}