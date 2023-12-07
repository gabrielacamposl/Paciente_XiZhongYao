import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout";
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { Image } from 'primereact/image';
import { DataTable, DataTableExpandedRows, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Messages } from 'primereact/messages';
import { Menu } from 'primereact/menu';
// --> Libreria de cloudinary
//import { Image } from 'cloudinary-react';



const analisisResult = () => {

  const [datosUsuario, setDatosUsuario] = useState({
    Glucosa: '',
    Urea: '',
    Creatinina: '',
    'Ácido Úrico': '',
    'Colesterol Total': '',
    'Colesterol Ldl': '',
    'Colesterol Hdl': '',
    Trigliceridos: '',
    'Bilirrubina Total': '',
    'TGO (Transaminasa Glutámico Oxalacética)': '',
    'TGP (Transaminasa Glutámico Pirúvica)': '',
    'GGT (Gamma-Glutamil Transferasa)': '',
  });

  const parametrosRecomendados = {
    Glucosa: '70 - 100 mg/dL',
    Urea: '10 - 50 mg/dL',
    Creatinina: '0.6 - 1.2 mg/dL',
    'Ácido Úrico': '2.4 - 6.0 mg/dL',
    'Colesterol Total': '125 - 200 mg/dL',
    'Colesterol Ldl': '70 - 130 mg/dL',
    'Colesterol Hdl': '40 - 60 mg/dL',
    Trigliceridos: '50 - 150 mg/dL',
    'Bilirrubina Total': '0.1 - 1.2 mg/dL',
    'TGO (Transaminasa Glutámico Oxalacética)': '8 - 40 U/L',
    'TGP (Transaminasa Glutámico Pirúvica)': '7 - 56 U/L',
    'GGT (Gamma-Glutamil Transferasa)': '8 - 38 U/L',
  };

  const compararConParametros = (analito, valor) => {
    const [min, max] = parametrosRecomendados[analito].split(' - ');
    if (valor < parseFloat(min)) {
      return 'Por debajo';
    } else if (valor > parseFloat(max)) {
      return 'Por arriba';
    } else {
      return 'Normal';
    }
  };

  const obtenerEstiloTexto = (comparacion) => {
    switch (comparacion) {
      case 'Por debajo':
        return { color: 'red' };
      case 'Por arriba':
        return { color: 'red' };
      default:
        return { color: 'blue' };
    }
  };

  
  const rows = Object.keys(parametrosRecomendados).map(analito => ({
    analito,
    parametros: parametrosRecomendados[analito],
    valor: datosUsuario[analito] || '',
    comparacion: compararConParametros(analito, datosUsuario[analito]),
  }));

  const recomendaciones = {
    Glucosa: {
      PorDebajo: 'Recomendación para Glucosa por debajo',
      PorArriba: 'Recomendación para Glucosa por arriba',
    },
    Urea: {
      PorDebajo: 'Recomendación para Urea por debajo',
      PorArriba: 'Recomendación para Urea por arriba',
    },
    // Agrega el resto de analitos y sus recomendaciones
  };

  const obtenerRecomendacion = (analito, comparacion) => {
    return recomendaciones[analito][comparacion];
  };
  

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
                    <h3>Interpretación de los Análisis</h3>
                    <DataTable value={rows} className="mt-3">
                       <Column field="analito" header="Analito" />
                       <Column field="parametros" header="Parámetros Recomendados" />
                       <Column field="valor" header="Datos del Usuario" body={(rowData) => (
                       <input  type="text"  value={rowData.valor} onChange={(e) => {const newValue = e.target.value;
                        setDatosUsuario((prevDatos) => ({ ...prevDatos, [rowData.analito]: newValue }));
                         }} 
                         style={obtenerEstiloTexto(rowData.comparacion)} />
                       )} />
                       <Column field="comparacion" header="Comparación con Parámetros" />
                     </DataTable>
                </div>
            </div>
      </div>
    </Layout>
  );
}

export default analisisResult