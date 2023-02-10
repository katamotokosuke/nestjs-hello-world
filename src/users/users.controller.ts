import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../guard/auth.guard';
import { ValidationPipe } from '../pipe/validation.pipe';
import { LoggingInterceptor } from '../interceptor/logger.interceptor';
import { HttpExceptionFilter } from '../exception-filter/http-exception.filter';

@Controller('users')
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get(':id')
  find(@Param('id', new ValidationPipe()) id: number): object {
    console.log('controller called');
    return this.userService.getUser(id);
  }

  @Post('')
  throwException(): object {
    throw new HttpException('bad request', HttpStatus.BAD_REQUEST);
  }
}
