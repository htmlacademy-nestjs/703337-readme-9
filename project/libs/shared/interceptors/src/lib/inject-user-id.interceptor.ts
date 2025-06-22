import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common';

@Injectable()
export class InjectUserIdInterceptor implements NestInterceptor {
  public intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    console.log('это интерсептор')
    //console.log(request.body)
    request.body['userId'] = request.user.sub;
console.log(request)
    return next.handle();
  }
}