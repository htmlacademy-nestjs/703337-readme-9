import {Comment, Entity, StorableEntity} from '@project/shared/core'

export class BlogCommentEntity extends Entity implements StorableEntity<Comment> {
  public date?: Date;
  public text: string;
  public userId?: string;
  public postId: string;

  constructor(comment?: Comment) {
    super();
    this.populate(comment);
  }

  public populate(comment?: Comment): void {
    if (! comment) {
      return;
    }

    this.id = comment.id ?? undefined;
    this.date = comment.date ?? undefined;
    this.text = comment.text;
    this.postId = comment.postId ?? undefined;
    this.userId = comment.userId ?? undefined;
  }

  public toPOJO(): Comment {
    return {
      id: this.id,
      date: this.date,
      text: this.text,
      postId: this.postId,
      userId: this.userId,
    };
  }
}
