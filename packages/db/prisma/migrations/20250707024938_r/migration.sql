/*
  Warnings:

  - The primary key for the `UserContacts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `Id` to the `UserContacts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserContacts" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "User_name" TEXT NOT NULL,
    CONSTRAINT "UserContacts_UserId_User_name_fkey" FOREIGN KEY ("UserId", "User_name") REFERENCES "User" ("Id", "User_name") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserContacts" ("ContactId", "UserId", "User_name") SELECT "ContactId", "UserId", "User_name" FROM "UserContacts";
DROP TABLE "UserContacts";
ALTER TABLE "new_UserContacts" RENAME TO "UserContacts";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
