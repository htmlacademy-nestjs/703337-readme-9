-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "repost" BOOLEAN NOT NULL,
    "published" BOOLEAN NOT NULL,
    "likes" INTEGER,
    "text" TEXT,
    "author" TEXT,
    "photoPath" TEXT,
    "reference" TEXT,
    "description" TEXT,
    "name" TEXT,
    "preview" TEXT,
    "message" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "posts_type_idx" ON "posts"("type");
