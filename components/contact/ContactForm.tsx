import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  mail: Yup.string().email('Debe ser un correo válido').required('El correo electrónico es requerido'),
  message: Yup.string().required('El mensaje es requerido'),
});

interface IFormValues {
  name: string;
  mail: string;
  message: string;
}

const initialValues: IFormValues = {
  name: '',
  mail: '',
  message: '',
};

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const postEmailRequest = async (formValues: IFormValues) => {
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.ok) {
          Swal.fire({ icon: 'success', title: res.msg, timer: 1000 });
        } else {
          Swal.fire({ icon: 'error', title: res.msg, timer: 1000 });
        }
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (formValues: IFormValues) => {
        setLoading(true);

        await postEmailRequest(formValues);

        setLoading(false);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div className='w-full py-8' data-aos='fade-right'>
            <p className='text-center text-3xl text-white'>Medios de contacto</p>
            <div className='flex justify-center gap-8 py-2'>
              <a
                className={`rounded-full text-[#000] bg-[#fff] p-1 text-4xl cursor-pointer hover:-translate-y-1 transition`}
                href='https://github.com/Fachavelin'
                target='_blank'
                rel='noopener'
              >
                <AiFillGithub />
              </a>
              <a
                className={`rounded-full text-[#000] bg-[#fff] p-1 text-4xl cursor-pointer hover:-translate-y-1 transition`}
                href='https://www.linkedin.com/in/alexander-chavez-897388215/'
                target='_blank'
                rel='noopener'
              >
                <AiFillLinkedin />
              </a>
              <a
                className={`rounded-full text-[#000] bg-[#fff] p-1 text-4xl cursor-pointer hover:-translate-y-1 transition`}
                href='https://api.whatsapp.com/send?phone=593986097821'
                target='_blank'
                rel='noopener'
              >
                <AiOutlineWhatsApp />
              </a>
            </div>
            <p className='text-left text-2xl text-white pl-3'>Enviame un mensaje:</p>
            <div className='grid'>
              <div className='pt-1 pb-1'>
                <label className='text-gray-100 text-lg font-medium pl-4 '>Nombre</label>
                <div className='flex items-center border rounded-sm mx-4'>
                  <Field
                    className='appearance-none bg-white text-base border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
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
                    className='appearance-none bg-white text-base border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
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
                    className='appearance-none bg-white text-base border-slate-400 w-full text-gray-700  py-1 px-2 leading-tight focus:outline-none'
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
                className={`py-2 mx-4 px-2 bg-white transition delay-100 cursor-pointer rounded text-gray-950 font-bold mt-4 flex justify-center `}
                disabled={loading}
              >
                {!loading ? 'Enviar' : <FaSpinner className='text-xl animate-spin' />}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
