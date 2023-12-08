import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import AppConfig from '@/layout/AppConfig';
import { Divider } from 'primereact/divider';


import axios from 'axios';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';

import * as components from './components';
import Image from 'next/image';
import myImage from '../imagenes/login/green2.png';
import myImage1 from '../imagenes/login/green.png';
import myImage2 from '../imagenes/login/LogoLogin.png';
import myImage3 from '../imagenes/login/sourceResetPass.png';
import loto from '../imagenes/login/XZY.png';
import styles from '../styles/styles.module.css';
import { iniciarSesion, resetearPassword } from '@/components/mensajesNotificaciones/links';
import {
  campoVacio, camposVacios, emailInvalido, passwordInvalido, resetearExitoso
} from '@/components/mensajesNotificaciones/mensajes';



export default function Login() {
  //----------------| Lista de variables |----------------
  const [signIn, toggle] = useState(true);
  // --> Campos de entrada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [emailrecuperar, setEmailrecuperar] = useState('')
  //--> Estilos
  const [estiloEmail, setEstiloEmail] = useState('')
  const [estiloPassword, setEstiloPassword] = useState('')
  const [estiloEmailRec, setEstiloEmailRec] = useState('')
  const [estiloRespuesta, setEstiloRespuesta] = useState('')
  //--> Mensaje de respuesta
  const [mensajeRespuesta, setMensajeRespuesta] = useState('')

  const router = useRouter();

  const validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

  //--> Envio de datos
  const validarEnvio = async () => {
    if ([email, password].includes('')) {
      setEstiloEmail('p-invalid')
      setEstiloPassword('p-invalid')
      setEstiloRespuesta('error')
      setMensajeRespuesta(camposVacios)
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
      return
    } else {
      setEstiloEmail('')
      setEstiloPassword('')
    }
    if (!validarEmail.test(email)) {
      setEstiloEmail('p-invalid')
      setMensajeRespuesta(emailInvalido)
      setEstiloRespuesta('error')
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
      return
    } else { setEstiloEmail('') }
    if (password.length < 6) {
      setEstiloPassword('p-invalid')
      setMensajeRespuesta(passwordInvalido)
      setEstiloRespuesta('error')
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
      return
    } else { setEstiloPassword('') }
    setMensajeRespuesta('')
    //--> Validar envio a back-end
    try {
      const respuesta = await axios.post(iniciarSesion, { emailCliente: email, passwordCliente: password })
      if (respuesta.status === 200) {
        // console.log(respuesta.data.username)
        localStorage.setItem('nombre', respuesta.data.username)
        localStorage.setItem('token', respuesta.data.token)
        setTimeout(() => { router.push('/pages/dashboard') }, 1000)
      }
    } catch (error) {
   //   setMensajeRespuesta(error.response.data.msg)
      setEstiloRespuesta('error')
      setEstiloEmail('p-invalid')
      setEstiloPassword('p-invalid')
      setTimeout(() => { setMensajeRespuesta('') }, 3000);
    }
  }

  const recuperarPassword = async () => {
    console.log("recuperar password")
    if ([emailrecuperar].includes('')) {
      setEstiloEmailRec('p-invalid')
      setMensajeRespuesta(campoVacio)
      setEstiloRespuesta('error')
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
      return
    } else { setEstiloEmailRec('') }

    if (!validarEmail.test(emailrecuperar)) {
      setEstiloEmailRec('p-invalid')
      setMensajeRespuesta(emailInvalido)
      setTimeout(() => { setMensajeRespuesta('') }, 3000)
      return
    } else { setEstiloEmailRec('') }

    try {
      const respuesta = await axios.post(resetearPassword, { emailCliente: emailrecuperar })
      if (respuesta.status === 200) {
        // --> Limpiar variables
        setEmailrecuperar('')

        //--> Mostrar estado de la peticion
        setEstiloRespuesta('success')
        setMensajeRespuesta(resetearExitoso)

        //--> Redireccionar
        setTimeout(() => { router.push('/pages/pantallainicio/tokenresetear') }, 1000)
      }
    } catch (error) {
      setEstiloEmailRec('p-invalid')
      setMensajeRespuesta(error.response.data.msg)
      setEstiloRespuesta('error')

      setTimeout(() => { setMensajeRespuesta('') }, 3000)
    }
  }

  const Topbar = () => {
    return (
      <div className="topbar">
        <img src={`/layout/images/XZY.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
        <span>XiZhongYao</span>
        <button type="button" className="p-link layout-topbar-button" onClick={() => { router.push('/pages/usuario/PerfilUser/perfil') }}>
          <i className="pi pi-user"></i>
          <span>Iniciar Sesión</span>
        </button>
        
      </div>
    );
  }
  


  //---------------------------| Valor que regresara |---------------------------
  return (
    <>
      
      <components.Container className={`card m-auto mt-8 ${styles.card}`} >
        <components.SignUpContainer className={`card ${styles.card}`} signinIn={signIn}>
          <components.Form  >

            <h1 className={`font-bold text-center`}>Recuperar contraseña</h1>
            <components.Parrafo>Ingresa el correo asociado a tu cuenta</components.Parrafo>
            <label htmlFor="email1" className="block text-900 ">Email</label>
            <InputText
              inputid="email1" value={emailrecuperar} onChange={(e) => setEmailrecuperar(e.target.value)}
              type="text" placeholder="Email address" className={`block text-900  mb-2 w-full p-3  ${estiloEmailRec}`}
            />
            {mensajeRespuesta &&
              (
                <div className='my-2'>
                  <Message severity={estiloRespuesta} text={mensajeRespuesta} />
                </div>
              )}

            <Button label="Enviar" className="w-full p-3 text-xl" title="enviar" onClick={recuperarPassword} />
            <components.Anchor onClick={() => toggle(true)}  >Iniciar Sesión</components.Anchor>


          </components.Form  >
        </components.SignUpContainer>


        <components.SignInContainer className={`card ${styles.card}`} signinIn={signIn}>
          

          <components.Form >
            <Image src={loto} className={styles['logo']} alt="Mi imagen" priority={true} style={{ width: '50px', height: '50px' }} />
            <h1 className={`font-bold text-center`}>Iniciar Sesión</h1>

            <label htmlFor="email1" className="block text-900 ">Correo</label>
            <InputText
              inputid="email1" value={email} onChange={(e) => setEmail(e.target.value)}
              type="text" placeholder="Correo electrónico" className={`block text-900  mb-2 w-full p-3  ${estiloEmail}`}
            />

            <label htmlFor="password1" className="block text-900 ">Contraseña</label>
            <Password
              inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña"
              feedback={false} className="w-full " inputClassName={`w-full p-3 md:w-30rem  ${estiloPassword}`} />

            <components.Parrafo onClick={() => toggle(false)} className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>¿Olvidaste tu contraseña?</components.Parrafo>
            <Button label="Iniciar Sesión" className="w-full p-3 mb-3 text-xl" onClick={validarEnvio} />

            {mensajeRespuesta &&
              (<Message severity={estiloRespuesta} text={mensajeRespuesta} />)
            }

            <components.Parrafo>¿Eres Nuevo?</components.Parrafo>
            <div className="flex align-items-center">
              <Link
                href="/pages/pantallainicio/crearcuenta"
                className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}
              >Crear cuenta</Link>
            </div>

          </components.Form>
        </components.SignInContainer>
        <components.OverlayContainer signinIn={signIn}>
          <components.Overlay signinIn={signIn}>

            <components.leftOverLayPanel signinIn={signIn}>
              <components.GhostButton onClick={() => toggle(true)}>Iniciar Sesión</components.GhostButton>
            </components.leftOverLayPanel>

            <components.RightOverLayPanel signinIn={signIn}>
            <Image src={myImage2} className={styles['my-image']}  alt="Mi imagen"
            priority={true}  style={{  height: '70px', width: '70px' ,
            marginTop: '120px',  }}
            />
            <Divider/>
            
            <components.Title>XIZHONGYAO</components.Title>
            <Divider layout="horizontal" style={{ borderColor: '#7F6000', borderWidth: '2px', 
            borderStyle: 'solid' ,
            marginTop: '1px', 
            marginLeft: '20px',
            }}></Divider>
            <Divider/>
            <br/>
              <components.Title2>Cuidando tu salud</components.Title2>
    
            </components.RightOverLayPanel >
            <Image src={myImage3} className={styles['my-image']} alt="Mi imagen" priority={true}  />
            <Image src={myImage} className={styles['my-image']} alt="Mi imagen" priority={true} />
          </components.Overlay>
        </components.OverlayContainer>
      </components.Container>
      <AppConfig />
    </>
  )
}

