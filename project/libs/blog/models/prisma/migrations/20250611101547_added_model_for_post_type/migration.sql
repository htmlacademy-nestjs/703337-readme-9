/*
  Warnings:

  - Changed the type of `type` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('Video', 'Text', 'Photo', 'Citation', 'Reference');

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "type",
ADD COLUMN     "type" "PostType" NOT NULL;

-- CreateIndex
CREATE INDEX "posts_type_idx" ON "posts"("type");
