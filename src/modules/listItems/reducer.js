import { actionType } from './types'

export const initialState = {
  isLoading: false,
  data: [],
  pagination: {}
}

export function reducer(state, action) {
  switch (action.type) {
    case actionType.GET_LIST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actionType.GET_LIST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        ...action.payload.data
      }
    }
    case actionType.GET_LIST_ERROR: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return initialState
  }
}
