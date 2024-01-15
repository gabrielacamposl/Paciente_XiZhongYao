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

    const [selectedSlots, setSelectedSlots] = useState([]);

    const [horariosConsultas, setHorariosConsultas] = useState({
        lunes: [''],
        martes: [''],
        miercoles: [ '14:20 AM', '15:45 PM'],
        jueves: ['9:00 AM',  '12:30 PM'],
        viernes: [''],
        sabado: [''],
        domingo: [''],
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
        const newSelectedSlots = [...selectedSlots];
    
        // Verifica si el horario ya está seleccionado
        const index = newSelectedSlots.indexOf(slot);
        if (index !== -1) {
            // Si ya está seleccionado, quítalo
            newSelectedSlots.splice(index, 1);
        } else {
            // Si no está seleccionado, agrégalo
            newSelectedSlots.push(slot);
        }
    
        setSelectedSlots(newSelectedSlots);
        setSelectedSlot(slot);
    };

    const handleAgendarCita = () => {
    // Realiza cualquier lógica adicional si es necesario antes de mostrar el mensaje de éxito

    // Elimina los horarios seleccionados de la lista de horarios disponibles
    const updatedHorarios = { ...horariosConsultas };
    updatedHorarios[selectedDay.toLowerCase()] = horariosConsultas[selectedDay.toLowerCase()].filter(slot => !selectedSlots.includes(slot));
    setHorariosConsultas(updatedHorarios);

    // Muestra el mensaje de éxito
    toast.current.show({
        severity: 'success',
        summary: 'Cita Agendada',
        detail: 'Su cita se ha agendado con éxito.',
        life: 3000,
    });

      // Redirige al usuario después de 5 segundos
      setTimeout(() => {
        // Cambia la ruta de la redirección según tu estructura de carpetas y archivos
        window.location.href = '/pages/usuario/Medicine/citasPorConfirmar';
    }, 2000);
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
                                            <Image src={`https://i.pinimg.com/564x/94/f8/14/94f81441022f70fca9c61aa1ee7b7da8.jpg`} alt="Image" width="110px" height="95px" />
                                        </div>
                                    </div>
                                    <Card title="Dr. Marco Antonio García Olvera" subTitle="Nefrólogo" >

                                        <p className="m-0">
                                            Especialista de confianza <br />
                                            Los pacientes vuelven a su consulta de manera recurrente
                                            <br />
                                            <br />
                                            <b>Teléfono móvil: </b>55 14 75 22 30
                                            <br />
                                           
                                       
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
                                            className={selectedSlot === slot ? 'selected' : ''} />
                                    ))}
                                </div>
                                <div className="align-items-right">
                                  
                                    <Button
                                        label="Agendar cita"
                                        disabled={!selectedSlot || !date}
                                        onClick={handleAgendarCita}
                                    />


                                </div>     <Toast ref={toast} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default perfilDoctor