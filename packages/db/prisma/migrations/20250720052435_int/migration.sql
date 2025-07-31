/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ExpiresAt` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `Id` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `Token` on the `session` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `session` table. All the data in the column will be lost.
  - Added the required column `expiresAt` to the `session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `session` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_Id_User_name_key";

-- DropIndex
DROP INDEX "User_Email_key";

-- DropIndex
DROP INDEX "User_User_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "account" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "providerId" TEXT NOT NULL,
    "providerAccountId" TEXT,
    "hashedPassword" TEXT,
    "refreshToken" TEXT,
    "accessToken" TEXT,
    "accessTokenExpires" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "account_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "user" ("Id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "verification_token" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RoomId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Content" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL,
    CONSTRAINT "Messages_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Rooms" ("Id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Messages_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "user" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("Content", "CreatedAt", "Id", "RoomId", "UpdatedAt", "UserId") SELECT "Content", "CreatedAt", "Id", "RoomId", "UpdatedAt", "UserId" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE INDEX "Messages_RoomId_CreatedAt_idx" ON "Messages"("RoomId", "CreatedAt");
CREATE TABLE "new_UserContacts" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "contectName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserContacts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "user" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserContacts_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "user" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserContacts" ("ContactId", "Id", "UserId", "contectName", "createdAt") SELECT "ContactId", "Id", "UserId", "contectName", "createdAt" FROM "UserContacts";
DROP TABLE "UserContacts";
ALTER TABLE "new_UserContacts" RENAME TO "UserContacts";
CREATE UNIQUE INDEX "UserContacts_UserId_ContactId_contectName_key" ON "UserContacts"("UserId", "ContactId", "contectName");
CREATE TABLE "new_UserRooms" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "RoomId" INTEGER NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserRooms_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "user" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRooms_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Rooms" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserRooms" ("Id", "RoomId", "UserId", "joinedAt") SELECT "Id", "RoomId", "UserId", "joinedAt" FROM "UserRooms";
DROP TABLE "UserRooms";
ALTER TABLE "new_UserRooms" RENAME TO "UserRooms";
CREATE UNIQUE INDEX "UserRooms_UserId_RoomId_key" ON "UserRooms"("UserId", "RoomId");
CREATE TABLE "new_session" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" DATETIME NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_session" ("createdAt", "updatedAt") SELECT "createdAt", "updatedAt" FROM "session";
DROP TABLE "session";
ALTER TABLE "new_session" RENAME TO "session";
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");
CREATE UNIQUE INDEX "session_userId_token_key" ON "session"("userId", "token");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_Id_name_key" ON "user"("Id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "account_providerId_providerAccountId_key" ON "account"("providerId", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");
