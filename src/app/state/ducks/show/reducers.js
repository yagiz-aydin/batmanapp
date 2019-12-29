import { combineReducers } from "redux";
import * as types from "./types";
import { createReducer } from "../../utils";

const detailsReducer = createReducer( {} )( {
    [ types.FETCH_DETAILS_COMPLETED ]: ( state, action ) => action.payload.show,
} );

const listReducer = createReducer( [] )( {
    [ types.FETCH_LIST_COMPLETED ]: ( state, action ) => action.payload.shows,
} );

export default combineReducers( {
    details: detailsReducer,
    list: listReducer,
} );
