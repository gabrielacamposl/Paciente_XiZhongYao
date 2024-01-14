import Layout from "@/layout/layout"
import React, { useEffect, useState } from "react";
import { DataView } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Tag } from 'primereact/tag';


const CarritoCompras = () => {

  const [flores, setFlores] = useState([])

  useEffect(() => {
    const datosFlores = [
      
        {
            nombre: 'Concha Nácar',
            descripcion: 'La Crema de Concha Nácar es conocida por sus propiedades regeneradoras y nutritivas para la piel. El extracto de concha nácar es apreciado por sus beneficios para mejorar la elasticidad y suavidad de la piel. Esta crema es ideal para el cuidado diario, proporcionando hidratación y ayudando a mantener una piel saludable y radiante.',
            precio: '45.50',
            categoria: 'Ungüentos',
            status: 'Pocos',
            cantidad:3,
            imagen:  '/images/plantas/conchanacar.jpg',
              
          },
          {
            nombre: 'Crema de Naranja',
            descripcion: 'La Crema de Naranja es una mezcla exquisita de ingredientes que incluye extractos naturales de naranja. Esta crema proporciona una hidratación profunda y deja la piel con un aroma fresco y cítrico. Con propiedades revitalizantes, es perfecta para nutrir la piel y brindarle un aspecto radiante y saludable. ',
            precio: '56.50',
            categoria: 'Ungüentos',
            status: 'Agotado',
            cantidad: 1,
            imagen:  '/images/plantas/naranja.jpg',
              
          }, 
          {
            nombre: 'Aceites Capilares',
            descripcion: ' Los Aceites Capilares son una combinación única de aceites naturales seleccionados para nutrir y fortalecer el cabello. Esta fórmula ha sido diseñada para proporcionar beneficios hidratantes, mejorar la salud del cuero cabelludo y dejar el cabello con un brillo saludable. Un tratamiento capilar indulgente para revitalizar tu melena. ',
            precio: '90.50',
            categoria: 'Aceites',
            cantidad: 2,
            status: 'Disponible',
            imagen:  '/images/plantas/Med2.jpg',
              
          },
    ]
    setFlores(datosFlores)
  }, [])

  const getSeverity = (flor) => {
    switch (flor.status) {
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

  const getTotalPrice = () => {
    let total = 0;
    flores.forEach((flor) => {
      total += parseFloat(flor.precio) * parseInt(flor.cantidad);
    });
    return total.toFixed(2);
  };

  const itemTemplate = (flor) => {

    const incrementar = (flor) => {
      const updatedFlores = flores.map((f) => {
        if (f.nombre === flor.nombre) {
          return { ...f, cantidad: (parseInt(f.cantidad) + 1).toString() };
        }
        return f;
      });
      setFlores(updatedFlores);
    };

    const disminuir = (flor) => {
      const updatedFlores = flores.map((f) => {
        if (f.nombre === flor.nombre) {
          const cantidad = parseInt(f.cantidad) - 1;
          const updatedCantidad = cantidad >= 0 ? cantidad.toString() : f.cantidad;
          if (updatedCantidad === "0") {
            return null; // Return null to remove the card from the list
          }
          return { ...f, cantidad: updatedCantidad };
        }
        return f;
      });
      const filteredFlores = updatedFlores.filter((f) => f !== null);
      setFlores(filteredFlores);
    };

    const eliminar = (flor) => {
      const filteredFlores = flores.filter((f) => f.nombre !== flor.nombre);
      setFlores(filteredFlores);
    };

    return (
        <div className="col-12">
          <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
            <div className="card flex justify-content-center">
              <Image src={flor.imagen} alt="Image" width="100" />
            </div>
            <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                <div className="text-2xl font-bold text-900">{flor.nombre}</div>
                <div className="flex align-items-center">
                  <Tag value={flor.status} severity={getSeverity(flor)}></Tag>
                </div>
                <div className="flex align-items-center gap-3">
                  <Button onClick={() => disminuir(flor)} icon="pi pi-minus" className="p-button-square" severity="warning"></Button>
                  <span className="text-5xl font-semibold">{flor.cantidad}</span>
                  <Button onClick={() => incrementar(flor)} icon="pi pi-plus" className="p-button-square" severity="success"></Button>
                </div>
              </div>
              <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-8">
                <span className="text-5xl font-semibold">${flor.precio}</span>
                <Button onClick={() => eliminar(flor)} icon="pi pi-times" className="p-button-rounded" severity="danger"></Button>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
    return (
      <Layout title="Carrito" description="Compras del usuario hasta el momento">
        <div className="grid">
          <div className="col-12">
            <h1>Carrito de compras</h1>
          </div>
          <div className="col-8">
            <div className="card">
              <DataView value={flores} itemTemplate={itemTemplate} />
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="flex align-items-center">
                <h2>Total: ${getTotalPrice()}</h2>
              </div>
              <div className="flex align-items-left">
                <Button label="Pagar" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  };

export default CarritoCompras