import React from "react";
import { Formik } from 'formik';
import validationSchema from "./common/validationSchema";
import format from "./common/format";
import InputField from "./ui/InputField";

const App = ({onSubmit}) => {
    return (
        <div className="container">            
          <h2>Formulario</h2>                
          <Formik
              initialValues={{ rut: '', nombre: '', correo: '', mensaje: '' }}
              validationSchema={validationSchema.customFormSchema}
              onSubmit={onSubmit}>
              {({ values, errors, touched, handleChange, handleSubmit, handleReset, setFieldTouched, isValid, setFieldValue }) => (
                  <form onSubmit={handleSubmit} onReset={handleReset}>
                      <div className="form-row">
                          <div className="col-md-4 mb-2">
                              <InputField name="rut" type="text" label="Rut" value={values.rut} maxLength="12" onChange={ (event) => setFieldValue('rut', format.rut(event.target.value)) } />
                          </div>
                          <div className="col-md-4 mb-2">
                              <label htmlFor="nombre">Nombre</label>
                              <input name="nombre" type="text" value={values.nombre} className={errors.nombre && touched.nombre ? "form-control is-invalid" : !errors.nombre && touched.nombre ? "form-control is-valid" : "form-control"} onChange={handleChange} onKeyUp={() => setFieldTouched("nombre", true)} />
                              {
                              errors.nombre && touched.nombre &&
                              <div className="invalid-feedback">{errors.nombre}</div>
                              }
                          </div>
                          <div className="col-md-4 mb-2">
                              <label htmlFor="correo">Correo</label>
                              <input name="correo" type="email" value={values.correo} className={errors.correo && touched.correo ? "form-control is-invalid" : !errors.correo && touched.correo ? "form-control is-valid" : "form-control"} onChange={handleChange} onKeyUp={() => setFieldTouched("correo", true)} />
                              {
                              errors.correo && touched.correo &&
                              <div className="invalid-feedback">{errors.correo}</div>
                              }
                          </div>
                      </div>
                      <button className="btn btn-primary mr-2" type="submit" disabled={!isValid}> Enviar </button>
                      <button className="btn btn-outline-secondary" type="reset">Limpiar</button>
                  </form>
              )}
          </Formik>
        </div>
    );
};

export default App;
