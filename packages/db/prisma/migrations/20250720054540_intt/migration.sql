/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN "user_name" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");
