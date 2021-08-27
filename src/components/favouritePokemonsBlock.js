import { useDispatch, useSelector } from 'react-redux';
import React from 'react';


import Card from './card/item';
import CardLoad from './card/loadItem';
import CardOutMessage from './cardOutMessage';
import { fetchToFavouriteList } from '../redux/reducers/favouriteList';
import { setToLS } from '../utils/locaStorage';


const FavouritePokemons = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.favouriteList);
	
	React.useEffect(() => {
		dispatch(fetchToFavouriteList());
		setToLS(state.favouriteList);
	}, [state.favouriteList]);


	const outCards = () => {
		if(state.dataLoaded){
			if(state.dataHasError){
				return <CardOutMessage message="Произошла какая то ошибка" />
			}
			if(state.data.length){
				return state.data.map(elem => {
					return <Card item={elem} key={elem._id} />
				});
			}
			return <CardOutMessage message="Нету любимых покемонов" />
		}else {
			return Array(10).fill(0).map((elem, i) => {
				return <CardLoad key={i} />
			})
		}
	}

	return (
		<>
			<h2>Любимые покемоны</h2>
			<div className="row py-4">
				{outCards()}
			</div>
		</>
	)
}

export default FavouritePokemons;