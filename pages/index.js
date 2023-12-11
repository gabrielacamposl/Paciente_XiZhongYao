import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import AppConfig from '@/layout/AppConfig';


import axios from 'axios';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';

import * as components from './components';
import Image from 'next/image';
import myImage from '../imagenes/login/loto.jpg';
import myImage1 from '../imagenes/login/flower1.jpeg';
import loto from '../imagenes/login/principal1.png';
import styles from '../styles/styles.module.css';
import { iniciarSesion, resetearPassword } from '@/components/mensajesNotificaciones/links';
import {
  campoVacio, camposVacios, emailInvalido, passwordInvalido, resetearExitoso
} from '@/components/mensajesNotificaciones/mensajes';



export default function Home() {
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
<center>
        <button type="button" className="p-link layout-topbar-button" onClick={() => { router.push('/pages/usuario/PerfilUser/perfil') }}>
          <i className="pi pi-user"></i>
          <span>Eres Doctor?</span>

          
        </button>
        </center>
      </div>
    );
  }
  


  //---------------------------| Valor que regresara |---------------------------
  return (
    <>
      
       <Topbar />
<div className="grid grid-nogutter surface-0 text-800">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">XiZhongYao</span>
            <div className="text-6xl text-primary font-bold mb-3">Interpreta tus Análisis Clínicos</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Interpretar los análisis clínicos es crucial para comprender el estado de salud personal y tomar medidas preventivas o correctivas cuando sea necesario. Estos análisis proporcionan una visión detallada de diversos aspectos del cuerpo, como niveles de glucosa, lípidos, función renal, entre otros. </p>
<p>No te quedes con la duda e interpreta tus Análisis Clinícos ahora mismo</p>
        
         
            <a href="/aaa">
      <Button label="Iniciar Sesión" type="button" className="mr-3 p-button-raised" />
    </a>

            <a href="/pages/pantallainicio/crearcuenta">
      <Button label="Registrarse" type="button" className="p-button-outlined" />
    </a>

        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="/images/analisCli.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    

<div>

<br></br>

</div>



<div className="surface-0 text-center">
    <div className="mb-3 font-bold text-3xl">
        <span className="text-900">Ventajas de usar, </span>
        <span className="text-6xl text-primary font-bold mb-3">XiZhongYao</span>
    </div>

    <div className="text-700 text-xl mb-3 text-center line-height-3">
Algunas ventajas que te ofrecemos son:.
</div>

    
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-check-circle text-4xl text-pink-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Precisión y Consistencia</div>
            <span className="text-700 line-height-3"> Utilizamos algoritmos avanzados y bases de datos actualizadas para analizar los resultados de manera precisa y consistente.</span>
        </div>
        
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-clock text-4xl text-pink-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Eficiencia en el Tiempo</div>
            <span className="text-700 line-height-3">Automatizando el proceso de interpretación, este sistema acelera significativamente el tiempo requerido para analizar resultados. </span>
            
            <div></div>
            
            
            <div>

            <a href="/aaa">
      <Button label="Pruebalo" type="button" className="mr-3 p-button-raised" />
    </a>
            </div>
            
         
      
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-shield text-4xl text-pink-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Seguridad y Privacidad</div>
            <span className="text-700 line-height-3">Contamos con algoritmos de cifrado para la protección de datos personales de nuestros pacientes.</span>
        </div>
    </div>
</div>
    
<div>



  
</div>

      <AppConfig />
    </>
  )
}


