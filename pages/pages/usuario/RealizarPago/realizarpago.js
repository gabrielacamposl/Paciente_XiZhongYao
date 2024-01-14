import React, { useState, useEffect, useRef } from 'react'
import Layout from '@/layout/layout'
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import 'primeicons/primeicons.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RegistrarTarjeta from '../RealizarPago/CrearTarjetas';
import RegistrarDir from '../RealizarPago/CrearDir';
import { Toast } from 'primereact/toast';
import { Image } from 'cloudinary-react'
import axios from "axios";
import { consultarDir, consultarTarjeta, obtenerPedido, quitarPedido, pagarPedido } from "@/components/mensajesNotificaciones/links";


const RealizarPago = () => {

  const router = useRouter();
  // const IrCarrito = () => {
  //   //--> Redireccionar
  //   router.push('/pages/usuario/carrito')
  // }

  const [tarjeta, setTarjeta] = useState(0)
  const [direccion, setDireccion] = useState(0)
  const [tarjetas, setTarjetas] = useState([])
  const [direcciones, setDirecciones] = useState([])
  const [per, setPedido] = useState([])
  const [productos, setProductos] = useState([])
  const [costo, setcostoArticulos] = useState('')
  const [envio, setEnvio] = useState('')
  const [total, setTotal] = useState('')
  const [nombre, setNombre] = useState('')
  const [dia, setDia] = useState('')
  const [date, setDate] = useState(null);

  const [displayBasic, setDisplayBasic] = useState(false);
  const [displaycard, setDisplaycard] = useState(false);
  const [displayadd, setDisplayadd] = useState(false);

  const toast = useRef(null);

  const consultarCard = async () => {
    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const respuesta = await axios.get(consultarTarjeta, cabecera)
      if (respuesta.status === 200) {
        setTarjetas(respuesta.data)
        console.log(respuesta.data[0].numTarjeta)
      }
    } catch (error) {
      if (toast.current) {
        toast.current.show({
          severity: 'info',
          summary: 'Información',
          detail: error.response.data.msg,
          life: 3000,
        });
      }
    }
  }



  const consultarPedido = async () => {
    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {
      const respuesta = await axios.get(obtenerPedido, cabecera)
      if (respuesta.status === 200) {
        setPedido(respuesta.data)
        setProductos(respuesta.data.pedido.detallesPedido)
        setcostoArticulos(respuesta.data.pedido.costoArticulos)
      //  setEnvio(respuesta.data.pedido.costoEnvio)
        setDia(respuesta.data.pedido.fechaEntrega)
        setTotal(respuesta.data.pedido.costoTotal)
        setNombre(respuesta.data.pedido.nombrePedido)
        console.log(respuesta.data)


      }
    } catch (error) {
      if (toast.current) {
        toast.current.show({
          severity: 'info',
          summary: 'Información',
          detail: error.response.data.msg,
          life: 3000,
        });
      }
    }
  }


  const eliminarPedido = async () => {
    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    try {

      await axios.post(quitarPedido, { nombrePedido: per.pedido.nombrePedido }, cabecera)

      setTimeout(() => {
        router.push('/pages/usuario/carrito')
      }, 10);

    } catch (error) {
      if (toast.current) {
        toast.current.show({
          severity: 'info',
          summary: 'Información',
          detail: error.response.data.msg,
          life: 3000,
        });
      }
    }
  }


  function buscarIndiceTarjeta(valorTarjeta) {
    const [numTarjeta, fechaVencimiento] = valorTarjeta.split(',');
    const indice = tarjetas.findIndex(
      (direccion) =>
        direccion.numTarjeta === numTarjeta &&
        direccion.fechaVencimiento === fechaVencimiento
    );
    return indice;
  }



  const Pagar = async () => {
    if (tarjeta === 0 || selectedDate === '') {
      // Al menos uno de los campos no está seleccionado
      // Puedes mostrar una notificación o realizar alguna acción
      toast.current?.show({
        severity: 'info',
        summary: 'Información',
        detail: "Todos los campos son obligatorios.",
        life: 3000,
      });
      return;
    }

    //const dirFinal = direcciones[buscarIndiceDireccion(direccion)] //Se obtiene objeto de la dirección seleccionada
    const cardFinal = tarjetas[buscarIndiceTarjeta(tarjeta)]
    // console.log(dia)

    const objetoEnviar = {
      nombrePedido: nombre,
      metodoPago: 'Tarjeta de débito o crédito.',
      fechaEntrega: date,
      tarjetaPedido: {
        numTarjeta_P: cardFinal.numTarjeta,
        fechaVencimiento_P: cardFinal.fechaVencimiento,
        cvv_P: cardFinal.cvv

      }
    }


    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    console.log("Pagando...")
    try {
      const respuesta = await axios.post(pagarPedido, objetoEnviar, cabecera)
      if (respuesta.status === 200) {
        // router.push('/pages/dashboard')
        toast.current.show({ severity: 'success', summary: 'Pago exitoso.', detail: respuesta.data.msg, life: 3000, });
        setTimeout(() => {
          router.push('/pages/usuario/compras')
        }, 3000);
    
      }
    } catch (error) { toast.current.show({ severity: 'info', summary: 'Información', detail: error.response.data.msg, life: 3000, }) }
  };


  useEffect(() => {
    consultarCard()
  }, [displaycard])
  useEffect(() => {
    // Función que se ejecuta al acceder a la página
    consultarPedido()
  }, []);


  /*VARIABLES PARA DETERMINAR LA FECHA DE ENTREGA */
  const today = new Date(); // Obtener la fecha actual
  //-->DETERMINAR LA FECHA DE ENTREGA


  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 3);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedMaxDate = maxDate.toLocaleDateString('es-ES', options).replace(/\//g, '-');


  const onClick = () => {
    setDisplayBasic(true);

  };
  const onClick2 = () => {
    setDisplaycard(true);

  };

  const onHide = () => {
    setDisplayBasic(false);

  };

  const onHide2 = () => {
    setDisplaycard(false);

  };


 /* const productTemplate = (temporada) => {
    return (
      <div className=" surface-border border-round m-1 text-center py-5 ">
        <div className="">
          <h5>{temporada.producto_P}</h5>
          {
            <Image
              cloudName="dp6uo7fsz" publicId={temporada.img_P}
              className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
              style={{ width: '200px', height: '200px' }}
            />
          }
          <h6>Cantidad:{temporada.cantidad_P}</h6>
          <h6>Total Parcial: {temporada.totalParcial_P}</h6>
        </div>
        <div>


        </div>
      </div>
    );
  };*/

  /*La variable SelectedDate determina la fecha elegida */
  const [selectedDate, setSelectedDate] = useState(formattedMaxDate);

  const onDateSelect = (e) => {
    const selectedValue = e.value ? formatDate(e.value) : '';
    setSelectedDate(selectedValue);
    setDate(e.value);
  };

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  }
  const [ingredient, setIngredient] = useState('Date');

  const renderFooter = () => {
    return (
      <div className="dialog-footer">
        <Button label="Cerrar" onClick={onHide} />
      </div>
    );
  };

  const renderFooter2 = () => {
    return (
      <div className="dialog-footer">
        <Button label="Cerrar" onClick={onHide2} />
      </div>
    );
  };



  return (
    <Layout
      title="Pagar"
      description="Pago del pedido"
    >
      <div className="grid">
        <Toast ref={toast} />
        <div className="col-12 ">
          <h4>Realizar Pago <i className="pi pi-dollar"></i></h4>
          <div className='lg:flex lg:justify-content-between '>
            <div className='lg:col-7 md:col-12 mb-5'>
              <div className='card'> <h4>Seleccione su forma de pago</h4>

                <div className='flex justify-content-between my-3'>

                  <label htmlFor="tamaño" className='flex align-items-center font-semibold'>Seleccione una tarjeta o añada una nueva</label>
                  <Dropdown
                    inputId="tamaño" value={tarjeta} onChange={(e) => setTarjeta(e.value)} placeholder='Tarjetas'
                    options={tarjetas} optionValue={(option) => `${option.numTarjeta},${option.fechaVencimiento}`} optionLabel={(option) => `${option.numTarjeta},${option.fechaVencimiento}`} className="w-full md:w-14rem" />
                  <Button label="" icon="pi pi-plus" onClick={() => onClick2('displaycard')} rounded severity="help" aria-label="Favorite" className="p-button-rounded" />
                  <Dialog header="Agregar tarjeta" visible={displaycard} style={{ width: 'auto' }} footer={renderFooter2('displaycard')} onHide={() => onHide2('displaycard')}>
                    <RegistrarTarjeta />
                  </Dialog>

                </div>
              </div>

              <div className='card'>
                <h4>Fecha de entrega</h4>
                <div className="gap-3">
                  <div className="align-items-center">
                    <RadioButton inputId="Date" name="Fecha programada" value="Date" onChange={(e) => {
                      setIngredient(e.value); setSelectedDate(formattedMaxDate);
                    }}
                      checked={ingredient === 'Date'} />


                    <label htmlFor="chooseDate" className="ml-2">Fecha estimada: {formattedMaxDate} </label>
                  </div>
                  <div className="align-items-center">
                    <RadioButton inputId="ingredient2" name="Elegir fecha" value="Elegir" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Elegir'} />
                    <label htmlFor="ingredient2" className="ml-2">Elegir fecha</label>

                    {ingredient !== 'Date' ? (
                      <div>

                        <Calendar dateFormat="dd-mm-yy" value={date} onChange={onDateSelect} showIcon minDate={maxDate} />
                      </div>
                    ) : null}

                  </div>

                </div>
              </div>
            </div>

            <div className='lg:col-5 md:col-12'>

              <div className='card'>
                <p className='font-bold text-2xl'>Total a pagar: ${total.toLocaleString()}</p>

                <div className='flex justify-content-around'>
                  <Button label="Pagar" severity="success" onClick={Pagar} rounded size="large" className='w-5' />

                  <Button label="Cancelar" onClick={eliminarPedido} severity="danger" rounded size="large" className='w-5' />

                </div>
              </div>
              <div className='card'>

                <h3 className='font-bold  text-center'>Operación</h3>

                <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                  <h4 className='font-bold  text-center '>Productos</h4>
                  <Carousel value={productos} numVisible={3} numScroll={3} itemTemplate={productTemplate} className="custom-carousel" circular />
                </Dialog>



                <p><span className='font-bold'>Pedido:</span> #{nombre}</p>
                <div className='flex'>
                  <p><span className='font-bold'>Contenido:</span> </p>
                  <p className="font-medium underline ml-2 text-right cursor-pointer" onClick={() => onClick('displayBasic')} >Ver</p>
                </div>

                <p> <span className='font-bold '>Fecha de entrega: </span> {selectedDate}</p>
                <p> <span className='font-bold '>Costo: </span>${costo.toLocaleString()}</p>
                <p className='text-center  text-2xl'> <span className='font-bold '>Total: </span> ${total.toLocaleString()}</p>




              </div>

            </div>



          </div>

        </div>
      </div>
    </Layout>
  )
}

export default RealizarPago