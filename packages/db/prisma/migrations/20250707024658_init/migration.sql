/*
  Warnings:

  - You are about to drop the `_UserRooms` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_Id` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_UserRooms_B_index";

-- DropIndex
DROP INDEX "_UserRooms_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserRooms";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rooms" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "user_Id" INTEGER NOT NULL,
    "Description" TEXT,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL,
    CONSTRAINT "Rooms_user_Id_fkey" FOREIGN KEY ("user_Id") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rooms" ("CreatedAt", "Description", "Id", "Name", "UpdatedAt") SELECT "CreatedAt", "Description", "Id", "Name", "UpdatedAt" FROM "Rooms";
DROP TABLE "Rooms";
ALTER TABLE "new_Rooms" RENAME TO "Rooms";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
