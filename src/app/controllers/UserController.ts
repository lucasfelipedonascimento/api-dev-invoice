import { Request, Response } from "express";
import AppDataSource from "../../database/connect";
import User from "../models/User";

class UserController {
  async create(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(User)

    const { name, email, password, general_profits, createdAt, updatedAt } = req.body

    const userExists = await repository.findOne({ where: { email } })

    if (userExists) {
      return res.send({
        status: 409,
        email: 'Email já está sendo utilizado!'
      })
    }

    const user = repository.create({
      name,
      email,
      password,
      general_profits,
      createdAt,
      updatedAt
    })

    await repository.save(user)

    return res.json({
      user: {
        name,
        email,
        general_profits,
        createdAt,
        updatedAt
      }
    })
  }
}

export default new UserController()