import * as actionTypes from '../actions/actionTypes';

const initState = {
  authError: null
};

const reducer = (state = initState, action) => {
  switch(action.type) {

    case actionTypes.SIGNOUT_SUCCESS: {
      console.log('Signout Success');
      return state;
    }

    case actionTypes.SIGNUP_SUCCESS:
      console.log('Signup Success');
      return {
        ...state,
        authError: null
      }

    case actionTypes.SIGNUP_ERROR:
      console.log('Signup Error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state;
  }
}

export default reducer;