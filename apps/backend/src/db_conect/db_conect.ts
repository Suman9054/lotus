import { PrismaClient } from "../../../../packages/db/generated/prisma";

export default class dbconect {
  client: PrismaClient;
  constructor(client: PrismaClient) {
    this.client = client;
  }

  async fiend_user(id: number) {
    try {
      const user = await this.client.user.findUnique({
        where: {
          Id: id,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (e: any) {
      console.log(e);
    }
  }
  async find_contacts(userId: number) {
    try {
      const contacts = await this.client.userContacts.findMany({
        where: {
          UserId: userId,
        },
      });
      if (!contacts) {
        throw new Error("Contacts not found");
      }
      return contacts;
    } catch (e: any) {
      console.log(e);
    }
  }
  async create_user(
    name: string,
    hash: string,
    email: string,
    user_name: string,
    avatar?: string | null,
    providerId?: string | null,
    providerAccountId?: string | null,
    refreshToken?: string | null,
    accessToken?: string | null,
  ) {
    try {
      await this.client.user
        .create({
          data: {
            Name: name,
            Email: email,
            avatar: avatar,
            user_name: user_name, // Assuming user_name is the same as Name
          },
        })
        .then(async (user) => {
          await this.client.account.create({
            data: {
              UserId: user.Id,
              providerId: providerId || "email and password",
              providerAccountId: providerAccountId,
              hashedPassword: hash,
              refreshToken: refreshToken,
              accessToken: accessToken,
              accessTokenExpires: new Date(
                Date.now() + 1000 * 60 * 60 * 24 * 30,
              ), // 30 days
            },
          });
        });
    } catch (e: any) {
      console.log(e);
    }
  }
  async create_contact(user_name: string, userId: number) {
    try {
      const user = await this.client.user.findUnique({
        where: {
          user_name: user_name,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      await this.client.userContacts.create({
        data: {
          UserId: userId,
          ContactId: user.Id,
          contectName: user.user_name, // Assuming contectName is the username of the contact
        },
      });
    } catch (e: any) {
      console.log(e);
    }
  }
  async create_room(room_name: string, Description: string) {
    try {
      const room = await this.client.rooms.create({
        data: {
          Name: room_name,
          Description: Description,
        },
      });
      return room;
    } catch (e: any) {
      console.log(e);
    }
  }
  async finde_user_contects() {}
  async finde_user_by_session(sessionId: string) {
    try {
      const session = await this.client.session.findUnique({
        where: {
          Token: sessionId,
        },
      });
      if (!session) {
        throw new Error("Session not found");
      }
      const user = await this.client.user.findUnique({
        where: {
          Id: session.UserId,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (e: any) {
      console.log(e);
    }
  }
}
