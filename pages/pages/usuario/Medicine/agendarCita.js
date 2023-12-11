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
import { Calendar } from 'primereact/calendar';
// --> Libreria de cloudinary
//import { Image } from 'cloudinary-react';

const perfilDoctor = () => {

    const [horariosConsultas, setHorariosConsultas] = useState({
        lunes: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM', '6:00 PM'],
        martes: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM', '7:00 PM'],
        miercoles: ['8:00 AM', '10:30 AM', '1:30 PM', '3:30 PM', '5:30 PM'],
        jueves: ['9:30 AM', '11:30 AM', '2:30 PM', '4:30 PM', '6:30 PM'],
        viernes: ['10:30 AM', '12:30 PM', '3:30 PM', '5:30 PM', '7:30 PM'],
        sabado: ['8:30 AM', '10:45 AM', '1:45 PM', '3:45 PM', '5:45 PM'],
        domingo: ['11:00 AM', '1:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'],
      });

    const [date, setDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const toast = useRef(null);
    const [selectedSlot, setSelectedSlot] = useState('');

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.value);
        const today = new Date();

        if (selectedDate < today) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Selecciona una fecha válida.' });
            return;
        }

        setDate(e.value);
        const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        const dayOfWeek = days[selectedDate.getDay()];
        setSelectedDay(dayOfWeek);
    };

    const handleSlotSelect = (slot) => {
        setSelectedSlot(slot);
    };

    const availableSlots = selectedDay ? horariosConsultas[selectedDay.toLowerCase()] : [];

    //Lo que vamos a regresar
      return (
        <Layout title="Perfil doctor" description="Agenda la cita con el medico de tu preferencia">
            <Toast ref={toast} />
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h2>Agendar cita</h2>
                        <div className="grid">
                            <div className="col-4 flex align-items-center justify-content-center">
                                <div className="card">
                                    <div className="col-12">
                                        <div className="col-3 flex align-items-center justify-content-center">
                                        <Image src={`/images/docChat.png`} alt="Image" width="100" height="100" />
                                        </div>
                                    </div>
                                    <Card title="Dr. Lee Chin Juan" subTitle="Gastroenterologo" >

                                        <p className="m-0">
                                            Especialista de confianza <br />
                                            Los pacientes vuelven a su consulta de manera recurrente 
                                            <br />
                                            <b>Telefono movil: </b>5522925550
                                            <br />
                                            <b>Telefono consultorio: </b>58 84 93 18
                                            <br/>
                                            <br />
                                            <b>Primera visita:</b> $500
                                            <br />
                                            <b>Consulta:</b> $350

                                        </p>
                                        <p className="m-0">
                                            
                                        </p>
                                        <p className="m-0">
                                            
                                        </p>              
                                        <p className="m-0">
                                            
                                        </p>

                                    </Card>
                                </div>
                            </div>
                            <div className="col-5 align-items-center justify-content-center">
                                <div className="card flex justify-content-center">
                                    <Calendar value={date} onChange={handleDateChange} inline showWeek />
                                </div>
                            </div>
                            <div className="col-3">
                                <h3>Horarios</h3>
                                <div className="card flex flex-wrap justify-content-center gap-3">
                                    {availableSlots.map((slot, index) => (
                                        <Button key={index} label={slot} severity="secondary" text raised onClick={() => handleSlotSelect(slot)}
                                        className={selectedSlot === slot ? 'selected' : ''}/>
                                    ))}
                                </div>
                                <div className="align-items-right">
                                    <Button label="Agendar cita" disabled={!selectedSlot || !date} />
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
      )
}

export default perfilDoctor