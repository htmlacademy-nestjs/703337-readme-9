/*
  Warnings:

  - The values [Video,Text,Photo,Citation,Reference] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('video', 'text', 'photo', 'citation', 'reference');
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
COMMIT;
