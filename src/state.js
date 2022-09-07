

export const initialState = {
  username: "",
  password: "",
  Loading: false,
  error: "",
  LoggedIn: false
}

export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value
      }
    }
    case 'login': {
      return {
        ...state,
        Loading: true,
        error: ""
      }
    }
    case 'success': {
      return {
        ...state,
        LoggedIn: true
      }
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password!',
        Loading: false,
        username: "",
        password: ""
      }
    }
    case 'logout': {
      return {
        ...state,
        LoggedIn: false,
        username: "",
        password: ""
      }
    }

    default:
      return state
  }
}
