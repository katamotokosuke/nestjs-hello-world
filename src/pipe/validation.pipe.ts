import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('pipe called');
    // ここで型の変換や値の検証を行う
    // ここでDataクラスに変換とかしても良いかも？
    return Number(value);
  }
}
