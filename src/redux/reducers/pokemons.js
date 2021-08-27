import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http/api';

const initialState = {
 	data: [],
 	dataLoaded: false, 
 	dataHasError: false,
 	refetch: false,
}

export const fetchPokemons = createAsyncThunk(
  	'pokemons/fetchPokemons',
  	async (userId, {dispatch}) => {
  		dispatch(setDataLoaded(false));
    	try {
    		const { data } = await api.get('/pokemon/get-all');
    		dispatch(setData(data.pokemons));
    	} catch(e) {
    		dispatch(setDataError(true));
    	} finally{
    		dispatch(setDataLoaded(true));
        dispatch(setRefetch(false));
    	}
  	}
)



const pokemons = createSlice({
  	name: 'pokemons',
  	initialState,
  	reducers: {
	    setData(state, action){
	    	state.data = action.payload;
	    },
	    setDataLoaded(state, action){
	    	state.dataLoaded = action.payload;
	    },
	    setDataError(state, action){
	    	state.dataHasError = action.payload;
	    },
	    setRefetch(state, action){
	    	state.refetch = action.payload
	    }
  	},
  	extraReducers: {
  	}
})

export const {
	setData,
	setDataLoaded,
	setDataError,
	setRefetch
} = pokemons.actions
export default pokemons.reducer;