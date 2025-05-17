import { Injectable } from '@nestjs/common';
import {AuthUser, EntityFactory } from '@project/shared/core';
import { BlogUserEntity } from './blog-user.entity';

@Injectable()
export class BlogUserFactory implements EntityFactory<BlogUserEntity> {
  public create(entityPlainData: AuthUser): BlogUserEntity {
    console.log('factory')
    console.log(entityPlainData)
    return new BlogUserEntity(entityPlainData);
  }
}
