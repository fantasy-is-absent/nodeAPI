const userService = require('../services/user')
const asyncMiddleWare = require('../utils/asyncMiddleWare')
const error = require('../errors')

module.exports = (router) => {
  router.get('/api/users', asyncMiddleWare(async (req, res) => {
    const users = await userService.getUsers()
    res.json(users)
  }));

  router.put('/api/users', asyncMiddleWare(async (req, res) => {
    if (!req.body.name) {
      error.badRequest('User field must be specified');
    }
    const user = await userService.createUser(req.body)
    res.json(user)
  }));

  router.delete('/api/users/:id', asyncMiddleWare(async (req, res) => {
    if (!req.params.id){
      error.badRequest('For delete must be id field');
    }
    const deleteUser = await userService.deleteUser(req.params.id)
    res.json(deleteUser)
  }));
}
