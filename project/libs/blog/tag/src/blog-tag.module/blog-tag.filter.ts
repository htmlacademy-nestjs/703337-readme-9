import { Prisma } from '@prisma/client';

export interface TagFilter {
  id?: string;
  text?: string;
}

export function tagFilterToPrismaFilter(filter: TagFilter): Prisma.TagWhereInput | undefined {
  if (! filter) {
    return undefined;
  }

  let prismaFilter: Prisma.TagWhereInput = {};

  if (filter.text) {
    prismaFilter = { text: filter.text };
  }

  return prismaFilter;
}