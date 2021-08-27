import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';


import { setModalActive, setConfirmDelete, deletePokemonById } from '../redux/reducers/deletePokemon';


const ConfirmDeleteModal = () => {
	const dispatch = useDispatch();
	const modalState = useSelector(state => {
		return {
			data: state.pokemons.data,
			id: state.deletePokemon.deletePokemonId,
			isActive: state.deletePokemon.modalIsActive,
			confirmDelete: state.deletePokemon.confirmDelete,
			isLoading: state.deletePokemon.isLoading
		}
	});

	useEffect(() => {
		if(modalState.confirmDelete){
			dispatch(deletePokemonById());
		}
	}, [modalState.confirmDelete]);

	const item = modalState.data.find(el => el._id === modalState.id);
	const title = item ? item.title : "Ничего";


	const closeModal = () => {
		dispatch(setModalActive(false));
	}

	const fetchToDeletePokemon = () => {
		dispatch(setConfirmDelete(true));
	}

	return (
		<div className={`modal ${modalState.isActive ? "active" : ""}`} tabIndex="-1" role="dialog">
			<div className={`loading justify-content-center align-items-center ${modalState.isLoading ? "active" : ""}`}/>
			<div className="modal-dialog" role="document">
			    <div className="modal-content">
			      	<div className="modal-header">
			        	<h5 className="modal-title">Удаление</h5>
			      	</div>
			      	<div className="modal-body">
			        	<p>Вы хотите удалить покемона {title} ?</p>
			      	</div>
			      	<div className="modal-footer">
			        	<button type="button" className="btn btn-primary" onClick={fetchToDeletePokemon}>Удалить</button>
			        	<button type="button" onClick={closeModal} className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
			      	</div>
			    </div>
			</div>
		</div>
	)
}


export default memo(ConfirmDeleteModal);