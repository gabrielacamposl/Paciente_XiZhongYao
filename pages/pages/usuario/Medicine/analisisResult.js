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
import { useRouter } from 'next/router';
// --> Libreria de cloudinary
//import { Image } from 'cloudinary-react';



const analisisResult = () => {

  const [datosUsuario, setDatosUsuario] = useState({
    Glucosa: '85',
    Urea: '15',
    Creatinina: '0.5',
    'Ácido Úrico': '1.7',
    'Colesterol Total': '200',
    'Colesterol Ldl': '89',
    'Colesterol Hdl': '85',
    Trigliceridos: '77',
    'Bilirrubina Total': '1.3',
    'TGO (Transaminasa Glutámico Oxalacética)': '6',
    'TGP (Transaminasa Glutámico Pirúvica)': '57',
    'GGT (Gamma-Glutamil Transferasa)': '35',
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

  const parametrosRecomendadosRangos = {
    Glucosa: { min: 70, max: 100 },
    Urea: { min: 10, max: 50 },
    Creatinina: { min: 0.6, max: 1.2 },
    'Ácido Úrico': { min: 2.4, max: 6.0 },
    'Colesterol Total': { min: 125, max: 200 },
    'Colesterol Ldl': { min: 70, max: 130 },
    'Colesterol Hdl': { min: 40, max: 60 },
    Trigliceridos: { min: 50, max: 150 },
    'Bilirrubina Total': { min: 0.1, max: 1.2 },
    'TGO (Transaminasa Glutámico Oxalacética)': { min: 8, max: 40 },
    'TGP (Transaminasa Glutámico Pirúvica)': { min: 7, max: 56 },
    'GGT (Gamma-Glutamil Transferasa)': { min: 8, max: 38 },
  };


  const recomendaciones = {
    Glucosa: {
      PorDebajo: 'Té de salvia, té de carqueja o un té de pezuña de vaca.',
      PorArriba: 'En este caso no se recomienda el uso de alguna planta medicinal, pero puede hacer lo siguiente: Beber jugos y  Consumir alimentos. ',
    },
    Urea: {
      PorDebajo: 'Algunas plantas medicinales que pueden ayudar a tratar la urea baja son: Punarnava y Bhumi Amla',
      PorArriba: 'Algunos cambios en el estilo de vida y opciones naturales pueden ayudar a mantener la salud renal en general. Estos pueden incluir: Dieta saludable, hidratación, Algunas hierbas y suplementos, como el diente de león y el cardo mariano.  ',
    },
    Creatinina : {
      PorDebajo: 'Té de ortiga, Infusión de manzanilla o Té de raíz de diente de león. ',
      PorArriba: 'Algunas plantas medicinales que pueden ayudar a aumentar la creatinina son: cola de caballo, diente de león u ortosifón:',
    },
    'Ácido Úrico': {
      PorDebajo: 'Algunos remedios naturales que pueden ayudar a aumentar el ácido úrico son: Consumir alimentos ricos en purinas, beber menos agua y tomar infusiones de plantas que aumentan el ácido úrico.',
      PorArriba: 'Para bajar el ácido úrico de forma natural, existen algunos remedios como consumir alimentos ricos en vitamina C, beber mucha agua, evitar el alcohol y el tabaco y  tomar infusiones de plantas diuréticas.',
    },
    'Colesterol Total': {
      PorDebajo: 'Para aumentar el colesterol total de forma natural, se recomienda consumir alimentos ricos en grasas saludables, como el aceite de oliva, el aguacate, los frutos secos, las semillas y el pescado azul. ',
      PorArriba: 'Para bajar el colesterol total de forma natural, existen algunos remedios caseros, como: tomar infusiones de plantas medicinales con propiedades hipocolesterolemiantes, como la alcachofa, el diente de león, el cardo mariano, la ortiga o el gugul.',
    },
    'Colesterol Ldl': {
      PorDebajo: 'Para reducir los niveles de colesterol LDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son: Beta-glucano y Esteroles y estanoles vegetales.',
      PorArriba: 'Hay varios remedios naturales que pueden ayudar a reducir los niveles de colesterol LDL en sangre. Algunos de ellos son: la cúrcuma, levadura de arroz rojo, fucus vesiculosus y aceite de pescado.',
    },
    'Colesterol Hdl': {
      PorDebajo: 'Para aumentar los niveles de colesterol HDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son: aguacate, nueces, aceite de oliva.',
      PorArriba: 'Para reducir los niveles de colesterol HDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son: Beta-glucano y Esteroles y estanoles vegetales.',
    },
    Trigliceridos: {
      PorDebajo: 'Para subir los niveles de triglicéridos en sangre, es importante seguir una dieta equilibrada y saludable, rica en grasas saludables, como las que se encuentran en el aceite de oliva, el aguacate y los frutos secos. ',
      PorArriba: 'Para reducir los niveles de triglicéridos en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son: Jugo de piña con naranja, agua de avena con canela, jugo de betabel con manzana, aceite de pescado.',
    },
    'Bilirrubina Total': {
      PorDebajo: 'Para subir los niveles de bilirrubina en sangre, es importante seguir una dieta equilibrada y saludable, rica en grasas saludables, como las que se encuentran en el aceite de oliva, el aguacate y los frutos secos.',
      PorArriba: 'Para bajar la bilirrubina alta, existen algunos remedios naturales que pueden ayudar. Algunos de ellos son: Diente de león, alcachofera, cardo mariano, verbena.',
    },
    'TGO (Transaminasa Glutámico Oxalacética)': {
      PorDebajo: 'Algunas recomendaciones naturales, son: tomar 1.	Cardo Mariano, Raíz de Cúrcuma, 	Raíz de Regaliz o 	Grosellero negro.  ',
      PorArriba: 'Existen algunas recomendaciones básicas que pueden ayudar a bajar el TGO alto en la sangre. Algunas plantas medicinales que pueden ayudar a proteger el hígado y a reducir los niveles de TGO en sangre son: Diente de león, alcachofera, cardo mariano, verbena.',
    },
    'TGP (Transaminasa Glutámico Pirúvica)': {
      PorDebajo: 'Algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función. Algunas de ellas son: Diente de león: Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.',
      PorArriba: 'Existen algunas recomendaciones básicas que pueden ayudar a bajar el TGO alto en la sangre. Algunas plantas medicinales que pueden ayudar a proteger el hígado y a reducir los niveles de TGP en sangre son: Diente de león, alcachofera, cardo mariano, verbena.',
    },
    'GGT (Gamma-Glutamil Transferasa)': {
      PorDebajo: 'Algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función. Algunas de ellas son: Diente de león: Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.',
      PorArriba: 'Existen algunas recomendaciones básicas que pueden ayudar a bajar el GGT alto en la sangre. Algunas plantas medicinales que pueden ayudar a proteger el hígado y a reducir los niveles de TGO en sangre son: Diente de león, alcachofera, cardo mariano, verbena.',
    },
  };

  
  const posiblesEnfermedades = {
    Glucosa: {
      PorDebajo: 'Niveles bajos de glucosa pueden estar asociados con hipoglucemia. Consulta a un médico para evaluar la causa.',
      PorArriba: 'Niveles altos de glucosa pueden indicar diabetes. Es importante buscar atención médica para un diagnóstico y tratamiento adecuados.',
    },
    Urea: {
      PorDebajo: 'Bajos niveles de urea pueden relacionarse con problemas renales. Consulta con un nefrólogo para una evaluación más detallada.',
      PorArriba: 'Altos niveles de urea pueden indicar insuficiencia renal u otros problemas renales. Busca atención médica para un diagnóstico preciso.',
    },
    Creatinina: {
      PorDebajo: 'Niveles bajos de creatinina pueden estar asociados con problemas musculares. Consulta con un médico para una evaluación adecuada.',
      PorArriba: 'Altos niveles de creatinina pueden indicar disfunción renal. Busca asesoramiento médico para determinar la causa subyacente.',
    },
    'Ácido Úrico': {
      PorDebajo: 'Niveles bajos de ácido úrico no suelen ser motivo de preocupación. Sin embargo, consulta a un médico si tienes síntomas.',
      PorArriba: 'Altos niveles de ácido úrico pueden estar relacionados con la gota. Consulta a un reumatólogo para un diagnóstico y tratamiento adecuados.',
    },
    'Colesterol Total': {
      PorDebajo: 'Niveles bajos de colesterol total generalmente no son problemáticos. Consulta a un médico si tienes preocupaciones.',
      PorArriba: 'Altos niveles de colesterol total pueden aumentar el riesgo de enfermedad cardíaca. Busca asesoramiento médico para estrategias de gestión.',
    },
    'Colesterol Ldl': {
      PorDebajo: 'Niveles bajos de colesterol LDL suelen ser beneficiosos. Sin embargo, es esencial consultar a un médico para una evaluación completa.',
      PorArriba: 'Altos niveles de colesterol LDL pueden aumentar el riesgo de enfermedad cardíaca. Busca orientación médica para estrategias de control.',
    },
    'Colesterol Hdl': {
      PorDebajo: 'Niveles bajos de colesterol HDL pueden aumentar el riesgo de enfermedad cardíaca. Consulta a un médico para estrategias de aumento.',
      PorArriba: 'Niveles altos de colesterol HDL suelen ser beneficiosos. Sin embargo, es esencial hablar con un médico para una evaluación completa.',
    },
    Trigliceridos: {
      PorDebajo: 'Niveles bajos de triglicéridos generalmente no son problemáticos. Consulta a un médico si tienes inquietudes.',
      PorArriba: 'Altos niveles de triglicéridos pueden aumentar el riesgo de enfermedad cardíaca. Busca orientación médica para estrategias de control.',
    },
    'Bilirrubina Total': {
      PorDebajo: 'Niveles bajos de bilirrubina total generalmente no son motivo de preocupación. Consulta a un médico si tienes síntomas.',
      PorArriba: 'Altos niveles de bilirrubina total pueden indicar problemas hepáticos. Busca atención médica para un diagnóstico preciso.',
    },
    'TGO (Transaminasa Glutámico Oxalacética)': {
      PorDebajo: 'Niveles bajos de TGO generalmente no son problemáticos. Consulta a un médico si hay síntomas inusuales.',
      PorArriba: 'Altos niveles de TGO pueden indicar daño hepático. Busca atención médica para un diagnóstico y tratamiento adecuados.',
    },
    'TGP (Transaminasa Glutámico Pirúvica)': {
      PorDebajo: 'Niveles bajos de TGP generalmente no son motivo de preocupación. Consulta a un médico si tienes inquietudes sobre la salud hepática.',
      PorArriba: 'Altos niveles de TGP pueden indicar daño hepático. Busca atención médica para un diagnóstico y manejo adecuados.',
    },
    'GGT (Gamma-Glutamil Transferasa)': {
      PorDebajo: 'Niveles bajos de GGT generalmente no son motivo de preocupación. Consulta a un médico si hay síntomas hepáticos.',
      PorArriba: 'Altos niveles de GGT pueden indicar daño hepático. Busca atención médica para un diagnóstico y manejo adecuados.',
    },
  };
  

  const obtenerRecomendacion = (analito, comparacion) => {
    const recomendacion = recomendaciones[analito];
    if (recomendacion) {
        if (comparacion === 'Por debajo') {
            return recomendacion.PorDebajo;
        } else if (comparacion === 'Por arriba') {
            return recomendacion.PorArriba;
        } else if (comparacion === 'Normal') {
            return "Sus niveles están bien";
        }
    }

    // En caso de que no haya recomendaciones específicas para el analito
    return `Recomendación para ${analito} no disponible`;
};

const obtenerEnfermedades = (analito, comparacion) => {
  const enfermedad = posiblesEnfermedades[analito];

  if (enfermedad) {
    if (comparacion === 'Por debajo') {
        return enfermedad.PorDebajo;
    } else if (comparacion === 'Por arriba') {
        return enfermedad.PorArriba;
    } else if (comparacion === 'Normal') {
        return "Sus niveles están bien";
    }
} 
// En caso de que no haya recomendaciones específicas para el analito
  return `No tiene alguna posible enfermedad.`;
};

  const rows = Object.keys(parametrosRecomendados).map(analito => ({
    analito,
    parametros: parametrosRecomendados[analito],
    valor: datosUsuario[analito] || '',
    comparacion: compararConParametros(analito, datosUsuario[analito]),
    recomendacion: obtenerRecomendacion(analito, compararConParametros(analito, datosUsuario[analito])),
    enfermedad: obtenerEnfermedades (analito, compararConParametros(analito, datosUsuario[analito]) ),
  }));

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
              <Column
                field="valor"
                header="Datos del Usuario"
                body={(rowData) => (
                  <span style={obtenerEstiloTexto(rowData.comparacion)}>
                    {datosUsuario[rowData.analito]}
                  </span>
                )}
              />
              
              <Column field="comparacion" header="Comparación con Parámetros" />
              <Column field="recomendacion" header="Recomendación" />
              <Column field="enfermedad" header="Posibles Enfermedades" />
            </DataTable>
            <div>
            
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default analisisResult