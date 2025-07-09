-- CreateTable
CREATE TABLE "User" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "User_name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserContacts" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "ContactId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserContacts_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserContacts_ContactId_fkey" FOREIGN KEY ("ContactId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rooms" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserRooms" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "UserId" INTEGER NOT NULL,
    "RoomId" INTEGER NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserRooms_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserRooms_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Rooms" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Messages" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "RoomId" INTEGER NOT NULL,
    "UserId" INTEGER NOT NULL,
    "Content" TEXT NOT NULL,
    "CreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" DATETIME NOT NULL,
    CONSTRAINT "Messages_RoomId_fkey" FOREIGN KEY ("RoomId") REFERENCES "Rooms" ("Id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Messages_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_User_name_key" ON "User"("User_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "UserContacts_UserId_ContactId_key" ON "UserContacts"("UserId", "ContactId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRooms_UserId_RoomId_key" ON "UserRooms"("UserId", "RoomId");

-- CreateIndex
CREATE INDEX "Messages_RoomId_CreatedAt_idx" ON "Messages"("RoomId", "CreatedAt");
