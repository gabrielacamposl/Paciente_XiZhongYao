import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import AppConfig from '@/layout/AppConfig';
import { Toast } from 'primereact/toast';

import { Card } from 'primereact/card';

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




import Layout from "@/layout/layout"
import { Carousel } from 'primereact/carousel';

import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Paginator } from 'primereact/paginator';
// import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

import { Dialog } from 'primereact/dialog';






export default function Home() {
  //----------------| Lista de variables |----------------
  const router = useRouter();



  
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
          <Button className=' p-button p-component font-bold p-button-outolined p-button-rounded  ' onClick={() => { router.push('/login') }}> Iniciar Sesión</Button>
       
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

  //---------------------------| Valor que regresara |---------------------------
  return (
    <>
      
      <Topbar />
      <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">XiZhongYao </span>
                        <div className="text-6xl text-primary font-bold mb-3">Interpreta tus Análisis Clínicos</div>
                        
                        <div className="text-700 text-2xl mb-5">Interpretar los análisis clínicos es crucial para comprender el estado de salud personal y tomar medidas preventivas o correctivas cuando sea necesario. Estos análisis proporcionan una visión detallada de diversos aspectos del cuerpo, como niveles de glucosa, lípidos, función renal, entre otros.</div>
                   
                        <div className="text-700 text-2xl mb-5"> No te quedes con la duda e interpreta tus Análisis Clinícos ahora mismo</div>

                        
                        <Button className=' p-button p-component font-bold p-button-outolined p-button-rounded  ' onClick={() => { router.push('/login') }}> Iniciar Sesión</Button>
                 

                  
                          <a href="/pages/pantallainicio/crearcuenta">
                          <Button label="Registrarse" type="button" className="p-button p-component font-bold p-button-outlined p-button-rounded" />

</a>

                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <img src="/images/analisCli.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>


            <div className="surface-0 text-center">
                <div className="mb-3 font-bold text-3xl"> <br/><br/>
                    <span className="text-900">Ventajas de usar, </span>
                    <span className="text-900 text-primary font-bold mb-3">XiZhongYao</span>
                </div>

                <div className="text-700 text-xl mb-3 text-center line-height-3">
                    Algunas ventajas que te ofrecemos son:.
                </div>

                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Precisión y Consistencia</div>
                        <span className="text-700 line-height-3"> Utilizamos algoritmos avanzados y bases de datos actualizadas para analizar los resultados de manera precisa y consistente.</span>
                    </div>

                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-clock text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Eficiencia en el Tiempo</div>
                        <span className="text-700 line-height-3">Automatizando el proceso de interpretación, este sistema acelera significativamente el tiempo requerido para analizar resultados. </span>

                        <div></div>

                        <div>
                          <br/>
                            <Button label="Pruébalo" type="button" className="mr-3 p-button-raised"/>
                        <Button className=' p-button p-component font-bold p-button-outolined p-button-rounded  ' onClick={() => { router.push('/login') }}> Pruebalo</Button>

                        </div>

                    </div>
                    <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                        <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                            <i className="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">Seguridad y Privacidad</div>
                        <span className="text-700 line-height-3">Contamos con algoritmos de cifrado para la protección de datos personales de nuestros pacientes.</span>
                    </div>
                </div>
            </div>

          <div>
            


            

        
    

    
      
      
        
   
   
</div>
    
        

<div className="grid grid-nogutter surface-0 text-800">

<div className="col-12 md:col-6 overflow-hidden">
                    <img src="/images/manzanilla.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(0% 0, 100% 20%, 100% 100%, 0 80%)' }} />
                </div>

                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        
                        

                          <div className="surface-0 text-700 text-center">
    <div className="text-pink-600 font-bold mb-3"><i className="pi pi-camera"></i>&nbsp;Impulsado por Inteligencia Artificial</div>
    <div className="text-900 font-bold text-5xl mb-3">Identifica tu planta medicinal</div>
    <div className="text-700 text-2xl mb-5">
Utilizando inteligencia artificial, puedes reconocer tu planta y acceder a información sobre sus cuidados y recomendaciones específicas.</div>
    <Button label="Identifica tu planta ahora mismo" icon="pi pi-camera" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
</div>
    
                    </section>
                </div>
                
            </div>


      
      <Footer/> 
    </>

  )   

}

 