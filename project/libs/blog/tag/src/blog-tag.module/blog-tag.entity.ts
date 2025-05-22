import { Entity } from '@project/shared/core';
import { AuthUser } from '@project/shared/core';
import { StorableEntity, Tag } from '@project/shared/core';

export class BlogTagEntity extends Entity implements StorableEntity<Tag> {
  public text: string;
  public postId: string;
  public user: AuthUser;

  constructor(tag?: Tag) {
    super();
    this.populate(tag);
  }

  public populate(tag?: Tag) {
    if (! tag) {
      return;
    }

    this.id = tag.id ?? undefined;
    this.text = tag.text;
    this.postId = tag.postId ?? undefined;
    this.user = tag.user ?? undefined;
  }

  public toPOJO(): Tag {
    return {
      id: this.id,
      text: this.text,
      postId: this.postId,
      user: this.user,
    }
  }
}
