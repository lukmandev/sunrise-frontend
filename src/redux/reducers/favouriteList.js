import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http/api';


import { getByKey } from '../../utils/locaStorage';
const initialState = {
 	favouriteList: getByKey(),
 	data: [],
 	dataLoaded: false, 
 	dataHasError: false,
}

export const fetchToFavouriteList = createAsyncThunk(
    'pokemons/fetchToFavouriteList',
    async (payload, {dispatch, getState}) => {
    	dispatch(setDataError(false));
    	dispatch(setDataLoaded(false));
    	const responseData = {
    		data: getState().favouriteList.favouriteList
    	}
        try {
        	const { data } = await api.post('/pokemon/group-pokemons', responseData);
        	dispatch(setData(data.pokemons));
        } catch(e) {
            dispatch(setDataError(true));
        } finally {
        	dispatch(setDataLoaded(true));
        }
    }
)

const favouriteList = createSlice({
  	name: 'favouriteList',
  	initialState,
  	reducers: {
	    setFavouriteList(state, action){
	    	state.favouriteList = action.payload;
	    },
	    setData(state, action){
	    	state.data = action.payload;
	    },
	    setDataLoaded(state, action){
	    	state.dataLoaded = action.payload;
	    },
	    setDataError(state, action){
	    	state.dataHasError = action.payload;
	    }
  	},
})

export const {
	setFavouriteList,
	setData,
	setDataLoaded,
	setDataError
} = favouriteList.actions
export default favouriteList.reducer;