import {    
    eventListReducer, 
    eventRetrieveReducer,
    listState,
    retrieveState    
} from '../../src/reducers/eventReducer';

describe('event reducer', () => {
    it('Should return the initial state', () => {
        expect(eventListReducer(listState, {})).toEqual({
            data: [],
            keyword: "",
            page: {},
            loading: false,
        });
    });
    it('Should store the retrieve', () => {
        expect(eventRetrieveReducer(retrieveState, {})).toEqual({
            data: {},
            loading: false,
        })
    })
})