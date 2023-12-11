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
          <Button className='p-button p-component font-bold ml-3 p-button-rounded'>¿Eres Doctor?</Button>  
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
          <img src={`/layout/images/XZY.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
          <span className='text-900 block mt-4 mr-3'>KJVKJNVFJVnjkvfvkjew v v kjv c skcbckbvubawnjvb s</span>
          <span className='text-500 block mt-4'> 2023, XiZhongYao by Dreamteam</span>
          </div>
          <div className='col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column'>
            <span className='text-900 text-xl font-medium block'>Company</span>
            <ul className='list-none p-0'>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>About XiZhongYao</a>
              </li>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>Factories</a>
              </li>
            </ul>
          </div>
          <div className='col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column'>
            <span className='text-900 text-xl font-medium block'>Account</span>
            <ul className='list-none p-0'>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>About XiZhongYao</a>
              </li>
              <li>
                <a tabIndex={0} className='text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block'>Factories</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
          <ul class="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
            <li class="mr-4 mt-3 lg:mt-0">
              <a tabindex="0" class="cursor-pointer text-0">Investor Relations</a>
              </li>
              <li class="mr-4 mt-3 lg:mt-0">
                <a tabindex="0" class="cursor-pointer text-0">Data Privacy</a>
                </li>
                <li class="mr-4 mt-3 lg:mt-0">
                  <a tabindex="0" class="cursor-pointer text-0">Terms of Service</a>
                  </li>
                  <li class="mr-4 mt-3 lg:mt-0">
                    <a tabindex="0" class="cursor-pointer text-0">Legal Information</a>
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
                          <a tabindex="0" class="cursor-pointer lg:mt-0 block">
                            <i class="pi pi-google surface-section p-1 text-sm border-circle text-900">
                            </i>
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
            <span className="block text-6xl font-bold mb-1">Create the screens</span>
            <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <Button label="Iniciar Sesión" type="button" className="mr-3 p-button-raised" />
            <Button label="Crear Cuenta" type="button" className="p-button-outlined" />
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src="/images/analisCli.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
    
    
      <br style={{ margin: '5pt' }} />
      <br style={{ margin: '5pt' }} />
      <br style={{ margin: '5pt' }} />
      <Footer/> 
    </>
  )   */}
}

 