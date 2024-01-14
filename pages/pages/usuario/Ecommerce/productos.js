import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout"
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
 import { Rating } from 'primereact/rating';

const CatalogoFlores = () => {
  //----------------| Lista de variables |----------------
  const [flores, setFlores] = useState([])
  const [layout, setLayout] = useState('grid');
  //-->Detalles de flor
  const [detallesFlor, setDetallesFlor] = useState({})
  const [mostrarDialog, setMostrarDialog] = useState(false)
  //--> Buscador
  const [buscador, setBuscador] = useState('')
  //--> Ejecucion en segundo plano
    const datosFlores = [
  
      {
          nombre: 'Hierbabuena',
          descripcion: 'La hierbabuena es una planta aromática conocida por su fresco y agradable aroma a menta. Se utiliza comúnmente en la medicina tradicional para aliviar trastornos digestivos, como indigestión y gases. También se le atribuyen propiedades calmantes para el sistema nervioso, ayudando a reducir el estrés y la ansiedad. Puede consumirse en forma de infusión o aceite esencial.',
          precio: '19.99',
          categoria: 'Flores Frescas',
          status: 'Disponible',
          imagen:  'https://media.admagazine.com/photos/61e0e4139b19d943aa117a9a/master/w_1600%2Cc_limit/Hierbabuena%2520planta.jpg'
      },
      {
          nombre: 'Tomillo',
          descripcion: 'El tomillo es una planta herbácea con hojas pequeñas y fragantes. Contiene compuestos con propiedades antibacterianas y antifúngicas, por lo que se ha utilizado tradicionalmente para tratar infecciones respiratorias, como la tos y el resfriado común.',
          precio: '24.50',
          categoria: 'Aceites',
          status: 'Pocos',
          imagen:  'https://www.sorianatural.es/storage/img/F0000009195_sn_extracto_tomillo_xxi.jpg',
            
        },
        {
          nombre: 'Serpol',
          descripcion: 'El serpol, también conocido como tomillo silvestre, es una planta de la familia del tomillo. Se ha utilizado en la medicina popular por sus propiedades antisépticas y expectorantes. Se cree que el serpol es beneficioso para aliviar afecciones respiratorias, como la bronquitis y la tos. ',
          precio: '12.99',
          categoria: 'Flores Frescas',
          status: 'Agotado',
          imagen:  'https://d3gr7hv60ouvr1.cloudfront.net/CACHE/images/products/46e74adc63ae478d98c6dfa49af38c6e/c0836d6d34d9a9f6f936acc83cd28b93.jpg',
            
        }, 
        {
          nombre: 'Aceite Anticaída',
          descripcion: 'Este Aceite Anticaída ha sido cuidadosamente elaborado con hierbas seleccionadas por sus propiedades fortalecedoras para el cabello. La fórmula contiene ingredientes naturales que nutren el cuero cabelludo y ayudan a reducir la caída del cabello. Además, el aceite proporciona un aroma refrescante y revitalizante, convirtiendo su uso en una experiencia sensorial.',
          precio: '68.00',
          categoria: 'Aceites',
          status: 'Disponible',
          imagen:  '/images/plantas/anticaida.jpg'
      },
      {
          nombre: 'Concha Nácar',
          descripcion: 'La Crema de Concha Nácar es conocida por sus propiedades regeneradoras y nutritivas para la piel. El extracto de concha nácar es apreciado por sus beneficios para mejorar la elasticidad y suavidad de la piel. Esta crema es ideal para el cuidado diario, proporcionando hidratación y ayudando a mantener una piel saludable y radiante.',
          precio: '45.50',
          categoria: 'Ungüentos',
          status: 'Pocos',
          imagen:  '/images/plantas/conchanacar.jpg',
            
        },
        {
          nombre: 'Crema de Naranja',
          descripcion: 'La Crema de Naranja es una mezcla exquisita de ingredientes que incluye extractos naturales de naranja. Esta crema proporciona una hidratación profunda y deja la piel con un aroma fresco y cítrico. Con propiedades revitalizantes, es perfecta para nutrir la piel y brindarle un aspecto radiante y saludable. ',
          precio: '56.50',
          categoria: 'Ungüentos',
          status: 'Agotado',
          imagen:  '/images/plantas/naranja.jpg',
            
        }, 
        {
          nombre: 'Crema para Piel Grasa',
          descripcion: 'La Crema para Piel Grasa es una solución equilibrada diseñada específicamente para abordar las necesidades de la piel propensa a la grasa. Formulada con ingredientes naturales, esta crema ayuda a controlar el exceso de grasa, al tiempo que proporciona la hidratación necesaria. Su textura ligera deja la piel fresca y matificada. ',
          precio: '48.00',
          categoria: 'Ungüentos',
          status: 'Disponible',
          imagen:  '/images/plantas/pielgrasa.jpg',
            
        },
        {
          nombre: 'Pomada de Romero',
          descripcion: 'La Pomada de Romero es una opción efectiva para el cuidado de la piel con propiedades calmantes y tonificantes. El romero, conocido por sus beneficios para la piel, se ha incorporado a esta pomada para ayudar a aliviar molestias cutáneas y promover una apariencia saludable. Ideal para el uso diario.',
          precio: '25.00',
          categoria: 'Ungüentos',
          status: 'Agotado',
          imagen:  '/images/plantas/romero.jpg',
            
        },
        {
          nombre: 'Hierbas para Piel Grasa',
          descripcion: 'Estas Hierbas para Piel Grasa ofrecen una solución natural para el cuidado facial. La combinación de hierbas seleccionadas ayuda a equilibrar la producción de grasa, purificar la piel y prevenir imperfecciones. Disfruta de una piel fresca y revitalizada con estas hierbas cuidadosamente preparadas. ',
          precio: '15.00',
          categoria: 'Flores Frescas',
          status: 'Disponible',
          imagen:  '/images/plantas/romero2.jpg',
            
        },
        {
          nombre: 'Manzanilla Homeopata',
          descripcion: 'La Manzanilla Homeopática es reconocida por sus propiedades calmantes y su uso tradicional en la homeopatía. Esta fórmula ha sido elaborada con extractos de manzanilla para proporcionar alivio natural a diversas afecciones, desde molestias leves hasta situaciones de estrés. Ideal para quienes buscan opciones homeopáticas.',
          precio: '163.50',
          categoria: 'Homeopatía',
          status: 'Pocos',
          imagen:  '/images/plantas/Med1.jpg',
            
        },
        {
          nombre: 'Aceites Capilares',
          descripcion: ' Los Aceites Capilares son una combinación única de aceites naturales seleccionados para nutrir y fortalecer el cabello. Esta fórmula ha sido diseñada para proporcionar beneficios hidratantes, mejorar la salud del cuero cabelludo y dejar el cabello con un brillo saludable. Un tratamiento capilar indulgente para revitalizar tu melena. ',
          precio: '90.50',
          categoria: 'Aceites',
          status: 'Disponible',
          imagen:  '/images/plantas/Med2.jpg',
            
        },
    

    ]
  useEffect(() => { setFlores(datosFlores) }, [])
  //--> Indicar estado de la flor
  
  const getSeverity = (flor) => {
    switch (flor.status) {
      case 'disponible':
        return 'success';
      case 'pocos':
        return 'warning';
      case 'agotado':
        return 'danger';
      default:
        return null;
    }
  };
  //--> Modo de vista: lista
  const listItem = (flor) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${flor.imagen}`} alt={`${flor.nombre}`} style={{ width: '200px', height: '200px' }} />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{flor.nombre}</div>
              {/* <Rating value={flor.rating} readOnly cancel={false}></Rating> */}
              <div className="flex align-items-center gap-3">
                <Tag value={flor.status} severity={getSeverity(flor)}></Tag>
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{flor.categoria}</span>
                </span>
              </div>
              <span className="text-2xl font-semibold mt-8">${flor.precio}</span>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 mt-6">
            
              <Button label="Agregar" icon="pi pi-shopping-cart" className="p-button-rounded"
                disabled={flor.status === 'agotado'} />
              <Button label="Detalles" icon="pi pi-external-link" className="p-button-rounded"
                onClick={() => dialogoFlor(flor)} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  //--> Modo de vista: grid
  const gridItem = (flor) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{flor.categoria}</span>
            </div>
            <Tag value={flor.status} severity={getSeverity(flor)}></Tag>
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img className="shadow-2 border-round" src={`${flor.imagen}`} alt={`${flor.nombre}`} style={{ width: '200px', height: '200px' }} />
            <div className="text-2xl font-bold">{flor.nombre}</div>
            <span className="text-2xl font-bold">${flor.precio}</span>
            {/* <Rating value={flor.rating} readOnly cancel={false}></Rating> */}
          </div>
          <div className="flex align-items-center justify-content-between">
        
            <Button label="Detalles" icon="pi pi-search" className=" font-light ml-2" onClick={() => dialogoFlor(flor)} />
            <Button label="Agregar" icon="pi pi-shopping-cart" className="font-light ml-2 " disabled={flor.status === 'agotado'}></Button>
          </div>
        </div>
      </div>
    );
  };
  //--> Cambiar modo de vista
  const itemTemplate = (flor, layout) => {
    if (!flor) { return }
    if (layout === 'list') return listItem(flor);
    else if (layout === 'grid') return gridItem(flor);
  };
  const iniciarBusqueda = () => {
    let floresFiltradas
    floresFiltradas = datosFlores.filter(flor => buscador == flor.nombre)
    if (floresFiltradas.length === 0) { floresFiltradas = datosFlores.filter(flor => buscador === flor.categoria) }
    if (floresFiltradas.length === 0) { floresFiltradas = datosFlores.filter(flor => buscador === flor.status) }
    if (floresFiltradas.length === 0) { floresFiltradas = datosFlores.filter(flor => buscador == flor.precio) }
    setFlores(floresFiltradas)
  }

  const limpiarBusqueda = () => {
    setBuscador("")
    setFlores(datosFlores)
  }
  //--> Barra para cambiar modo de vista
  const header = () => {
    return (
      <div className="flex justify-content-between">
        <div className="p-inputgroup w-4">
          <Button icon="pi pi-search" onClick={iniciarBusqueda} />
          <InputText placeholder="Buscar por categoria" value={buscador} onChange={e => setBuscador(e.target.value)} />
          <Button icon="pi pi-times" onClick={limpiarBusqueda} disabled={buscador ? false : true} />
        </div>
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>
    );
  };
  //----------------| Funciones para dialogo |----------------
  const dialogoFlor = (flor) => {
    setMostrarDialog(true)
    setDetallesFlor(flor)
  }
  const cerrarDialogo = () => {
    setMostrarDialog(false)
    setDetallesFlor({})
  }
  const botonesDialogo = (
    <><Button label="Cerrar" icon="pi pi-times" onClick={cerrarDialogo} className="p-button-text" /></>
  )
  //----------------| Valor que regresara |----------------
  return (
    <Layout
      title="Productos Naturales"
      description="Acceso al catalogo de flores"
    >
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <h5>Productos Naturales</h5>
            <DataView value={flores} itemTemplate={itemTemplate} layout={layout} header={header()} />
            <Dialog
              header={`Detalles de ${detallesFlor.nombre}`}
              visible={mostrarDialog} onHide={cerrarDialogo}
              footer={botonesDialogo} style={{ width: '35vw' }}
            >
              <div className="flex justify-content-center">
                <img src={detallesFlor.imagen} style={{ width: '200px', height: '200px' }} />
              </div>
              <div className="mt-5">
                <p className="my-2"><span className="font-semibold text-lg">Nombre: </span>{detallesFlor.nombre}</p>
                <p className="my-2"><span className="font-semibold text-lg">Precio: </span>${detallesFlor.precio}</p>
                <p className="my-2"><span className="font-semibold text-lg">Categoria: </span>{detallesFlor.categoria}</p>
                <p className="my-2"><span className="font-semibold text-lg">Estatus: </span>{detallesFlor.status}</p>
                <p className="my-2"><span className="font-semibold text-lg">Descripcion: </span>{detallesFlor.descripcion}</p>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default CatalogoFlores