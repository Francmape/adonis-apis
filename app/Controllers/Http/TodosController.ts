// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Todo from "App/Models/Todo";

export default class TodosController {
  public async index({ request }) {
    const page = request.input("page", 1);
    const limit = request.input("per_page", 10);

    // const todos = await Todo.
    //     query()
    //     .paginate(page, limit)

    return Todo.map((todo) =>
      todo.serialize({
        fields: {
          omit: ["createdAt", "updatedAt"],
        },
      })
    );
  }

  public async store({ request, response }: HttpContextContract) {
    const validations = schema.create({
      title: schema.string({}, []),
    });
    const data = await request.validate({ schema: validations });
    console.log(data);
    const todo = await Todo.create({
      title: request.input("title"),
      isCompleted: false,
    });

    return response.created({ message: "Todo has been created" });
  }

  public async update({ request, response, params }: HttpContextContract) {
    const todo = await Todo.find(params.id);
    if (todo) {
      todo.title = request.input("title");
      todo.isCompleted = request.input("isCompleted");
      await todo.save();
      return response.status(202).json({ message: "Todo has been updated" });
    }

    return response.json({ message: "Tod was not found" });
  }
}
