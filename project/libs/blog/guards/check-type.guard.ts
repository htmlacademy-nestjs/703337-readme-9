import { CanActivate, ExecutionContext, Injectable, BadRequestException } from '@nestjs/common';
import { PostType } from '@project/shared/core';

@Injectable()
export class CheckTypeGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {    
    const request = context.switchToHttp().getRequest();
    
    if(request.body.type === PostType.Photo && (!request.body.photoPath)){      
      throw new BadRequestException(`Post type ${request.body.type} must have field photoPath.`);
    } else if(request.body.type === PostType.Citation && (!request.body.text || !request.body.author)){
      throw new BadRequestException(`Post type ${request.body.type} must have field text, author.`);      
    } else if(request.body.type === PostType.Reference && (!request.body.reference || !request.body.description)){
      throw new BadRequestException(`Post type ${request.body.type} must have field reference, description.`);
    } else if(request.body.type === PostType.Video && (!request.body.name || !request.body.link)){
      throw new BadRequestException(`Post type ${request.body.type} must have field name, link.`);
    }
    
    return true;
  }
}