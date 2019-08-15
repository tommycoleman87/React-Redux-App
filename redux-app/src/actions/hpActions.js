import axios from 'axios';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCH_HPDATA_SUCCESS = 'FETCH_HPDATA_SUCCESS';
export const FETCH_HPDATA_FAIL = 'FETCH_HPDATA_FAIL';
export const ADD_POINTS = 'ADD_POINTS';
export const SUBTRACT_POINTS = 'SUBTRACT_POINTS';
export const HOUSE_CUP_WINNER = 'HOUSE_CUP_WINNER';
export const getHpData = () => {
    return dispatch => {
        dispatch({type: FETCHING_DATA});
        axios
            .get('https://www.potterapi.com/v1/houses?key=$2a$10$02a76vNJOuVHIPWW5s4V7OcXl8IP5Qv3UkmmEjP7cWIWL5ek.vW4G')
            .then(res => {
                dispatch({type: FETCH_HPDATA_SUCCESS, payload: res.data})
                console.log('res')
            })
            .catch(err => {
                dispatch({type: FETCH_HPDATA_FAIL, payload: err.response})
                console.log(err)
            })
    }
}

export const addPoints = (house) => {
    return {type: ADD_POINTS, payload: house}
    
}

export const subtractPoints = (house) => {
    return {type: SUBTRACT_POINTS, payload: house}
}

export const houseCupWinner = () => {
    return {type: HOUSE_CUP_WINNER}
}