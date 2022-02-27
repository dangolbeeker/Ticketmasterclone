// Constants
import {
    FETCH_EVENT_LIST_DATA,
    FETCH_EVENT_LIST_KEYWORD,
    FETCH_EVENT_LIST_PAGE,
    FETCH_EVENT_LIST_LOADING,
    FETCH_EVENT_RETRIEVE_DATA,
    FETCH_EVENT_RETRIEVE_LOADING,
} from '../constants/actionConstants';


export var listState = {
    data: [],
    keyword: "",
    page: {},
    loading: false,
}

export var retrieveState = {
    data: {},
    loading: false,
}


export function eventListReducer(state=listState, action) {
    switch(action.type){
        case FETCH_EVENT_LIST_DATA:
            return {
                ...state,
                data: action.payload.data
            };
        case FETCH_EVENT_LIST_KEYWORD:
            return {
                ...state,
                keyword: action.payload.keyword
            }
        case FETCH_EVENT_LIST_PAGE:
            return {
                ...state,
                page: action.payload.page
            };
        case FETCH_EVENT_LIST_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        default:
            return state;
    }
}


export function eventRetrieveReducer(state=retrieveState, action) {
    switch(action.type){
        case FETCH_EVENT_RETRIEVE_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload.data
                }
            };
        case FETCH_EVENT_RETRIEVE_LOADING:
            return {
                ...state,
                loading: action.payload.loading
            };
        default:
            return state;
    }
}
