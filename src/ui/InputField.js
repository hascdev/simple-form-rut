import React from "react";
import { useField } from "formik";

const InputField = ({ label,...props }) => {
    
    const [field, meta, helpers] = useField(props);
    
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <input name={field.name} value={field.value} onChange={field.onChange} onKeyUp={ () => { helpers.setTouched(true) } } {...props} className={meta.error && meta.touched ? "form-control is-invalid" : !meta.error && meta.touched ? "form-control is-valid" : "form-control"} />
            {
            meta.error && meta.touched &&
            <div className="invalid-feedback">{meta.error}</div>
            }
        </>
    );
};

export default InputField;