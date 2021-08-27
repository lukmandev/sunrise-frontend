import { useDispatch, useSelector } from 'react-redux';
import { useState, memo } from 'react';


import { setFavouriteList } from '../../redux/reducers/favouriteList';
import { setModalActive, setDeletePokemonId } from '../../redux/reducers/deletePokemon';


const Card = ({ item }) => {
	const [img, setImg] = useState(item.img);
	const [imgAlt, setImgAlt] = useState(img.title);
	const dispatch = useDispatch();
	const state = useSelector(state => {
		return state.favouriteList;
	});


	const favouriteChange = () => {
		const list = {...state.favouriteList}
		if(list[item._id]){
			delete list[item._id];
			dispatch(setFavouriteList(list));
		}else {
			list[item._id] = 1;
			dispatch(setFavouriteList(list));
		}
	}

	const deletePokemon = () => {
		dispatch(setDeletePokemonId(item._id));
		dispatch(setModalActive(true));
	}

	const setErrorImg = () => {
		setImg("https://img.icons8.com/small/452/error.png");
		setImgAlt("Произошла ошибка при загрузки изображении");
	}

	return (
		<div className="col-4 d-flex justify-content-center mb-2">
			<div className="card" style={{width: '18rem'}}>
				<img onError={setErrorImg} src={img} alt={imgAlt} className="card-img-top" />
				<div className="card-body">
				    <h5 className="card-title">{item.title}</h5>
				    <p className="card-text">{item.description}</p>
				    <button className="border-0 p-2 m-1 rounded-circle" onClick={favouriteChange}><img src="https://image.flaticon.com/icons/png/512/263/263417.png" style={{
				    	width: 25,
				    	height: 25
				    }}/></button>
      				<button className="border-0 p-2 m-1 rounded-circle" onClick={deletePokemon}><img src="https://image.flaticon.com/icons/png/512/3221/3221897.png" style={{
				    	width: 25,
				    	height: 25
				    }}/></button>
				</div>
			</div>
		</div>
	)
}

export default memo(Card);