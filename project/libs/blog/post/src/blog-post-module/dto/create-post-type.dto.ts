import { CreatePostPhotoDto } from './create-post-photo' ;
import { CreatePostReferenceDto } from './create-post-reference.dto';
import { CreatePostTextDto } from './create-post-text.dto';
import { CreatePostCitationDto } from './create-post-citation.dto';
import { CreatePostVideoDto } from './create-post-video.dto';

export type CreatePostDto = CreatePostPhotoDto | CreatePostReferenceDto | CreatePostTextDto | CreatePostCitationDto | CreatePostVideoDto;
