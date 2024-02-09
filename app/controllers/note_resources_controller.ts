import Note from '#models/note';
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
    const data:Object = request.only(['title','contents'])
    const result = await Note.create(data)
    return response.status(200).json({
      message:"Success",
      data : result
    })
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  // async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
