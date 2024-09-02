import axios from "axios";
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_REGISTER_USER, SET_CURRENT_USER } from './types';


// Register User
export const registerUser = (userData) => dispatch => {
    axios
        .post('https://gukxykjxf3.execute-api.us-west-1.amazonaws.com/prod/users/register', userData)
        .then(res => dispatch({
            type: SET_REGISTER_USER,
            payload: true
        }))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login

// Get user token

export const loginUser = (userData) => dispatch => {
    axios.post('https://gukxykjxf3.execute-api.us-west-1.amazonaws.com/prod/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to localStorage
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in User

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

export const setRegisterUser = (value) => {
    return {
        type: SET_REGISTER_USER,
        payload: value
    }
}

// Logout

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for futer requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}