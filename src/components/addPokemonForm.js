import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';


import Input from './input.js';

import { addPokemon } from '../redux/reducers/form';


const AddPokemonForm = () => {
	const dispatch = useDispatch();
	const formState = useSelector(state => state.form);
	const validation = Yup.object({
		title: Yup.string()
			.required("Это поле обязательна"),
		description: Yup.string()
			.required("Это поле обязательна"),
		img: Yup.string()
			.required("Это поле обязательна")
	})

	return (
		<div className="d-block py-3 px-2">
		    <h3>Добавьте покемона</h3>
			<Formik
				initialValues={{
					title: "",
					description: "",
					img: ""
				}}
				validationSchema={validation}
				onSubmit={(values, actions) => {
					dispatch(addPokemon(values));
					actions.resetForm();
				}}
			>
				{({handleSubmit}) => (
					<form onSubmit={handleSubmit} className="position-relative">
						<div className={`loading justify-content-center align-items-center ${formState.isLoading ? "active" : ""}`}>
							<img src="http://simpleicon.com/wp-content/uploads/loading.png" style={{
								width: 45,
								height: 45
							}} className="loading-icon" />
						</div>
						<Input name="title" label="Имя покемона" />
						<Input name="description" label="Описание покемона" />
						<Input name="img" label="Ссылка на изображение покемона" />
						{formState.message && <div className="form-group"><span>{formState.message}</span></div>}
						<button type="submit" className="btn btn-primary mt-1">Добавить</button>
					</form>
				)}
			</Formik>
		</div>
	)
}

export default AddPokemonForm;