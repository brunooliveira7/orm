import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //exibe as consultas do banco de dados
  log: ["query"],
});
