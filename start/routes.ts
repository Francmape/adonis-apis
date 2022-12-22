/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index');

Route.group(() => {

  Route.group(() => {
    Route.get('/todo', 'TodosController.index')
    Route.post('/todo', 'TodosController.store')
    Route.patch('/todo/:id', 'TodosController.update')
  }).middleware('auth')

  Route.post('/register', 'AuthController.index')
  Route.post('/login', 'AuthController.login')

}).prefix('api')


