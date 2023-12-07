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
  const [doc, setDoc] = useEstate();
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
    <Layout title="Nuestros Profesionales"
      description="Acceso al listado de los médicos disponibles" >
      <div className="grid">
        <div className="col-12">
          <div className="card">

          <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Image
            cloudName="dp6uo7fsz" publicId={flor.imagenProducto[0]}
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            style={{ width: '200px', height: '200px' }}
          />
          <div
            className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
          >
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{doc.username}</div>
              <div className="flex align-items-center gap-3">
                <Tag value={flor.statusProducto} severity={getSeverity(flor)}></Tag>
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{doc.especialidad}</span>
                </span>
              </div>
            </div>

            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 mt-6">
              <Button
                label="Favoritos"
                icon={"pi pi-heart"}
                rounded
                severity="help"
                aria-label="Favorite"
                className="p-button-rounded"
                // onClick={() => toggleFavorito(flor)}
                onClick={() => AgregarFavorito(flor)}
              />
              <Button label="Agregar" icon="pi pi-shopping-cart" className="font-light ml-2 " severity="success" disabled={flor.estatusProducto === 'Agotado'} onClick={() => { AgregarCarrito(flor) }} />
              <Toast ref={toast} />
              <Button label="Detalles" icon="pi pi-external-link" className="p-button-rounded"
                onClick={() => dialogoFlor(flor)} />
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
