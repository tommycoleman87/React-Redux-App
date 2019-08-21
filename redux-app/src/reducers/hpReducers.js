import {
    FETCHING_DATA,
    FETCH_HPDATA_FAIL,
    FETCH_HPDATA_SUCCESS,
    ADD_POINTS,
    SUBTRACT_POINTS,
    HOUSE_CUP_WINNER
} from '../actions/hpActions';

const initialState = {
    hpHouses: [],
    houseCup: '',
    isLoading: false,
    error: '',
}

export const hpReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case FETCH_HPDATA_SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                error: '',
                hpHouses: action.payload.map(house => {
                    return {
                        ...house,
                        points: 0,
                    }
                })

            }
        case FETCH_HPDATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case ADD_POINTS:
            return {
                ...state,
                isLoading: false,
                error: '',
                hpHouses: state.hpHouses.map(house => {
                    if (house._id === action.payload._id) {
                        console.log('payload', action.payload)
                        return {
                            ...house,
                            points: house.points += 10,
                        }
                    } else {
                        return house;
                    }
                })
            }
        case SUBTRACT_POINTS:
            return {
                ...state,
                isLoading: false,
                error: '',
                hpHouses: state.hpHouses.map(house => {
                    if (house._id === action.payload._id) {
                        if (house.points > 0) {
                            return {
                                ...house,
                                points: house.points -= 10,
                            }
                        } else {
                            return house;
                        }
                    } else {
                        return house;
                    }
                })
            }
        case HOUSE_CUP_WINNER:
            return {
                ...state,
                houseCup: state.hpHouses.sort((a, b) => (a.points > b.points) ? 1 : -1)[state.hpHouses.length - 1].name,
            }
        default: return state;
    }
}