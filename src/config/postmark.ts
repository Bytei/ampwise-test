import { plainToInstance } from 'class-transformer';
import {
  validateSync,
  IsEmail,
  IsUUID,
  IsNotEmpty,
} from 'class-validator';
import { registerAs } from '@nestjs/config';

export interface IPostmarkConfig {
  token: string;
  fromEmail: string;
  templatePath: string;
}

export default registerAs('postmark', (): IPostmarkConfig => {
  validate(process.env);
  
  return {
    token: process.env.POSTMARK_API_TOKEN,
    fromEmail: process.env.POSTMARK_FROM_EMAIL,
    templatePath: process.env.POSTMARK_TEMPLATE_PATH
  }
})

class PostmarkVariables {
  @IsUUID()
  POSTMARK_API_TOKEN: string;

  @IsEmail()
  POSTMARK_FROM_EMAIL: string;
  
  @IsNotEmpty()
  POSTMARK_TEMPLATE_PATH: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(
    PostmarkVariables,
    config,
    { enableImplicitConversion: true },
  );

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}