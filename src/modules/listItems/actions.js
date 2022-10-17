import { actionType } from './types'
import axios from 'axios'

export const baseUrl = 'http://localhost:3300/api/v1/items'

export const getList = async (params, dispatch) => {
  try {
    dispatch({ type: actionType.GET_LIST })
    const url = `${baseUrl}?search=${params.search}`
    const res = await axios.get(url)
    dispatch({ type: actionType.GET_LIST_SUCCESS, payload: res })
  } catch (error) {
    dispatch({ type: actionType.GET_LIST_ERROR })
  }
}

export const getPost = async id => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/${id}`)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}
