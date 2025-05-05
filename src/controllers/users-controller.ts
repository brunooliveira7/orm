import { Request, Response } from "express";

class UsersController {
  async index(request: Request, response: Response) {
    return response.json();
  }

  async create(request: Request, response: Response) {
    return response.status(201).json({ message: "User created" });
  }

  async show(request: Request, response: Response) {
    return response.json();
  }
}

export { UsersController };
