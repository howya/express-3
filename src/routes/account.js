'use strict'

import { Router } from 'express'
import controllers from '../controllers'
import adapters from '../adapters'

const AccountController = controllers.AccountController
const accountController = new AccountController(new adapters.DataAdapter())

const router = new Router()

router.get('/', (req, res, next) => {
  try {
    return accountController.index(req, res, req.query['group'])
  } catch (e) {
    next(e)
  }
})

router.get('/:id', (req, res, next) => {
  try {
    return accountController.show(req, res, req.params['id'])
  } catch (e) {
    next(e)
  }
})

export default router
