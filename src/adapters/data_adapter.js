'use strict'
import axios from 'axios'

const baseURL = process.env.BASEURL

class DataAdapter {

  async getDataById(id) {
    return await this.axiosWrapper('posts/' + id,'GET', [], null)
  }

  async getIndex(group) {
    let index =  await this.axiosWrapper('posts','GET', [], null)

    index = group ? index.filter((el) => el.userId === 1).reduce(this.group(group), {}) : index

    return index
  }

  group (property) {
    return (accum, current) => {
      if (current.hasOwnProperty(property)) {
        if (accum.hasOwnProperty(current[property])) {
          accum[current[property]].push(current)
        } else {
          accum[current[property]] = [current]
        }
      }
      return accum
    }
  }

  axiosWrapper(resource, verb, headers, data) {
    return axios({
      method:verb,
      url: baseURL + resource,
      data: data
    }).then(response => {
      return response.data
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
