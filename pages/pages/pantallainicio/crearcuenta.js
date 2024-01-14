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
import { Divider } from 'primereact/divider';

//-->Imagenes 
import Image from 'next/image';
import loto from '../../../imagenes/login/principal2.png';
import back from '../../../public/images/background.gif';

//--> Componentes propios
import { camposVacios, emailInvalido, exitoCuenta, passwordInvalido, passwordsInValidas, formatoNombre} from '@/components/mensajesNotificaciones/mensajes';
import { nuevoPaciente } from '@/components/mensajesNotificaciones/links';



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

    
    try {
      const objetoCrearUsuario = {
        namePaciente: nombre, surnamePaciente: apellido,emailPaciente: email,  passwordPaciente: password
      }
      const respuesta = await axios.post(nuevoPaciente, objetoCrearUsuario)
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
      console.log(error);
      setEstiloMensajeRespuesta('error')
      //setMensajeRespuesta(error.response.data.msg) ctrl+k
      setMensajeRespuesta("Este correo ya está en uso.")
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
    }
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


    
  const Topbar = () => {
    return (
      <div className="topbar">
        <div className='surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static'>
          <img src={`/layout/images/XZY.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
        <span>XiZhongYao</span>
        <a className='p-ripple cursor-pointer block lg:hidden text-700'>
          <i className='pi pi-bars text-4x1'> 
          </i>
        </a>
        <div className='align-items-center flex-grown-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none'>
          <ul className='list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4'></ul>
        </div>
        <div className='flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4'>
          <Button className=' p-button p-component font-bold p-button-outolined p-button-rounded  '  onClick={() => { router.push('/login') }}> Iniciar Sesión</Button>        
        </div>
        </div>
      </div>
    );
  }

  const Footer = () => {
    return (
      <div className="footer">
        <div className='grid grid-nogutter surface-section px-4 py-4 md:px-6 lg:px-8 border-top-1 surface-border'>
          <div className='col-12 lg:col-6 lg:border-right-1 surface-border'>
          <img src={`/XZY.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
          <span className='text-900 block mt-4 mr-3'>Una empresa dedicada al cuidado se su salud, con la mejor tecnología y los mejores profesionistas.</span>
          <span className='text-500 block mt-4'> © 2023 XiZhongYao, S.A. Todos los derechos reservados.</span>
          </div>
          <div className='col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column'>
            <span className='text-900 text-xl font-medium block'>Compañía</span>
            <ul className='list-none p-0'>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>Sobre XiZhongYao</a>
              </li>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>¿Quiénes somos?</a>
              </li>   
            </ul>
          </div>
          <div className='col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column'>
            <span className='text-900 text-xl font-medium block'>Para Pacientes</span>
            <ul className='list-none p-0'>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>Especialistas</a>
              </li>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>Diagnóstico por Interpretaciones</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
          <ul class="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
              <li class="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" class="cursor-pointer text-0">Datos de Privacidad</a>
                </li>
                <li class="mr-4 mt-3 lg:mt-0">
                  <a tabindex="0" class="cursor-pointer text-0">Términos y Condiciones</a>
                  </li>
                  <li class="mr-4 mt-3 lg:mt-0">
                    <a tabindex="0" class="cursor-pointer text-0">Información Legal</a>
                    </li>
                    </ul>
                    <div class="flex align-items-center flex-order-0 lg:flex-order-1">
                      <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block"> 
                      <i class="pi pi-facebook surface-section p-1 text-sm border-circle text-900">
                      </i>
                      </a>
                      <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block">
                        <i class="pi pi-twitter surface-section p-1 text-sm border-circle text-900"></i>
                      </a>
                        <a tabindex="0" class="cursor-pointer mr-3 lg:mt-0 block">
                          <i class="pi pi-youtube surface-section p-1 text-sm border-circle text-900"></i>
                        </a>
                      </div>
          </div>
        
      </div>
    );
  }
  
  const estiloDelFondo = {
    backgroundImage: 'url("https://i.pinimg.com/564x/82/74/6f/82746f4cb6ad9d0b9ea72ba36425379b.jpg")', // Cambia la ruta por la de tu imagen
    backgroundSize: 'cover', // Puedes ajustar esto según tus preferencias
    backgroundPosition: 'center', // Puedes ajustar esto según tus preferencias
    // Otros estilos que desees agregar
  };

  const color = {
    backgroundColor:'rgb(255,255,255, 0.7)',
  };

  const estilo = {
    height: '38px',
    width: '38px',
    backgroundColor: '#800080', // Puedes cambiar esto según tus necesidades
    borderRadius: '10px', // Agregamos el radio de borde
    // Otros estilos que desees agregar
  };

  return (
    <>
      <Topbar />
      <Head>
        <title>XiZhongYao - Crear Cuenta</title>
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
        <link rel="icon" href={`/XZY.ico`} type="image/x-icon"></link>
      </Head>
   
     <div>
     <div className='px-4 py-8 md:px-6 lg:px-8' style={estiloDelFondo}>
        <div className='flex flex-wrap'>
        <div className='w-full lg:w-6 p-4 lg:p7' style={color}>
           <img src={`/layout/images/XZY.svg`} alt='Image' height='50' className='mb-6'/>
           <div className='text-xl text-black-alpha-90 font-500 mb-3'>
            <h2>Bienvenido a XiZhongYao</h2>
           </div>
           <p className='text-black-alpha-50 line-height-3 mt-0 mb-6'>
           
            </p>
            <ul className='list-none p-0 m-0'>
              <li className='flex align-items-start mb-4'>
                <div>
                  <span className='flex align-items-center justify-content-center bg:purple-400' style={estilo}>
                    <i className='text-xl text-white pi pi-shield'>
                    </i>
                  </span>
                </div>
                <div className='ml-3'>
                  <span className='font-medium text-black-alpha-90'>Interpretación de resultados
                  </span>
                  <p className='mt-2 mb-0 text-black-aplha-60 line-height-3'>
                  A través de una interfaz intuitiva, te proveeremos de una rápida interpretación de tus análisis clínicos, con el objetivo de que te des una mejor idea de tu situación general. 
                  </p>
                </div>
              </li>
              <li className='flex align-items-start mb-4'>
                <div>
                  <span className='flex align-items-center justify-content-center bg:purple-400' style={estilo}>
                    <i className='text-xl text-white pi pi-shopping-bag'>
                    </i>
                  </span>
                </div>
                <div className='ml-3'>
                  <span className='font-medium text-black-alpha-90'>Venta de plantas medicinales
                  </span>
                  <p className='mt-2 mb-0 text-black-aplha-50 line-height-3'>
                  Accede a un amplio mercado integrado directamente en la plataforma. Busca aquella que te pueda ayudar mas en tu diagnóstico. 
                  </p>
                </div>
              </li>
              <li className='flex align-items-start mb-4'>
                <div>
                  <span className='flex align-items-center justify-content-center bg:purple-400' style={estilo}>
                    <i className='text-xl text-white pi pi-calendar'>
                    </i>
                  </span>
                </div>
                <div className='ml-3'>
                  <span className='font-medium text-black-alpha-90'>Citas con los mejores médicos
                  </span>
                  <p className='mt-2 mb-0 text-black-aplha-50 line-height-3'>
                  Facilitamos el hecho de que obtengas una cita con doctores certificados. Te permitimos buscar, seleccionar y agendar citas de manera sencilla. 
                  </p>
                </div>
              </li>
            </ul> 
          </div>

          <div className='w-full lg:w-6 p-4 lg:p7 surface-card'>

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
      </div>
      
 

      <Footer />


    </>
  )

}

export default CrearCuenta
