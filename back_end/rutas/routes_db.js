;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/blackjack', control.getDatos)
api.post('/blackjack', control.postDatos)
api.put('/blackjack', control.updateDatos)
api.delete('/blackjack', control.deleteDatos)

api.post('/login', control.login)

module.exports = api
