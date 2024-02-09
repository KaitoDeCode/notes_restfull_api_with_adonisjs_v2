/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import NoteResourcesController from '#controllers/note_resources_controller'
import router from '@adonisjs/core/services/router'

router.group(()=>{
  router.get('/notes',[NoteResourcesController,'index']).as('get.notes')
  router.post('/create-notes',[NoteResourcesController,'store']).as('store.notes')

}).prefix('api/v1')
