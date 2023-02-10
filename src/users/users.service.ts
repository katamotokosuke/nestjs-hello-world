import { Injectable } from '@nestjs/common';
import { isNumber } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class UsersService {
  getUser(id: number): object {
    return {
      id: id,
    };
  }
}
