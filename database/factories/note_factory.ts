import factory from '@adonisjs/lucid/factories'
import Note from '#models/note'

export const NoteFactory = factory
  .define(Note, async ({ faker }) => {
    return {}
  })
  .build()