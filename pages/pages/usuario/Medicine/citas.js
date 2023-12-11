import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout"
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast';

// --> Libreria de cloudinary
import { Image } from 'cloudinary-react'



const citas = () => {
  //----------------| Lista de variables |----------------

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

  const [selectedTime, setSelectedTime] = useState(null);

  function formatHour(time){
    const hour = String (time.getHour()).padStart();
    const minute =String (time.getMinute()).padStart(2,'0');
    return `${hour}-${minute}`;
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const availableTimes = [
    '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM',
  ];

  //----------------| Valor que regresara |----------------
  return (
    <Layout
      title="Agendar citas"
      description="Agendar cita"
    >
      <div className="grid">
        <div className="col-12">
          <div className="card">

            <div>
              <h1>Agenda tu cita</h1>
              <div>
                <label>Selecciona la fecha:</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  isClearable
                />
              </div>
              <div>
                <label>Selecciona la hora:</label>
                <select
                  value={selectedTime}
                  onChange={(e) => handleTimeChange(e.target.value)}
                >
                  <option value="" disabled>Elige una hora</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
              <div>
                <button
                  onClick={() => {
                    console.log(`Cita agendada para el ${selectedDate.toLocaleDateString()} a las ${selectedTime}`);
                    // Aquí puedes realizar acciones adicionales, como enviar la cita a un servidor, etc.
                  }}
                  disabled={!selectedDate || !selectedTime}
                >
                  Agendar Cita
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default citas