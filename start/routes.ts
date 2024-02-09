/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import NotesController from '#controllers/notes_controller'
import router from '@adonisjs/core/services/router'

router.get('/notes',[NotesController,'index']).as('get.notes')
