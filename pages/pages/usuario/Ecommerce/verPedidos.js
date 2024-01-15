import Layout from "@/layout/layout"
import React, { useEffect, useState } from "react";
import { DataView } from 'primereact/dataview';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { Divider } from 'primereact/divider';
const MisCompras = () => {

  const router = useRouter();
  const [Ordenes, setOrden] = useState([])

  useEffect(() => {
    const datosOrden = [
    
      {
        Npedido: "154", precio: 249.50, fecha:"14/01/2024",
        productos: [
          {nombre: "Concha Nacar",
          cantidad:"3",
          total:"$45.50",
          imagen:"https://i.pinimg.com/736x/1c/ae/83/1cae834f02d5283f8929128cb336a58a.jpg"},
          {nombre: "Crema_de_Naraja",
          cantidad:"2",
          total:"$56.50",
          imagen:"https://i.pinimg.com/736x/02/73/0b/02730b5883265031ecc8c5945984e7d4.jpg"},
        ]
      },
     
    ]
    setOrden(datosOrden)
  }, [])



  const productoTemplate = (producto) => (
    <div className="col-12">

    <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4 ">
      <img className="w-9 sm:w-16rem xl:w-10rem  border-round" src={producto.imagen} />

      <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-5">
        <div className="flex flex-column align-items-center sm:align-items-start ">
          <div className="">Producto: {producto.nombre}</div>
          <span className="">Total: {producto.total}</span>
          <span className="">Cantidad: {producto.cantidad}</span>

          </div>
          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
            </div>
      </div>
    </div>
  </div>

  );




  const itemTemplate = (datosOrden) => { 




    return (
        <div className="col-12">
          <div className="shadow-2">
          <div className="col-12 flex">
          <div className="col-2" ><span className="text-xl font-semibold  ">Pedido: {datosOrden.Npedido}</span> </div>
          <Divider layout="vertical" />
          <div className="col-2" ><span className="text-xl font-semibold ">Fecha de Orden: {datosOrden.fecha}</span> </div>
          <Divider layout="vertical" />
          <div className="col-3" ><span className="text-xl font-semibold ">Total de compra: ${datosOrden.precio}</span> </div>
          <Divider layout="vertical" />
          {/** MODIFICAR PARA HACERLO ENTREGADOOOO */}
          <div className="col-3 text-xl font-semibold "><span style={{ color: 'green'}}>Entregado {datosOrden.fechaEntrega} </span> </div>

        </div>
        <DataView value={datosOrden.productos} itemTemplate={productoTemplate} />

        </div>
        <div className="mb-3"></div>
      </div>
    );
  };

  return (
    <Layout
      title="Compras"
      description="Compras del usuario hasta el momento"
    >
      <div className="grid overflow-hidden">
        <div className="col-12">
          <h1>Historial</h1>
        </div>
        <div className="col-12">
          <div className="">
            <DataView value={Ordenes} itemTemplate={itemTemplate} />
          </div>
        </div>

      </div>
    </Layout>
  )
}


export default MisCompras