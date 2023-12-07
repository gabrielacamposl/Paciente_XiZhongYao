import React, { useState } from 'react'
import Head from 'next/head';
import AppConfig from '@/layout/AppConfig';
import axios from 'axios';
//--> Componentes de primeReact
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Messages } from 'primereact/messages';
import { Password } from 'primereact/password';
import { InputText } from "primereact/inputtext";
import { useRouter } from 'next/router';

//-->Imagenes 
import Image from 'next/image';
import loto from '../../../imagenes/login/principal2.png';
import back from '../../../public/images/background.gif';

//--> Componentes propios
import {
  camposVacios, emailInvalido, exitoCuenta, passwordInvalido, passwordsInValidas, formatoNombre} from '@/components/mensajesNotificaciones/mensajes';
import { nuevoUsuario } from '@/components/mensajesNotificaciones/links';


const CrearCuenta = () => {
  //--> Variable de redireccinamiento
  const router = useRouter();

  //-----------------------| Lista de variables |-----------------------
  //--> Campos de entrada
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  //--> Validar envio
  const [estiloEmail, setEstiloEmail] = useState('')
  const [estiloNombre, setEstiloNombre] = useState('')
  const [estiloApellido, setEstiloApellido] = useState('')
  const [estiloPassword, setEstiloPassword] = useState('')
  const [estiloConfirmPass, setEstiloConfirmPass] = useState('')
  const [estiloMensajeRespuesta, setEstiloMensajeRespuesta] = useState('')
  //--> Mensajes
  const [mensajeRespuesta, setMensajeRespuesta] = useState('')
  //-----------------------| Mensajes de advertencia |-----------------------
 

  //-----------------------| Expresion regular |-----------------------
  const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  //-----------------------| Envio |-----------------------
  const crearUsuario = async () => {
    //--> Validar campos llenos
    if ([email, nombre, apellido, password, confirmPassword].includes('')) {
      if (!email) setEstiloEmail('p-invalid')
      if (!nombre) setEstiloNombre('p-invalid')
      if (!apellido) setEstiloNombre('p-invalid')
      if (!password) setEstiloPassword('p-invalid')
      if (!confirmPassword) setEstiloConfirmPass('p-invalid')
      setMensajeRespuesta(camposVacios)
      setEstiloMensajeRespuesta('error')

      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else {
      setEstiloEmail('')
      setEstiloNombre('')
      setEstiloApellido('')
      setEstiloPassword('')
      setEstiloConfirmPass('')
    }

    if (/^\d*$/.test(nombre, apellido)) {
      setEstiloNombre('p-invalid')
      setEstiloApellido('p-invalid')
      setMensajeRespuesta(formatoNombre)
      setEstiloMensajeRespuesta('error')
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else {
      setEstiloNombre('')
      setEstiloApellido('')
    }

    if (/^\d*$/.test( apellido)) {
      setEstiloApellido('p-invalid')
      setMensajeRespuesta(formatoNombre)
      setEstiloMensajeRespuesta('error')
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else {
      setEstiloApellido('')
    }


    //--> Validar email
    if (!validarEmail.test(email)) {
      setEstiloEmail('p-invalid')
      setEstiloMensajeRespuesta('error')
      setMensajeRespuesta(emailInvalido)
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else { setEstiloEmail('') }

    //--> Validar password
    if (password.length < 6) {
      setEstiloPassword('p-invalid')
      setEstiloMensajeRespuesta('error')
      setMensajeRespuesta(passwordInvalido)
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else { setEstiloPassword('') }

    //--> Comprobar passwords iguales
    if (password !== confirmPassword) {
      setEstiloPassword('p-invalid')
      setEstiloConfirmPass('p-invalid')
      setEstiloMensajeRespuesta('error')
      setMensajeRespuesta(passwordsInValidas)
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
      return
    } else {
      setEstiloPassword('')
      setEstiloConfirmPass('')
    }

    /*
    try {
      const objetoCrearUsuario = {
        nombreCliente: nombre, apellidoCliente: apellido, emailCliente: email, passwordCliente: password
      }
      const respuesta = await axios.post(nuevoUsuario, objetoCrearUsuario)
      //--> Limpiar campos
      setEmail('')
      setNombre('')
      setApellido('')
      setPassword('')
      setEstiloConfirmPass('')
      //--> Redireccionar
      if (respuesta.status === 200) {
        //--> Notificar estatus después de validarlo con back-end
        setMensajeRespuesta(exitoCuenta)
        setEstiloMensajeRespuesta('success')
        setTimeout(() => { router.push('/pages/pantallainicio/token') }, 1000)
      }
    } catch (error) {
      setEstiloMensajeRespuesta('error')
      setMensajeRespuesta(error.response.data.msg)
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
    }*/
  }
  

  const cancelarCreacion = () => {
    //--> Limpiar campos de entrada antes de salir
    setNombre('')
    setApellido('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

    //--> Limpiar estilos de campos de entrada
    setEstiloEmail('')
    setEstiloNombre('')
    setEstiloApellido('')
    setEstiloPassword('')
    setEstiloConfirmPass('')

    //--> Redireccionar
    router.push('/')

  }

  return (
    <>
      <Head>
        <title>Jardín del Edén - Crear usuario</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="El usuario podra darse de alta en el sistema" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Sakai by PrimeReact | Free Admin Template for NextJS"></meta>
        <meta property="og:url" content="https://www.primefaces.org/sakai-react"></meta>
        <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
        <meta property="og:image" content="https://www.primefaces.org/static/social/sakai-nextjs.png"></meta>
        <meta property="og:ttl" content="604800"></meta>
        <link rel="icon" href={`/favicon.ico`} type="image/x-icon"></link>
      </Head>
      <Image src={back} priority={true} className="z-0" style={{ width: '100vw', height: '100vh', filter: 'blur(1px)', position: 'absolute' }} alt="Mi imagen" />
      <div className='flex h-screen  overflow-auto '>

        <div className="z-1">
          <div className={`scalein animation-duration-1000  xl:col-6 md:col-7 sm:col-offset-6 m-auto`}>
            <div className='card  shadow-5'>

              <Image src={loto} priority={true} style={{ width: '18%', height: '13%', marginLeft: '40%' }} alt="Mi imagen" />
              <h1 className={`font-bold text-center`}>Crear cuenta</h1>

              <div className="card-container mx-auto text-center ">
                <div className='field'>
                  <label htmlFor="nombreCompleto" className="block text-900  ">Nombre</label>
                  <InputText
                    id="nombreCompleto" placeholder="Nombre"
                    className={`${estiloNombre} w-full p-3 md:w-25rem `}
                    value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                </div>
                <div className='field'>
                  <label htmlFor="apellido" className="block text-900  ">Apellidos</label>
                  <InputText
                    id="apellido" placeholder="Apellido(s)"
                    className={`${estiloApellido} w-full p-3 md:w-25rem `}
                    value={apellido} onChange={(e) => { setApellido(e.target.value) }} />
                </div>
                <div className='field'>
                  <label htmlFor="email" className="block text-900 ">Correo electrónico</label>
                  <InputText
                    id="email" placeholder="Correo electrónico" className={`${estiloEmail} w-full p-3 md:w-25rem`}
                    value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div className='field'>
                  <label className="block text-900 ">Contraseña</label>
                  <Password
                    id="password" placeholder='Mínimo 6 caracteres' inputClassName={`w-full p-3 md:w-25rem`} className={`${estiloPassword}`}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    promptLabel="Crea tu contraseña" weakLabel="Debil" mediumLabel="Medio" strongLabel="Fuerte"
                  />
                </div>
                <div className='field'>
                  <label className="block text-900 ">Confirme su contraseña</label>
                  <Password
                    id="cpassword" placeholder='Repita su contraseña' inputClassName={`w-full p-3 md:w-25rem`} className={`${estiloConfirmPass} `}
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} feedback={false}
                  />
                </div>

                {mensajeRespuesta && (
                  <div className='mx-auto my-3' style={{ width: "600px", textAlign: "center" }}>
                    <Message severity={estiloMensajeRespuesta} text={mensajeRespuesta} />
                  </div>
                )}

                <div className='flex justify-content-center mb-2'>
                  <Button label="Aceptar" className='mr-2 w-full p-3 md:w-13rem' onClick={crearUsuario} severity="success" size="large" />
                  <Button label="Cancelar" className='mr-2 w-full p-3 md:w-13rem' onClick={cancelarCreacion} severity="danger" size="large" />

                </div>
              </div>

              <div className='flex justify-content-center'>
                <p className='mt-3'>¿Ya tienes una cuenta?</p>
                <Button label="Iniciar Sesión" className='mx-2' link onClick={cancelarCreacion}
                  icon="pi pi-angle-right" iconPos="right" />
              </div>

            </div>

          </div>

        </div>

        <div>

          <AppConfig />
        </div>

      </div>


    </>
  )

}

export default CrearCuenta
