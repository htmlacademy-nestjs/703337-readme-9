import { Expose, Type } from 'class-transformer';
import { TagRdo } from 'libs/blog/tag/src/blog-tag.module/rdo/tag.rdo';

export class BlogPostRdo {
  @Expose()
  public id: string;

  @Expose()
  public type: string;

  @Expose()
  public createdAt: string;

  @Expose()
  public userId: string;

  @Expose()
  @Type(() => TagRdo)
  public tags: TagRdo[];

  @Expose()
  public comments: Comment[]
}