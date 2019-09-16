'use strict'

import {Router} from 'express'
import controllers from '../controllers'
import adapters from '../adapters'

const accountController = new controllers.accountController(new adapters.DataAdapter())

const router = new Router()

router.get('/', (req, res) => {
  return res.status(200).json({message: `index endpoint : ${req.query['test']}`})
})

router.get('/:id', (req, res) => {
  return accountController.find(req.params['id'], req, res)
})

export default router