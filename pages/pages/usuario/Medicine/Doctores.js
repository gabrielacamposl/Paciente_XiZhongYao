import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout"
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';

// --> Libreria de cloudinary
import { Image } from 'cloudinary-react'



const doctores = () => {
  //----------------| Lista de variables |----------------
  const [doc, setDoc] = useState();
  const [docInfo, setDocInfo] = useState({
    username: '',
    especialidad: '',
    creatinina: '',
    cedulaProf: '',
    precioConsultaUno: '',
    infoSobre: '',
    profileDoc: [],
  });

 

  //----------------| Valor que regresara |----------------
  return (
    <Layout title="Nuestros Profesionales"  description="Acceso al listado de los médicos disponibles" >

      <div className="grid">
         <div className="col-12">
            <div className="card">
            <div className="block-content">
        <div className="px-4 py-8 md:px-6 lg:px-8 surface-ground">
          <div className="grid grid-nogutter">
            <div className="col-12 md:col-8 xl:col-6 p-3">
              <div className="surface-card shadow-2 border-round p-4">
                <div className="flex border-bottom-1 surface-border pb-4">
                  <img src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/08/02/2986392.jpg" 
                  className="mr-3" alt="1"  style={{ width: '70px', height: '70px' }}/>
                  <div className="flex flex-column align-items-start">
                    <span className="text-xl text-900 font-medium mb-1"> Dr. Gonzalez</span>
                    <span className="text-600 font-medium mb-2"> Gastroenterólogo</span>
                    <span className="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">Médico</span>
                  </div>
                </div>
                <div className="flex justify-content-between pt-4">
                  <Button> Agendar Cita</Button>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-8 xl:col-6 p-3">
              <div className="surface-card shadow-2 border-round p-4">
                <div className="flex border-bottom-1 surface-border pb-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/220624_%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_%EB%B7%94%281%29.jpg/220px-220624_%EB%B0%A9%ED%83%84%EC%86%8C%EB%85%84%EB%8B%A8_%EB%B7%94%281%29.jpg" 
                  className="mr-3" alt="1"  style={{ width: '70px', height: '70px' }}/>
                  <div className="flex flex-column align-items-start">
                    <span className="text-xl text-900 font-medium mb-1"> Dr. Gonzalez</span>
                    <span className="text-600 font-medium mb-2"> Gastroenterólogo</span>
                    <span className="bg-green-50 text-green-400 border-round inline-flex py-1 px-2 text-sm">Médico</span>
                  </div>
                </div>
                <div className="flex justify-content-between pt-4">
                  <Button> Agendar Cita</Button>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-8 xl:col-6 p-3">
              <div className="surface-card shadow-2 border-round p-4">
                <div className="flex border-bottom-1 surface-border pb-4">
                  <img src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/08/02/2986392.jpg" 
                  className="mr-3" alt="1"  style={{ width: '70px', height: '70px' }}/>
                  <div className="flex flex-column align-items-start">
                    <span className="text-xl text-900 font-medium mb-1"> Dr. Gonzalez</span>
                    <span className="text-600 font-medium mb-2"> Gastroenterólogo</span>
                    <span className="bg-blu-50 text-blue-400 border-round inlin e-flex py-1 px-2 text-sm">Médico</span>
                  </div>
                </div>
                <div className="flex justify-content-between pt-4">
                  <Button> Agendar Cita</Button>
                </div>
              </div>
            </div>
            <div className="col-12 md:col-8 xl:col-6 p-3">
              <div className="surface-card shadow-2 border-round p-4">
                <div className="flex border-bottom-1 surface-border pb-4">
                  <img src="https://cdn2.excelsior.com.mx/media/styles/image800x600/public/pictures/2023/08/02/2986392.jpg" 
                  className="mr-3" alt="1"  style={{ width: '70px', height: '70px' }}/>
                  <div className="flex flex-column align-items-start">
                    <span className="text-xl text-900 font-medium mb-1"> Dr. Gonzalez</span>
                    <span className="text-600 font-medium mb-2"> Gastroenterólogo</span>
                    <span className="bg-blu-50 text-blue-400 border-round inlin e-flex py-1 px-2 text-sm">Médico</span>
                  </div>
                </div>
                <div className="flex justify-content-between pt-4">
                  <Button> Agendar Cita</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      
    </Layout>
  )
}

export default doctores
