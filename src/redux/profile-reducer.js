import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS"

const initialState = {
    posts: [
        {id: 1, message: 'Glad to see everyone', likes: 0},
        {id: 2, message: 'Glad to see you', likes: 3},
        {id: 3, message: 'Glad to see everyone', likes: 5},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.random(),
                likes: 0,
                message: action.postMessage
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(u => u.id != action.postId)
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state.profile,
                photos: action.photos
            }
        }
        case SAVE_PROFILE_SUCCESS: {
            debugger
            return {
                ...state.profile,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostAC = (postMessage) => (({type: ADD_POST, postMessage}))
export const deletePost = (postId) => (({type: DELETE_POST, postId}))
export const setUserProfile = (profile) => (({type: SET_USER_PROFILE, profile}))
export const setUserStatus = (status) => (({type: SET_STATUS, status}))
export const savePhotoSuccess = (photos) => (({type: SAVE_PHOTO_SUCCESS, photos}))
export const saveProfileSuccess = (photos) => (({type: SAVE_PROFILE_SUCCESS, photos}))

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file) // запрос на сервер, отсылкка данных

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos)) // диспатч этого фото в проект
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userID = getState().auth.userId

    let response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userID))
    } else {
debugger
        dispatch(stopSubmit('profile-data', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer