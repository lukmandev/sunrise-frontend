import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';


import favouriteList from './reducers/favouriteList';
import form from './reducers/form';
import pokemons from './reducers/pokemons';
import deletePokemon from './reducers/deletePokemon';
import simpleModal from './reducers/simpleModal';





const store = configureStore({
	reducer: {
		favouriteList,
		form,
		pokemons,
		deletePokemon,
		simpleModal
	},
	middleware: [...getDefaultMiddleware()]
});

export default store;
