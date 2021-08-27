import { useField } from 'formik';


const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className="form-group my-4">
    		<label>{label}</label>
    		<input 
    			type="text"
    			className="form-control"
    			{...field}
    			{...props}
    		/>
    		{meta.touched && meta.error && <span className="form-text text-muted">{meta.error}</span>}
  		</div>
	)
}

export default Input;