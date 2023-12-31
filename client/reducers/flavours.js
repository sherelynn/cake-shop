import {
  FLAVOURS_PENDING,
  FLAVOURS_REJECTED,
  GET_FLAVOURS_FULFILLED,
  ADD_FLAVOUR_FULFILLED,
  UPDATE_FLAVOUR_FULFILLED,
  DELETE_FLAVOUR_FULFILLED,
} from '../actions/flavours'

const initialState = {
  data: [],
  error: null,
  loading: false,
}

const flavours = (state = initialState, { type, payload }) => {
  switch (type) {
    case FLAVOURS_PENDING:
      return { ...state, loading: true }
    case FLAVOURS_REJECTED:
      return { ...state, error: payload }
    case GET_FLAVOURS_FULFILLED:
      return { ...state, data: payload }
    case ADD_FLAVOUR_FULFILLED:
      return { ...state, data: [...state.data, payload] }
    case UPDATE_FLAVOUR_FULFILLED:
      return {
        ...state,
        data: state.data.map((flavour) => {
          return flavour.id === payload.id
            ? { ...flavour, flavours: payload.flavours }
            : flavour
        }),
      }
    case DELETE_FLAVOUR_FULFILLED:
      return {
        ...state,
        data: state.data.filter((flavour) => flavour.id !== payload),
      }
    default:
      return state
  }
}

export default flavours
