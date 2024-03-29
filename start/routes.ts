/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Controller
const NoteResourcesController =()=> import('#controllers/note_resources_controller')

router.group(()=>{
  router.get('/notes',[NoteResourcesController,'index']).as('get.notes')
  router.get('/notes/:id',[NoteResourcesController,'show']).as('show.notes')
  router.post('/create-notes',[NoteResourcesController,'store']).as('store.notes')
  router.put('/update-notes/:id',[NoteResourcesController,'update']).as('update.notes')
  router.delete('/delete-notes/:id',[NoteResourcesController,'destroy']).as('delete.notes')

}).prefix('api/bykaito')
