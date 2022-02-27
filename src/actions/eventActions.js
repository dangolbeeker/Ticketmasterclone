// Constants
import {
    FETCH_EVENT_LIST_DATA,
    FETCH_EVENT_LIST_KEYWORD,
    FETCH_EVENT_LIST_PAGE,
    FETCH_EVENT_LIST_LOADING,
    FETCH_EVENT_RETRIEVE_DATA,
    FETCH_EVENT_RETRIEVE_LOADING
} from '../constants/actionConstants';
import { getPaginationInfo } from "../constants/baseConstants";


// Event List
export function fetchEventListData(data){
    return {
        type: FETCH_EVENT_LIST_DATA,
        payload: {
            data: data
        }
    }
}


export function fetchEventListKeyword(keyword){
    return {
        type: FETCH_EVENT_LIST_KEYWORD,
        payload: {
            keyword: keyword
        }
  }
}


export function fetchEventListPage(page){
    page.pagination = getPaginationInfo(page);

    return {
        type: FETCH_EVENT_LIST_PAGE,
        payload: {
            page: page
        }
    }
}

export function fetchEventListLoading(loading){
    return {
        type: FETCH_EVENT_LIST_LOADING,
        payload: {
            loading: loading
        }
  }
}

// Event Detail
export function fetchEventRetrieveData(data){
    return {
        type: FETCH_EVENT_RETRIEVE_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchEventRetrieveLoading(loading){
    return {
        type: FETCH_EVENT_RETRIEVE_LOADING,
        payload: {
            loading: loading
        }
  }
}
