import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { setRefetch } from './pokemons';
import api from '../../http/api';


const initialState = {
 	isLoading: false,
 	message: ""
}

export const addPokemon = createAsyncThunk(
    'form/addPokemon',
    async (payload, {dispatch, getState}) => {
    	dispatch(setLoading(true));
    	const result = {
    		message: ""
    	}
        try {
        	await api.post('/pokemon/add-new', payload);
        	result.message = "Покемон успешно добавлен";
        } catch(e) {
            result.message = "Произошла какая то ошибка";
        } finally {
        	dispatch(setRefetch(true));
        	dispatch(setMessage(result.message));
        	dispatch(setLoading(false));
        }
    }
)

const form = createSlice({
  	name: 'form',
  	initialState,
  	reducers: {
	    setLoading(state, action){
	    	state.isLoading = action.payload;
	    },
	    setMessage(state, action){
	    	state.message = action.payload;
	    }
  	},
})

export const {
	setLoading,
	setMessage
} = form.actions
export default form.reducer;