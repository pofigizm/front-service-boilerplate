import { ACTIONS } from './constants'
import { apiExampleActions } from './api'

const {
  BASE_ACTION,
} = ACTIONS

export const baseAction = value => (dispatch) => {
  // do smth
  dispatch({
    type: BASE_ACTION,
    value,
  })
}

export const init = () => async (dispatch) => {
  const { error } = await dispatch(apiExampleActions.getEntry())
  if (error) return null

  return dispatch(baseAction())
}
