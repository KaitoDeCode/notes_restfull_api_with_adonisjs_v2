// import type { HttpContext } from '@adonisjs/core/http'

import Note from "#models/note";
import { HttpContext } from "@adonisjs/core/http";

export default class NotesController {

  async index(ctx: HttpContext){
    const data = await Note.all();
    return ctx.response.status(200).json({
      message:"Success",
      data
    })
  }

  async store(ctx: HttpContext){
    const data:Object = ctx.request.only(['title','contents'])
    const result = await Note.create(data)
    return ctx.response.status(200).json({
      message:"Success",
      data : result
    })
  }

}
