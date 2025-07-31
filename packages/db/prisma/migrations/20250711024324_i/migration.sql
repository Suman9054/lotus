/*
  Warnings:

  - A unique constraint covering the columns `[Id,User_name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contectName` to the `UserContacts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserContacts" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "contectName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserContacts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserContacts_ContactId_contectName_fkey" FOREIGN KEY ("ContactId", "contectName") REFERENCES "User" ("Id", "User_name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserContacts" ("ContactId", "Id", "UserId", "createdAt") SELECT "ContactId", "Id", "UserId", "createdAt" FROM "UserContacts";
DROP TABLE "UserContacts";
ALTER TABLE "new_UserContacts" RENAME TO "UserContacts";
CREATE UNIQUE INDEX "UserContacts_UserId_ContactId_contectName_key" ON "UserContacts"("UserId", "ContactId", "contectName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "User_Id_User_name_key" ON "User"("Id", "User_name");
