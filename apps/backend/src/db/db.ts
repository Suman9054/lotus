import prisma from "@repo/db/Prisma";
import dbconect from "../db_conect/db_conect";



export const prisma_client = new dbconect(prisma);