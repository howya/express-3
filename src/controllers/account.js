'use strict'

class accountController {
  constructor(dataAdapter) {
    this.dataAdapter = dataAdapter
  }

  async find(id, req, res) {
    let response = await this.dataAdapter.getData(id)
    return res.status(200).json({data: response})
  }
}

export default accountController