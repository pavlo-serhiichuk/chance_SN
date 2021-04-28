import {getAuthUserData} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

const initializedSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => (dispatch) => {
   dispatch(getAuthUserData())
   setTimeout(() => {
            dispatch(initializedSuccess())

   }, 4000)

}
export default appReducer