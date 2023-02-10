import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // req, resにリクエストとレスポンスの情報があるので、これを用いて本当はオブジェクトに対して処理をしたりする
    // 共通レスポンスヘッダーの付与とか？
    console.log('middleware called');
    next();
  }
}
