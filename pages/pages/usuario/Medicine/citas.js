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

// --> Libreria de cloudinary
import { Image } from 'cloudinary-react'



const citas = () => {
  //----------------| Lista de variables |----------------
  

  //----------------| Valor que regresara |----------------
  return (
    <Layout
      title="Flores"
      description="Acceso al catálogo de flores"
    >
      <div className="grid">
        <div className="col-12">
          <div className="card">

           
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default citas