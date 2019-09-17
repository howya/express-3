'use strict'

class AccountController {
  constructor(dataAdapter) {
    this.dataAdapter = dataAdapter
  }

  async show(req, res, id) {
    let response = await this.dataAdapter.getDataById(id)
    return res.status(200).json({data: response})
  }

  async index(req, res, group) {
    let response = await this.dataAdapter.getIndex(group)
    return res.status(200).json({data: response})
  }
}

export default AccountController
