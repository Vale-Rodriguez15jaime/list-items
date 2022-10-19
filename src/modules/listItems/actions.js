import { actionType } from './types'
import axios from 'axios'

export const baseUrl = 'ec2-54-146-207-213.compute-1.amazonaws.com/api/v1/items'

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
