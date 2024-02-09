// import type { HttpContext } from '@adonisjs/core/http'

import Note from "#models/note";
import { HttpContext } from "@adonisjs/core/http";

export default class NotesController {
  async index(ctx: HttpContext){
    const data = await Note.all();
    return ctx.response.json({
      data
    })
  }
}
