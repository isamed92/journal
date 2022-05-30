




/*
    {
        notes:[]
        active: null || {
            id: 'dasdasd1231',
            title:''
            body:''
            imageUrl:''
            date: ''
        }
    }
*/

import { types } from "../types/types";


export const notesReducer = (state = {}, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload]
            }

        default:
            return state;
    }

}