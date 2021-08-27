import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../http/api';
import { setModalActive as setSimpleModalActive, setMessage as setSimpleModalMessage } from './simpleModal';
import { setRefetch } from './pokemons';
import { setFavouriteList } from './favouriteList';

const initialState = {
    modalIsActive: false,
    confirmDelete: false,
    isLoading: false,
    deletePokemonId: null,
}


export const deletePokemonById = createAsyncThunk(
    'pokemons/deletePokemon',
    async (id, {dispatch, getState}) => {
        const result = {
            message: ""
        }
        dispatch(setIsLoading(true));
        try {
            const state = getState();
            const favouriteList = {...state.favouriteList.favouriteList};
            const _id = state.deletePokemon.deletePokemonId;
            if(favouriteList[_id]){
                delete favouriteList[_id];
                dispatch(setFavouriteList(favouriteList));
            }
            await api.delete('/pokemon/delete-by-id', {data: {_id}});
            result.message = 'Успешно удалено';
        } catch(e) {
            result.message = 'Произошла какая то ошибка';
        } finally{
            dispatch(setSimpleModalMessage(result.message));
            dispatch(setSimpleModalActive(true));
            dispatch(setConfirmDelete(false));
            dispatch(setDeletePokemonId(null));
            dispatch(setIsLoading(false));
            dispatch(setModalActive(false));
            dispatch(setRefetch(true));
        }
    }
)



const deletePokemon = createSlice({
  	name: 'deletePokemon',
  	initialState,
  	reducers: {
        setModalActive(state, action){
            state.modalIsActive = action.payload
        },
	    setConfirmDelete(state, action){
            state.confirmDelete = action.payload;
        },
        setIsLoading(state, action){
            state.isLoading = action.payload;
        },
        setDeletePokemonId(state, action){
            state.deletePokemonId = action.payload;
        },
  	},
  	extraReducers: {
  	}
})

export const {
    setModalActive,
	setConfirmDelete,
    setIsLoading,
    setDeletePokemonId,
} = deletePokemon.actions
export default deletePokemon.reducer;