import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout";
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Messages } from 'primereact/messages';
import { Menu } from 'primereact/menu';
// --> Libreria de cloudinary
//import { Image } from 'cloudinary-react';



const analisisResult = () => {
  const [formValues, setFormValues] = useState({
    glucosa: '',
    urea: '',
    creatinina: '',
    acidoUrico: '',
    colesterolTotal: '',
    colesterolLdl: '',
    colesterolHdl: '',
    trigliceridos: '',
    bilirrubina: '',
    tgo: '',
    tgp: '',
    ggt: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que el valor ingresado sea numérico
    if (!isNaN(value) || value === '') {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    for (const key in formValues) {
      if (formValues[key] === '') {
        setError('Todos los campos son obligatorios.');
        return;
      }
    }

    // Aquí puedes manejar la lógica de envío de datos
    console.log('Formulario enviado', formValues);
    setError('');
  };

  
  //----------------| Valor que regresará |----------------
  return (
    <Layout title="Interpretación de Análisis" description="Interpreta los análisis clínicos sanguíneos de los pacientes">
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="grid">
              <div className="col-12">
                <div className="card">
                  <h2>Formulario de Análisis Clínicos</h2>
                  <div className="grid">
                    <div className="col-5 flex align-items-center justify-content-center">
                    <div className="col-5 flex align-items-left justify-content-left">
                              <div className="p-fluid">
                                <br />
                                <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2"> Glucosa:</label>
                                <br />
                                <br />
                                <label htmlFor="urea" className="block text-900 text-md font-medium mb-2"> Urea: </label>
                                <br />
                                <br />
                                <label htmlFor="creatinina" className="block text-900 text-md font-medium mb-2"> Creatinina:</label>
                                <br />
                                <br />
                                <label htmlFor="acidoUrico" className="block text-900 text-md font-medium mb-2"> Ácido Úrico:</label>
                                <br />
                                <br />
                                <label htmlFor="colesterolTotal" className="block text-900 text-md font-medium mb-2"> Colesterol Total: </label>
                                <br />
                                <br />
                                <label htmlFor="colesterolLdl" className="block text-900 text-md font-medium mb-2"> Colesterol Ldl:</label>
                                <br />
                                <br />
                                <label htmlFor="colesterolHdl" className="block text-900 text-md font-medium mb-2"> Colesterol Hdl: </label>
                                <br />
                                <br />
                                <label htmlFor="trigliceridos" className="block text-900 text-md font-medium mb-2"> Trigliceridos: </label>
                                <br />
                                <br />
                                <label htmlFor="bilirrubina" className="block text-900 text-md font-medium mb-2"> Bilirrubina: </label>
                                <br />
                                <br />
                                <label htmlFor="tgo" className="block text-900 text-md font-medium mb-2"> TGO: </label>
                                <br />
                                <br />
                                <label htmlFor="tgp" className="block text-900 text-md font-medium mb-2"> TGP: </label>
                                <br />
                                <label htmlFor="ggt" className="block text-900 text-md font-medium mb-2"> GGT: </label>
                              </div>
                            </div>
                    </div>
                    <div className="col-12">
                      <Divider layout="vertical" ></Divider>
                    </div>
                    <div className="col-5 align-items-center justify-content-center">

                    <div className="p-fluid">
                                <br />
                                <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2"> Glucosa:</label>
                                <br />
                                <br />
                                <label htmlFor="urea" className="block text-900 text-md font-medium mb-2"> Urea: </label>
                                <br />
                                <br />
                                <label htmlFor="creatinina" className="block text-900 text-md font-medium mb-2"> Creatinina:</label>
                                <br />
                                <br />
                                <label htmlFor="acidoUrico" className="block text-900 text-md font-medium mb-2"> Ácido Úrico:</label>
                                <br />
                                <br />
                                <label htmlFor="colesterolTotal" className="block text-900 text-md font-medium mb-2"> Colesterol Total: </label>
                                <br />
                                <br />
                                <label htmlFor="colesterolLdl" className="block text-900 text-md font-medium mb-2"> Colesterol Ldl:</label>
                                <br />
                                <br />
                                <label htmlFor="colesterolHdl" className="block text-900 text-md font-medium mb-2"> Colesterol Hdl: </label>
                                <br />
                                <br />
                                <label htmlFor="trigliceridos" className="block text-900 text-md font-medium mb-2"> Trigliceridos: </label>
                                <br />
                                <br />
                                <label htmlFor="bilirrubina" className="block text-900 text-md font-medium mb-2"> Bilirrubina: </label>
                                <br />
                                <br />
                                <label htmlFor="tgo" className="block text-900 text-md font-medium mb-2"> TGO: </label>
                                <br />
                                <br />
                                <label htmlFor="tgp" className="block text-900 text-md font-medium mb-2"> TGP: </label>
                                <br />
                                <label htmlFor="ggt" className="block text-900 text-md font-medium mb-2"> GGT: </label>
                              </div>



                      <div className="col-12">
                        <div className="card">
                          <h5>Parámetros Recomendados</h5>
                          <br />
                          <div className="grid">
                            <div className="col-5 flex align-items-right justify-content-right">
                              <div className="p-fluid">
                                <br />
                                <label htmlFor="Rglucosa" className="block text-900 text-md font-medium mb-2"> 10 - 20</label>
                                <br />
                                <br />
                                <label htmlFor="Rurea" className="block text-900 text-md font-medium mb-2"> +16 </label>
                                <br />
                                <br />
                                <label htmlFor="Rcreatinina" className="block text-900 text-md font-medium mb-2"> 0.50 - 1.00</label>
                                <br />
                                <br />
                                <label htmlFor="RacidoUrico" className="block text-900 text-md font-medium mb-2"> 2.5 - 6.2</label>
                                <br />
                                <br />
                                <label htmlFor="RcolesterolTotal" className="block text-900 text-md font-medium mb-2"> 97 - 237 </label>
                                <br />
                                <br />
                                <label htmlFor="RcolesterolLdl" className="block text-900 text-md font-medium mb-2"> 20 - 100</label>
                                <br />
                                <br />
                                <label htmlFor="RcolesterolHdl" className="block text-900 text-md font-medium mb-2"> 40.00 - 60.00 </label>
                                <br />
                                <br />
                                <label htmlFor="Rtrigliceridos" className="block text-900 text-md font-medium mb-2"> 30 - 150 </label>
                                <br />
                                <br />
                                <label htmlFor="RbilirrubinaTotal" className="block text-900 text-md font-medium mb-2"> 0.00 - 1.00 </label>
                                <br />
                                <br />
                                <label htmlFor="Rtgo" className="block text-900 text-md font-medium mb-2"> 5 - 34 </label>
                                <br />
                                <br />
                                <label htmlFor="Rtgp" className="block text-900 text-md font-medium mb-2"> 0 - 55 </label>
                                <br />
                                <label htmlFor="Rggt" className="block text-900 text-md font-medium mb-2"> 12 - 64 </label>
                              </div>
                            </div>
                            <div className="col-1">
                              <Divider layout="vertical"></Divider>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex align-items-center justify-content-center">
                  <Button label="Interpretar Otros Análisis" onChange={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default analisisResult