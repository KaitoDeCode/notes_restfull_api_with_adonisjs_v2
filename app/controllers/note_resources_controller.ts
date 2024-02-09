import Note from '#models/note';
import { RequestStoreNote, RequestUpdateNote } from '#validators/note';
import type { HttpContext } from '@adonisjs/core/http'

export default class NoteResourcesController {
  /**
   * Display a list of resource
   */
  async index({response}: HttpContext) {
    const data = await Note.all();
    return response.status(200).json({
      message:"Success",
      data
    })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request,response }: HttpContext) {
    const payload = await request.validateUsing(RequestStoreNote);
    Note.create(payload);
    return response.status(200).json({
      message:"Success insert note",
    })
  }

  /**
   * Show individual record
   */
  async show({ params,response }: HttpContext) {
    const note = await Note.findOrFail(params.id);
    return response.status(200).json({
      message : "Success get note",
      data : note
    })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request,response }: HttpContext) {
    const payload = request.validateUsing(RequestUpdateNote);
    const data = request.all()
    const note = await Note.findOrFail(params.id)
    await note.merge(data).save()
    return response.json({
      message : "Success update note",
      note
    })
  }

  /**
   * Delete record
   */
  async destroy({ params,response }: HttpContext) {
    const note  = await Note.findOrFail(params.id)
    await note.delete()
    return response.status(200).json({
      message : "Success delete note"
    })
  }
}
