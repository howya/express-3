'use strict'

class accountController {
  constructor(dataAdapter) {
    this.adapter = dataAdapter
  }

  async find(id, req, res) {
    return await this.adapter.find(id)
  }
}

export default accountController