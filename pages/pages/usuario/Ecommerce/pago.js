import React, { useState } from 'react'
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


const RealizarPago = () => {
   
    const router = useRouter();
    const IrCarrito = () => {
        //--> Redireccionar
        router.push('/pages/usuario/Ecommerce/carritoCompras')
    }
    const verPedidos = () => {
        //--> Redireccionar
        router.push('/pages/usuario/Ecommerce/verPedidos')
    }
    const [tarjeta, setTarjeta] = useState(0)
    const tarjetas = [
        { card: "Terminación 9197" },
       
    ]
    const [successMessage, setSuccessMessage] = useState('');

    /*VARIABLES PARA DETERMINAR LA FECHA DE ENTREGA */
    const today = new Date(); // Obtener la fecha actual

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displaycard, setDisplaycard] = useState(false);
    const [displayadd, setDisplayadd] = useState(false);

    const [date, setDate] = useState(null);
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 3);
    const onClick = () => {
        setDisplayBasic(true);
    };
    const onClick2 = () => {
        setDisplaycard(true);
        setSuccessMessage('La tarjeta se ha guardado correctamente');

    
        setTimeout(() => {
            setSuccessMessage('');
        }, 3000);
    };
    const onClick3 = () => {
        setDisplayadd(true);
    };
    const onHide = () => {
        setDisplayBasic(false);
    };
    const onHide2 = () => {
        setDisplaycard(false);
    };
    const onHide3 = () => {
        setDisplayadd(false);
    };
    /*CARRUSEL DEL APARTADO DE VER */
    const responsiveOptions = [
        { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '991px', numVisible: 2, numScroll: 1 },
        { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];
    const productos = [
        { temporada: "Invierno" },
        { temporada: "Primavera" },
        { temporada: "Otoño" },
        { temporada: "Año nuevo" },
        { temporada: "San valentin" },
    ]
    const plantillaTemporada = (temporada) => {
        return (
            <div className=" surface-border border-round m-1 text-center py-5 ">
                <div className="">
                    {<img className="w-10 shadow-2 border-round" src={`https://media.admagazine.com/photos/61eb22cb9b19d943aa117b30/master/w_1600%2Cc_limit/Girasol.jpg`} />
                    }
                </div>
                <div>
                </div>
            </div>
        );
    };

    
    /*La variable SelectedDate determina la fecha elegida */
    const [selectedDate, setSelectedDate] = useState(maxDate.toLocaleDateString());
    const onDateSelect = (e) => {
        const selectedValue = e.value ? e.value.toLocaleDateString() : '';
        setSelectedDate(selectedValue);
        setDate(e.value);
    };
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
    const color = {
        backgroundColor:'rgb(255,255,255, 0.6)',
      };
    

    return (
        <Layout
            title="Pagar"
            description="Pago del Pedido" >
            <div className="grid">
                <div className="col-12 ">
                    <div className='card' style={color}>
                        <h4>Realizar Pago <i className="pi pi-dollar"></i></h4>
                        <div className='lg:flex lg:justify-content-between '>
                            <div className='lg:col-7 md:col-12 mb-5'>
                                <div className='card'> <h4>Elegir forma de pago</h4>
                                    <div className='flex justify-content-between my-3'>
                                        <label htmlFor="tamaño" className='flex align-items-center font-semibold'>Elija una tarjeta</label>
                                        <Dropdown
                                            inputId="tamaño"
                                            value={tarjeta}
                                            onChange={(e) => setTarjeta(e.value)}
                                            placeholder='Tarjetas'
                                            options={tarjetas}
                                            optionLabel="card"
                                            optionValue='card'
                                            className="w-full md:w-14rem"
                                        />
                                        <Button
                                            label=""
                                            icon="pi pi-plus"
                                            onClick={onClick2}
                                            rounded severity="help"
                                            aria-label="Favorite"
                                            className="p-button-rounded"
                                        />
                                        <Dialog
                                            header="Agregar tarjeta"
                                            visible={displaycard}

                                            style={{ width: 'auto' }}
                                            footer={renderFooter2('displaycard')}
                                            onHide={onHide2}
                                        >
                                            <RegistrarTarjeta />
                                        </Dialog>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:col-5 md:col-12'>
                                <div className='card'>
                                    <p className='font-bold text-2xl'>Total a pagar: </p>
                                    <div className='flex justify-content-around'>
                                        <Button label="Pagar" severity="success" rounded size="large" className='w-5' onClick={verPedidos}  />
                                        <Button label="Cancelar" onClick={IrCarrito} severity="danger" rounded size="large" className='w-5' />
                                    </div>
                                </div>
                                <div className='card'>

                                    <h3 className='font-bold  text-center'>Operación</h3>
                                    <Dialog visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                                        <h4 className='font-bold  text-center '>Productos</h4>
                                        <Carousel value={productos} autoplayInterval={4000} numVisible={3} numScroll={2} orientation="horizontally" verticalViewPortHeight="300px" itemTemplate={plantillaTemporada} />
                                    </Dialog>
                                    <p><span className='font-bold'>Pedido:</span> #154</p>
                                    
                                    <p> <span className='font-bold '>Fecha de entrega: </span> {selectedDate}</p>
                                    <p className='text-center  text-2xl'> <span className='font-bold '>Total: </span> $249.50 </p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default RealizarPago