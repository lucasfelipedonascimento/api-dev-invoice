import { Request, Response } from "express";
import AppDataSource from "../../database/connect";
import Order from "../models/Order";

class OrderController {
  async create(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(Order)

    const { 
      userId,
      project_name, 
      general_costs,
      developer_name,
      developer_doc,
      client_name, 
      client_doc,
      monthlyPrice,
      totalPrice,
      listOfTechnologies,
      development_time,
      status,
      createdAt,
      updatedAt
    } = req.body

    const orderExists = await repository.findOne({ where: { project_name } })

    if (orderExists) {
      return res.send({
        message: 409,
        status: 'Já existe um projeto cadastrado com esse nome!'
      })
    }
    
    const order = repository.create({
      userId,
      project_name, 
      general_costs,
      developer_name,
      developer_doc,
      client_name, 
      client_doc,
      monthlyPrice,
      totalPrice,
      listOfTechnologies,
      development_time,
      status,
      createdAt,
      updatedAt
    })
    await repository.save(order)

    return res.send({
      message: 200,
      status: 'Orçamento criado com sucesso!',
      order: {
        project_name, 
        general_costs,
        developer_name,
        developer_doc,
        client_name, 
        client_doc,
        monthlyPrice,
        totalPrice,
        listOfTechnologies,
        development_time,
        status,
        createdAt,
        updatedAt,
      }
    })
  }

  async list(req: Request, res: Response) {
    const repository = AppDataSource.getRepository(Order)

    const { userId } = req.body

    const data = await repository.find({
      where: { userId }
    })

    if (data) {
      const ordersList = data.map(item => item)

      return res.send({
        status: 200,
        orders: ordersList
      })
    }

    return res.send({
      status: 400,
      message:'Não foi possível buscar a lista.'
    })
  }
}

export default new OrderController()