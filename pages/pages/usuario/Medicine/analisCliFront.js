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
import { useRouter } from 'next/router';

const AnalisisClinicos = () => {

    
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    glucosa: "",
    urea: "",
    creatinina: "",
    acidoUrico: "",
    colesterolTotal: "",
    colesterolLdl: "",
    colesterolHdl: "",
    trigliceridos: "",
    bilirrubina: "",
    tgo: "",
    tgp: "",
    ggt: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que el valor ingresado sea numérico
    if (!isNaN(value) || value === "") {
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
      if (formValues[key] === "") {
        setError("Todos los campos son obligatorios.");
        return;
      }
    }

    // Aquí puedes manejar la lógica de envío de datos
    // setLoading(true); // Descomenta si quieres mostrar un estado de carga

    // Ejemplo: Redireccionar a la página analisisResult
    router.push("/pages/usuario/Medicine/analisisResult");
  };

  return (
    <Layout title="Interpretación de Análisis" description="Interpreta los análisis clínicos sanguíneos de los pacientes">
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <h2>Interpretación de Análisis Clínicos</h2>
            <div className="grid">
              <div className="col-5 flex align-items-center justify-content-center">
                <div className="col-12 text-center">
                <Image src={`/images/analisCli.jpg`} alt="Image" width="480" height="750" />
                </div>
              </div>
              <div className="col-1">
              <Divider ></Divider>
              </div>
              <div className="col-5 align-items-center justify-content-left">
                <h2></h2>
                <div className="col-12">
                  <div className="card">
                    <h5>Ingrese los parámetros de tus estudios:</h5>
                    <br />
                    <div className="grid">
                            <div className="col-5 flex align-items-right justify-content-right">
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
                            <div className="col-1">
                              <Divider layout="vertical"></Divider>
                            </div>
                            <div className="col-5 align-items-center justify-content-center">
                              <InputText type="text" name="glucosa" className="p-inputtext-sm" value={formValues.glucosa} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="urea" name="urea" className="p-inputtext-sm" value={formValues.urea} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="creatinina" className="p-inputtext-sm" value={formValues.creatinina} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="acidoUrico" className="p-inputtext-sm" value={formValues.acidoUrico} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="colesterolTotal" className="p-inputtext-sm" value={formValues.colesterolTotal} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="colesterolLdl" className="p-inputtext-sm" value={formValues.colesterolLdl} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="colesterolHdl" className="p-inputtext-sm" value={formValues.colesterolHdl} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="trigliceridos" className="p-inputtext-sm" value={formValues.trigliceridos} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="bilirrubina" className="p-inputtext-sm" value={formValues.bilirrubina} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="tgo" className="p-inputtext-sm" value={formValues.tgo} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="tgp" className="p-inputtext-sm" value={formValues.tgp} onChange={handleChange} />
                              <br />
                              <br />
                              <InputText type="text" name="ggt" className="p-inputtext-sm" value={formValues.ggt} onChange={handleChange} />
                              <br />
                            </div>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex align-items-center justify-content-center">
            <Button label="Interpretar Análisis" onClick={handleSubmit} />
          </div>
          {error && (
            <div className="flex align-items-center justify-content-center text-danger">
              {error}
            </div>
          )}
          {loading && (
            <div className="flex align-items-center justify-content-center">
              Cargando...
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AnalisisClinicos;
