'use strict'
import axios from 'axios'

const baseURL = process.env.BASEURL

class DataAdapter {

  constructor() {
    console.log('construct')
  }

  async getData(id) {
    return this.axiosWrapper('todos/' + id,'GET', [], null)
  }

  async axiosWrapper(resource, verb, headers, data) {
    axios({
      method:verb,
      url: baseURL + resource,
      data: data
    }).catch(reason => {
      if (error.response) {
        throw new Error('')
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    })
  }



}

export default DataAdapter