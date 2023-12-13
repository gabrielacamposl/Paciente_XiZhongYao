import React, { useState } from "react";
import Layout from "@/layout/layout"
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Paginator } from 'primereact/paginator';
// import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

const Dashboard = () => {

  //------------------------------|Para mostrar peluches en novedades| |SOLO VISUALIZACIÓN BETA|----------------




  return (
    <Layout title="Inicio" description="Página principal de XiZhongYao" >
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="grid grid-nogutter surface-0 text-800">
              <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                <div className="text-8xl text-primary font-bold mb-1 text-center">XiZhongYao </div> <br/>
                  <span className="block text-6xl font-bold mb-1 ">Interpreta tus Análisis Clínicos</span> <br/>
                  
                  <p className="mt-0 mb-4 text-700 line-height-3">Interpretar los análisis clínicos es crucial para comprender el estado de salud personal 
                  y tomar medidas preventivas o correctivas cuando sea necesario. 
                  Estos análisis proporcionan una visión detallada de diversos aspectos del cuerpo, como niveles de glucosa, lípidos, función renal, entre otros. </p>
                  <p>No te quedes con la duda e interpreta tus Análisis Clinícos ahora mismo, en la opción "Interpretar Análisis", que se encuentra en el menú
                    ubicado en la parte izquierda de tu pantalla.
                  </p>
                </section>
              </div>
              <div className="col-12 md:col-6 overflow-hidden">
                <img src="/images/analisCli.jpg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
              </div>
            </div>
            <div className="surface-0 text-center">
              <div className="mb-3 font-bold text-3xl">
                <br/> <br/>
                <span className="text-900">Ventajas de usar nuestra plataforma, </span>
                <span className="text-900 text-primary font-bold mb-3">XiZhongYao</span>
              </div>

              <div className="text-700 text-xl mb-3 text-center line-height-3">
                Algunas ventajas que te ofrecemos son:
              </div>
              <div className="grid">
                <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-check-circle text-4xl text-green-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Precisión y Consistencia</div>
                  <span className="text-700 line-height-3"> Utilizamos algoritmos avanzados y bases de datos actualizadas para 
                  analizar los resultados de manera precisa y consistente.</span>
                </div>

                <div className="col-12 md:col-4 mb-4 px-5">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-clock text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Eficiencia en el Tiempo</div>
                  <span className="text-700 line-height-3">Automatizando el proceso de interpretación, 
                  este sistema acelera significativamente el tiempo requerido para analizar resultados. </span>

                </div>
                <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
                  <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                    <i className="pi pi-shield text-4xl text-blue-500"></i>
                  </span>
                  <div className="text-900 text-xl mb-3 font-medium">Seguridad y Privacidad</div>
                  <span className="text-700 line-height-3">Contamos con algoritmos de cifrado para la protección de datos 
                  personales de nuestros pacientes.</span>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
