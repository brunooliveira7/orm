import { Request, Response } from "express";
import { prisma } from "@/prisma";

class QuestionsController {
  async index(request: Request, response: Response) {
    const questions = await prisma.question.findMany({
      where: {
        title: {
          //se contém o título, não precisa ser igual
          contains: request.query.title?.toString().trim(),
          //não faz diferença se é maiúsculo ou minúsculo
          mode: "insensitive",
        },
      },
      //ordenação por título em ordem crescente
      orderBy: {
        title: "asc",
      },
    });
    return response.json(questions);
  }

  async create(request: Request, response: Response) {
    const { title, content, user_id } = request.body;

    await prisma.question.create({
      data: {
        title,
        content,
        userId: user_id,
      },
    });

    return response.status(201).json();
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { title, content } = request.body;

    await prisma.question.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return response.json();
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params;

    await prisma.question.delete({
      where: {
        id,
      },
    });

    return response.json();
  }
}

export { QuestionsController };
