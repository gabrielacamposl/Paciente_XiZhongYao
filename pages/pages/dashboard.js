import React, { useState } from "react";
import Layout from "@/layout/layout"
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';


const Dashboard = () => {

  //------------------------------|Para mostrar peluches en novedades| |SOLO VISUALIZACIÓN BETA|----------------
 //----------------| Lista de variables |----------------


 const Topbar = () => {
   return (
     <div className="topbar">
       <div className='surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static'>
         <img src={`/layout/images/XZY.svg`} width="47.22px" height={'35px'} widt={'true'} alt="logo" />
         <span className="text-green-900 font-bold mb-1">XiZhongYao</span>
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


  const estiloDelFondo = {
    backgroundImage: 'url("https://i.pinimg.com/originals/d5/0c/0d/d50c0dec22f328569af00a8fd42a38fc.jpg")', // Cambia la ruta por la de tu imagen
    backgroundSize: 'cover', // Puedes ajustar esto según tus preferencias
    backgroundPosition: 'center', // Puedes ajustar esto según tus preferencias
    // Otros estilos que desees agregar
  };
  const estiloDelFondo2 = {
    backgroundImage: 'url("https://i.pinimg.com/originals/13/87/f9/1387f9be2a8a3fbd35b8e8593eeb978b.jpg")', // Cambia la ruta por la de tu imagen
    backgroundSize: 'cover', // Puedes ajustar esto según tus preferencias
    backgroundPosition: 'center', // Puedes ajustar esto según tus preferencias
    // Otros estilos que desees agregar
  };
  const estiloDelFondo3 = {
    backgroundImage: 'url("https://i.pinimg.com/originals/92/49/db/9249db69260362c929cc44e1baab9718.jpg")', // Cambia la ruta por la de tu imagen
    backgroundSize: 'cover', // Puedes ajustar esto según tus preferencias
    backgroundPosition: 'center', // Puedes ajustar esto según tus preferencias
    // Otros estilos que desees agregar
  };
  const color = {
    backgroundColor: 'rgb(255,255,255, 0.7)',
  };

  const estiloTexto = {
    color: 'transparent',
    userSelect: 'none', // Evita la selección del texto
  };

  const estilo = {
    height: '38px',
    width: '38px',
    backgroundColor: '#800080', // Puedes cambiar esto según tus necesidades
    borderRadius: '10px', // Agregamos el radio de borde
    // Otros estilos que desees agregar
  };

  return (
    <Layout title="Inicio" description="Página principal de XiZhongYao" >
  

      <div>
        <div className='px-4 py-8 md:px-8 lg:px-8' style={estiloDelFondo}>
          <div className='flex flex-wrap'>
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
              <section>
      
                <div className="text-700 text-2xl mb-5">
                  <h4  style={ estiloTexto}>Interpretar los análisis clínicos es crucial para comprender el estado de salud personal y tomar medidas preventivas o correctivas cuando sea necesario. Estos análisis proporcionan una visión detallada de diversos aspectos del cuerpo, como niveles de glucosa, lípidos,  entre otros.</h4></div>
                <div className="text-700 text-1xl mb-5"> ¡No te quedes con la duda!,  interpreta tus Análisis Clínicos ahora mismo.</div>

                <a href="/pages/usuario/Medicine/analisCliFront">
                  <Button label="Interpretar Análisis" type="button" className="p-button p-component font-bold p-button-outlined p-button-rounded" />
                </a>
              </section>
              <h1 style={estiloTexto}>XiZhongYao</h1>
            </div>

          </div>
        </div>
      </div>



      <div className="surface-0 text-center">
        <div className="mb-3 font-bold text-3xl"> <br /><br />
          <span className="text-900">Ventajas de usar, </span>
          <h2>XiZhongYao</h2>
        </div>
        <div className="text-700 text-xl mb-3 text-center line-height-3">
          Algunas ventajas que te ofrecemos son:
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



      <div className="grid grid-nogutter surface-0 text-800" style={estiloDelFondo2} >

        <div className="col-12 md:col-6 overflow-hidden">
        </div>

        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <h1 style={estiloTexto}>XiZhongYao</h1>
            <h1 style={estiloTexto}>XiZhongYao</h1>
            <h1 style={estiloTexto}>XiZhongYao</h1>
            <h1 style={estiloTexto}>XiZhongYao</h1>
 

            <div className=" text-700 text-center">
              <div className="text-pink-600 font-bold mb-3"></div>
              <div className="text-900 font-bold text-5xl mb-3">Agenda tu cita con nuestros mejores especialistas</div>
              <div className="text-700 text-2xl mb-5">
              ¡Asegura tu bienestar! Agenda tu cita con nuestros destacados especialistas para recibir la atención personalizada que mereces. Estamos comprometidos con tu salud y te ofrecemos servicios de calidad con un equipo médico altamente calificado. </div>
              
              <a href="/pages/usuario/Medicine/Doctores">
              <Button label="Ver nuestros especialistas en salud" icon="pi pi-shield" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"    />
                </a>
            </div>
            <h1 style={estiloTexto}>XiZhongYao</h1>
            <h1 style={estiloTexto}>XiZhongYao</h1>
            <h1 style={estiloTexto}>XiZhongYao</h1>
          </section>
        </div>

      </div>



      <div>
        <div className='md:ml-auto block md:h-full' style={estiloDelFondo3}>
          <div className='flex flex-wrap'>
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
              <section>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>


                <div className="text-700 text-center">
                  <div className="text-green-600 font-bold mb-3"><i className="pi pi-camera"></i>&nbsp;Impulsado por Inteligencia Artificial</div>
                  <div className="text-900 font-bold text-5xl mb-3">Identifica tu planta medicinal</div>
                  <div className="text-700 text-2xl mb-5">
                    Utilizando inteligencia artificial, puedes reconocer tu planta y acceder a información sobre sus cuidados y recomendaciones específicas.</div>
                  <Button label="Identifica tu planta ahora mismo" icon="pi pi-camera" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
                </div>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
                <h1 style={estiloTexto}>XiZhongYao</h1>
              </section>
            </div>

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Dashboard
