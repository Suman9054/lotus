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
  ) {
    try {
      await this.client.user.create({
        data: {
          Name: name,
          User_name: user_name,
          Email: email,
          Password: hash,
        },
      });
    } catch (e: any) {
      console.log(e);
    }
  }
  async create_contact(user_name: string, userId: number) {
    try {
      const user = await this.client.user.findUnique({
        where: {
          User_name: user_name,
        },
      });
      if (!user) {
        throw new Error("User not found");
      }
      await this.client.userContacts.create({
        data: {
          UserId: userId,
          ContactId: user.Id,
          User_name: user_name,
        },
      });
    } catch (e: any) {
      console.log(e);
    }
  }

  
}
