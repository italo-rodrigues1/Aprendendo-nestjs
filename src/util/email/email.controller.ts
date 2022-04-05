/* eslint-disable prettier/prettier */
import { Controller, Post, Query } from '@nestjs/common';
import { EmailServiceService } from './email-service.service';

@Controller('mail')
export class EmailController {
  constructor(private readonly mailService: EmailServiceService) {}

  @Post('send')
  async sendEmail(@Query('email') email, @Query('name') name) {
    return await this.mailService.sendMail(email, name);
  }
}