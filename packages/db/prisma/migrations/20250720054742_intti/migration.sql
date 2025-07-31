/*
  Warnings:

  - Made the column `user_name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "user_name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_user" ("Id", "createdAt", "email", "image", "name", "online", "updatedAt", "user_name") SELECT "Id", "createdAt", "email", "image", "name", "online", "updatedAt", "user_name" FROM "user";
DROP TABLE "user";
ALTER TABLE "new_user" RENAME TO "user";
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
CREATE UNIQUE INDEX "user_user_name_key" ON "user"("user_name");
CREATE UNIQUE INDEX "user_Id_name_key" ON "user"("Id", "name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
