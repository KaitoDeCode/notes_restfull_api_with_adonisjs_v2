// import type { HttpContext } from '@adonisjs/core/http'

import Note from "#models/note";

export default class NotesController {
  async index(){
    return await Note.all()
  }
}
