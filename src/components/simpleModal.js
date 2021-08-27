import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { setModalActive } from '../redux/reducers/simpleModal';

const SimpleModal = () => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.simpleModal);

	React.useEffect(() => {
		if(state.isActive){
			offModal();
		}
	}, [state.isActive]);

	const offModal = () => {
		setTimeout(() => {
			dispatch(setModalActive(false));
		}, 4000);
	}


	return (
		<div className={`simpleModal ${state.isActive ? "active" : ""} py-3 px-3 border`}>
			<span>{state.message}</span>
		</div>
	)
}

export default SimpleModal;