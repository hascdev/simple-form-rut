import * as Yup from 'yup';
import validate from './validate';

const rut = Yup.string()
            .test('valida-rut', 'RUT inválido', function(value) {
                return validate.rut(value);
            })
            .required('Requerido');

const email = Yup.string().email('Correo inválido').required('Requerido');

const customFormSchema = Yup.object().shape({
    rut: rut,
    nombre: Yup.string()
        .min(2, '¡Demasiado corto!')
        .max(50, '¡Demasiado largo!')
        .required('Requerido'),
    correo: email
});

const schemas = {
    customFormSchema: customFormSchema
}

export default schemas;