import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Card from './card/item';
import CardLoad from './card/loadItem';
import CardOutMessage from './cardOutMessage';
import { fetchPokemons } from '../redux/reducers/pokemons';

const Pokemons = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return state.pokemons
	})
	React.useEffect(() => {
		dispatch(fetchPokemons());
	}, []);
	React.useEffect(() => {
		if(state.refetch){
			dispatch(fetchPokemons());
		}
	}, [state.refetch]);

	const outCards = () => {
		if(state.dataLoaded){
			if(state.dataHasError){
				return <CardOutMessage message="Произошла какая то ошибка при загрузки покемонов" />
			}
			if(state.data.length){
				return state.data.map(elem => {
					return <Card item={elem} key={elem._id} />
				});
			}
			return <CardOutMessage message="Покемонов нету" />
		}else {
			return Array(10).fill(0).map((elem, i) => {
				return <CardLoad key={i} />
			});
		}
	}
	return (
		<>
			<h2>Все покемоны</h2>
			<div className="row py-4 justify-content-start">
				{outCards()}
			</div>
		</>
	)
}

export default Pokemons;