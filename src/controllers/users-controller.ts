import { Request, Response } from "express";
import { prisma } from "@/prisma";

class UsersController {
  async index(request: Request, response: Response) {
    //retorna todos os usuários encontrados no banco de dados - método findMany()
    const users = await prisma.user.findMany();

    return response.json(users);
  }

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return response.status(201).json();
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    //retorna o usuário encontrado no banco de dados - método findUnique()
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return response.json(user);
  }
}

export { UsersController };
