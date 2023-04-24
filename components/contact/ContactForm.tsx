import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SiNextdotjs } from 'react-icons/si';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  mail: Yup.string().email('Debe ser un correo válido').required('El correo electrónico es requerido'),
  phone: Yup.string().required('El número de teléfono es requerido'),
  message: Yup.string().required('El mensaje es requerido'),
});

interface IFormValues {
  name: string;
  mail: string;
  message: string;
  clientName: string;
}

const initialValues: IFormValues = {
  name: '',
  mail: '',
  message: '',
  clientName: 'Logiciel Applab',
};

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const postEmailRequest = async (formValues: IFormValues) => {
    console.log('click');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (formValues: IFormValues) => {
        await postEmailRequest(formValues);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div className='w-full py-8'>
            <p className='text-center text-3xl text-white'>
              Contactame a travez de los siguientes medios o envíame un mensaje
            </p>
            <div className='flex justify-around py-2'>
              <a
                className={`rounded-full text-[#000] bg-[#fff] p-1 text-4xl cursor-pointer hover:-translate-y-1 transition`}
              >
                <SiNextdotjs />
              </a>
            </div>
            <div className='grid'>
              <div className='pt-1 pb-1'>
                <label className='text-gray-100 text-lg font-medium pl-4 '>Nombre</label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-white text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    name='name'
                    placeholder='Nombre'
                  />
                </div>
                {touched.name && errors.name && (
                  <p className='text-base font-medium text-red-500 pl-4'>{errors.name}</p>
                )}
              </div>
              <div className='pt-1 pb-1'>
                <label className='text-gray-100 text-lg font-medium pl-4 pt-1'>Correo Electrónico</label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-white text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='email'
                    name='mail'
                    placeholder='Correo electrónico'
                  />
                </div>
                {touched.mail && errors.mail && (
                  <p className='text-base font-medium text-red-500 pl-4'>{errors.mail}</p>
                )}
              </div>

              <div className='pt-1 pb-1'>
                <label className='text-gray-100 text-lg font-medium pl-4 pt-1'>Mensaje</label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-white text-sm border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    as='textarea'
                    name='message'
                    rows='4'
                    placeholder='Mensaje'
                  />
                </div>
                {touched.message && errors.message && (
                  <p className='text-base font-medium text-red-500 pl-4'>{errors.message}</p>
                )}
              </div>
              <button
                type='submit'
                className='py-2 mx-4 px-2 bg-white transition delay-100 cursor-pointer rounded text-gray-950 font-bold mt-4'
                disabled={loading}
              >
                {!loading ? 'Enviar' : <></>}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
