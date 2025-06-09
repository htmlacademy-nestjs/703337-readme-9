import { PrismaClient } from '@prisma/client';


const FIRST_TAG_UUID = '39614113-7ad5-45b6-8093-06455437e1e2';
const SECOND_TAG_UUID = 'efd775e2-df55-4e0e-a308-58249f5ea202';

const FIRST_POST_UUID = '6d308040-96a2-4162-bea6-2338e9976540';
const SECOND_POST_UUID = 'ab04593b-da99-4fe3-8b4b-e06d82e2efdd';

const FIRST_USER_ID = '658170cbb954e9f5b905ccf4';
const SECOND_USER_ID = '6581762309c030b503e30512';

// const FIRST_LIKES_ID = '658170cbb954e9f5b905cyf4';
// const SECOND_LIKES_ID = '6581762309c030b503e33512';

function getTags() {
  return [
    { id: FIRST_TAG_UUID, text: 'Книги' },
    { id: SECOND_TAG_UUID, text: 'Компьютеры' },
  ];
}

function getPosts() {
  return [
    {
      id: FIRST_POST_UUID,
      repost: undefined,
      published: undefined,
      userId: FIRST_USER_ID,
      name: 'Prisma Client',
      preview: 'Случай из практики',
      message: 'В Prisma Client нет концепции экземпляров модели. Вместо этого он помогает сформировать запросы к базе данных, которые всегда возвращают простые объекты JavaScript. ',
      tags: {
        connect: [{ id: FIRST_TAG_UUID }],
      },
      likes: [
        {userId: FIRST_USER_ID}, {userId: SECOND_USER_ID}
      ]
    },
    {
      id: SECOND_POST_UUID,
      type: 'video',
      userId: FIRST_USER_ID,
      name: 'Полезная книга по JavaScript',
      link: 'Секреты и тайные знания по JavaScript.',
      tags: {
        connect: [
          { id: FIRST_TAG_UUID },
          { id: SECOND_TAG_UUID },
        ]
      },
      comments: [
          {
            message: 'Это действительно отличная книга!',
            userId: FIRST_USER_ID,
          },
          {
            message: 'Надо будет обязательно перечитать. Слишком много информации.',
            userId: SECOND_USER_ID,
          }
      ]
    }
  ]
}

async function seedDb(prismaClient: PrismaClient) {
  const mockTags = getTags();
  for (const tag of mockTags) {
    await prismaClient.tag.upsert({
      where: { id: tag.id },
      update: {},
      create: {
        id: tag.id,
        text: tag.text
      }
    });
  }

  const mockPosts = getPosts();
  for (const post of mockPosts) {
    await prismaClient.post.upsert({
      where: { id: post.id },
      update: {},
      create: {
        id: post.id,
        type: post.type,
        repost: post.repost,
        published: post.published,
        tags: post.tags,
        userId: post.userId,
        comments: post.comments ? {
          create: post.comments
        } : undefined,
        likes: post.likes ? {
          create: post.likes
        } : undefined
      }
    })
  }

  console.info('🤘️ Database was filled');
}

async function bootstrap() {
  const prismaClient = new PrismaClient();

  try {
    await seedDb(prismaClient);
    globalThis.process.exit(0);
  } catch (error: unknown) {
    console.error(error);
    globalThis.process.exit(1);
  } finally {
    await prismaClient.$disconnect();
  }
}



bootstrap();
