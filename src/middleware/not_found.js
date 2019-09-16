'use strict'

const notFound = (req, res, next) => {
  return res.status(404).json({message: 'endpoint not found'})
}
export default notFound