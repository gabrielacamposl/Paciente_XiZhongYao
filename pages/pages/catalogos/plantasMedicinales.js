import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout"
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Carousel } from 'primereact/carousel';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { mostrarMedicinaNatural } from "@/components/mensajesNotificaciones/links";
import { Toast } from 'primereact/toast';
import { agregarProducto } from "@/components/mensajesNotificaciones/links";
import {
  carritoadd
} from '@/components/mensajesNotificaciones/mensajes';
import { Rating } from 'primereact/rating';
// --> Libreria de cloudinary
import { Image } from 'cloudinary-react'



const CatalogoFlores = () => {
  //----------------| Lista de variables |----------------
  const [plantas, setPlantas] = useState([])
  const [layout, setLayout] = useState('grid');
  //-->Detalles de flor
  const [detallesPlanta, setDetallesPlanta] = useState({
    nombreProducto: '',
    descripcionProducto: '',
    precioProducto: '',
    categoriaProducto: '',
    statusProducto: '',
    imagenProducto: '',

  })
  const [mostrarDialog, setMostrarDialog] = useState(false)
  //--> Buscador
  const [buscador, setBuscador] = useState('')


  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log(token)
    console.log(mostrarMedicinaNatural)
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    console.log(cabecera)
    axios.get(mostrarMedicinaNatural, cabecera).then(res => {
      console.log(res)
      
      setPlantas(res.data.productos)
    })
  }, [])

  //--> Indicar estado de la flor
  const getSeverity = (planta) => {
    switch (planta.statusProducto) {
      case 'Disponible':
        return 'success';

      case 'Pocos':
        return 'warning';

      case 'Agotado':
        return 'danger';

      default:
        return null;
    }
  };
  //-->Toast
  const toast = useRef(null);


  //-->Carrito de Compras 
  const AgregarCarrito = async (planta) => {
    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const respuesta = await axios.post(agregarProducto, { nombreProducto: planta.nombreProducto }, cabecera)
      if (respuesta.status === 200) {
        if (toast.current) {
          toast.current.show({
            severity: 'success',
            summary: 'Se añadió al carrito.',
            detail: carritoadd,
            life: 3000,
          });
        }
      }
    } catch (error) {
      if (toast.current) {
        toast.current.show({
          severity: 'warn',
          summary: 'Atención',
          detail: error.response.data.msg,
          life: 3000,
        });
      }
    }
  }

 
  //--> Modo de vista: lista
  const listItem = (planta) => {
    return (
      <div className="col-12">
        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
          <Image
            cloudName="dluhoni1n" publicId={planta.imagenProducto}
            className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
            style={{ width: '200px', height: '200px' }}
          />
          <div
            className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
          >
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{planta.nombreProducto}</div>
              <div className="flex align-items-center gap-3">
                <Tag value={planta.statusProducto} severity={getSeverity(planta)}></Tag>
                <span className="flex align-items-center gap-2">
                  <i className="pi pi-tag"></i>
                  <span className="font-semibold">{planta.categoriaProducto}</span>
                </span>
              </div>
                <span className="text-2xl font-semibold mt-8">${planta.precioProducto}</span>
           
            </div>

            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 mt-6">
              
              <Button label="Agregar" icon="pi pi-shopping-cart" className="font-light ml-2 " severity="success" disabled={planta.estatusProducto === 'Agotado'} onClick={() => { AgregarCarrito(planta) }} />
              <Toast ref={toast} />
              <Button label="Detalles" icon="pi pi-external-link" className="p-button-rounded"
                onClick={() => dialogoPlanta(planta)} />
            </div>

          </div>
        </div>
      </div>
    );
  };

  //--> Modo de vista: grid
  const gridItem = (planta) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">

          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{planta.categoriaProducto}</span>
            </div>
            <Tag value={planta.statusProducto} severity={getSeverity(planta)}></Tag>
          </div>

          <div className="flex flex-column align-items-center gap-3 py-5">
            <Image
              cloudName="dluhoni1n" publicId={planta.imagenProducto}
              style={{ width: '200px', height: '200px' }}
            />
            <div className="text-2xl font-bold">{planta.nombreProducto}</div>       
              <span className="text-2xl font-bold">${planta.precioProducto}</span>
          </div>
          <div className="flex align-items-center justify-content-between">
            <Button label="Detalles" icon="pi pi-search" className=" font-light ml-2" onClick={() => dialogoPlanta(planta)} />
            <Button label="Agregar" icon="pi pi-shopping-cart" className="font-light ml-2 " severity="success" disabled={planta.estatus === 'Agotado'} onClick={() => { AgregarCarrito(planta) }} />
            <Toast ref={toast} />
          </div>

        </div>
      </div>
    );
  };

  const handleBuscadorChange = (e) => {
    setBuscador(e.target.value);
  };

  // Filtrar productos basados en el buscador
  useEffect(() => {
    const filtrarProductos = () => {
      let floresFiltradas = [...plantas];
      if (buscador) {
        floresFiltradas = floresFiltradas.filter(
          (flor) =>
            flor.nombreProducto.toLowerCase().includes(buscador.toLowerCase()) ||
            flor.precioProducto.toString().includes(buscador)
        );
      }
      setPlantas(floresFiltradas);
    };

    filtrarProductos();
  }, [buscador]);

  //--> Cambiar modo de vista
  const itemTemplate = (planta, layout) => {
    if (!planta) { return }

    if (layout === 'list') return listItem(planta);
    else if (layout === 'grid') return gridItem(planta);
  };

  const iniciarBusqueda = () => {
    let floresFiltradas
    floresFiltradas = plantas.filter(planta => buscador == planta.nombreProducto)
    if (floresFiltradas.length === 0) { floresFiltradas = plantas.filter(flor => buscador === flor.categoriaProducto) }
    if (floresFiltradas.length === 0) { floresFiltradas = plantas.filter(flor => buscador === flor.statusProducto) }
    if (floresFiltradas.length === 0) { floresFiltradas = plantas.filter(flor => buscador == flor.precioProducto) }
    setPlantas(floresFiltradas)
  }

  const limpiarBusqueda = () => {
    setBuscador("")
    axios.get(mostrarMedicinaNatural).then(res => { console.log(res.data.productos); setPlantas(res.data.productos) })
  }

  //--> Barra para cambiar modo de vista
  const header = () => {
    return (
      <div className="flex justify-content-between">
        <div className="p-inputgroup w-4">
          <Button icon="pi pi-search" onClick={iniciarBusqueda} />
          <InputText
            placeholder="Buscar por nombre o precio"
            value={buscador}
            onChange={handleBuscadorChange}
          />
          <Button
            icon="pi pi-times"
            onClick={limpiarBusqueda}
            disabled={buscador ? false : true}
          />
        </div>

        <DataViewLayoutOptions
          layout={layout}
          onChange={(e) => setLayout(e.value)}
        />
      </div>
    );
  };

  //----------------| Funciones para dialogo |----------------
  const dialogoPlanta = (planta) => {
    setMostrarDialog(true)
    setDetallesPlanta(planta)
  }

  const cerrarDialogo = () => {
    setMostrarDialog(false)
    // setDetallesFlor({})
  }

  const botonesDialogo = (
    <><Button label="Cerrar" icon="pi pi-times" onClick={cerrarDialogo} className="p-button-text" /></>
  )
  //----------------| Imagenes de dialogo |----------------
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const plantillaImagenes = (productos) => {
    return (
      <div className="flex justify-content-center">
        <div className="mb-3">
          <Image
            cloudName="dluhoni1n" publicId={productos}
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      </div>
    );
  };

  //----------------| Valor que regresara |----------------
  return (
    <Layout
      title="Medicina Natural"
      description="Acceso al catálogo de flores"
    >
      <div className="grid">
        <div className="col-12">
          <div className="card">

            <h5>Medicina Natural</h5>
            <DataView value={plantas} itemTemplate={itemTemplate} layout={layout} header={header()} />

              <Dialog
                header={`Detalles de ${detallesPlanta.nombreProducto}`}
                visible={mostrarDialog} onHide={cerrarDialogo}
                footer={botonesDialogo} style={{ width: '46vw' }}
              >
              <div className="flex justify-content-center">
              {/* <Image style={{ borderRadius: '50%' }} src={detallesPlanta.imagenProducto} alt={detallesPlanta.nombreProducto} className="h-10rem w-10rem border-rounded" itemTemplate={plantillaImagenes} /> */}
                {/* <img
                  value={detallesPlanta.imagenProducto} itemTemplate={plantillaImagenes} /> */}
              </div>
              <div className="mt-5">
                <p className="my-2"><span className="font-semibold text-lg">Nombre: </span>{detallesPlanta.nombreProducto}</p>
                <p className="my-2"><span className="font-semibold text-lg">Precio: </span>${detallesPlanta.precioProducto}</p>
                <p className="my-2"><span className="font-semibold text-lg">Categoría: </span>{detallesPlanta.categoriaProducto}</p>
                <p className="my-2"><span className="font-semibold text-lg">Estatus: </span>{detallesPlanta.statusProducto}</p>
                <p className="my-2"><span className="font-semibold text-lg">Descripción: </span>{detallesPlanta.descrProducto}</p>
              </div>
            </Dialog>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CatalogoFlores