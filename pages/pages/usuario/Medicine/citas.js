import React, { useEffect, useState, useRef  } from "react";
import Layout from "@/layout/layout";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';


const Citas = () => {
  const [citas, setCitas] = useState([]);
  const [layout, setLayout] = useState('grid');
  const [citaInfo, setCitaInfo] = useState({});
  const [mostrarDialog, setMostrarDialog] = useState(false);
  const [buscador, setBuscador] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const router = useRouter();
  const toast = useRef(null);

  const datosCitas = [
    /*{
      nombrePaciente: "Dr. Marco Antonio García Olvera",
      especialidad: "Nefrólogo",
      status: "50967720",
      imagen: "https://i.pinimg.com/564x/94/f8/14/94f81441022f70fca9c61aa1ee7b7da8.jpg",
      lugarCita: "Centro Médico Serenidad, Calle Esperanza, Nº 123,  Colonia Tranquilidad, Edo. Méx.",
      diaCita: "24/01/24",
      horaCita: "14:20 PM",
      maps: "https://maps.app.goo.gl/iznrCk5NRyKYnKsF9"
    },*/
   /* {
      nombrePaciente: "Dr. Antonio Dávalos Casas",
      especialidad: "Pediatra",
      status: "Cédula Prof. 11384568",
      imagen: "https://i.pinimg.com/564x/49/00/ff/4900ff8b887069809d7d03d31ffe9415.jpg",
      diaCita: "7/02/2024 ",
      horaCita: "1:30 PM",
      lugarCita: "Hospital Las Lomas de Torres, Ciudad Satélite, CP.16513",
      maps: "https://maps.app.goo.gl/U72N2XPAQnjs47Uo7",
    }, {
      nombrePaciente: "Dra. Alma Galván Torres",
      especialidad: "Neumólogo",
      status: "Cédula Prof. 55436875",
      imagen: "https://i.pinimg.com/236x/05/09/f2/0509f2d5f9f0a8f704e09b74f0cf185f.jpg",
      diaCita: "26/01/2024  ",
      horaCita: "5:00 PM",
      lugarCita: "Hospital ShentiHao 15, Estado de México.",
      maps: "https://maps.app.goo.gl/dzCatb4agSt9W99YA",
    },*/

  ];


  useEffect(() => {
    setCitas(datosCitas);
  }, []);

  const limpiarBusqueda = () => {
    setBuscador("");
    setCitas(datosCitas);
  };

  const buscarEnTiempoReal = (input) => {
    const busqueda = input.toLowerCase();
    const citasFiltradas = datosCitas.filter(
      (cita) =>
        cita.nombrePaciente.toLowerCase().includes(busqueda) ||
        cita.especialidad.toLowerCase().includes(busqueda) ||
        cita.status.toLowerCase().includes(busqueda)
    );
    setCitas(citasFiltradas);
  };

  const header = () => {
    return (
      <div className="flex justify-content-between">
        <div className="p-inputgroup w-4">
          <Button icon="pi pi-search" />
          <InputText
            placeholder="Buscar por nombre o especialidad"
            value={buscador}
            onChange={(e) => {
              setBuscador(e.target.value);
              buscarEnTiempoReal(e.target.value);
            }}
          />
          <Button icon="pi pi-times" onClick={limpiarBusqueda} disabled={!buscador} />
        </div>
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>
    );
  };

  const listItem = (cita) => {
    return (
      <div className="col-12">
        <div className="col-12 md:col-8 xl:col-10 p-3 justify-content-center">
          <div className="surface-card shadow-2 border-round p-3">
            <div className="flex justify-content-center pt-4">
              <img src={cita.imagen} className="mx-auto  border-rounded  justify-content-center" alt={cita.nombre} style={{ width: '110px', height: '90px' }} />
              <br />
            </div>

            <div className=" text-center">
              <span className="text-xl text-900 font-medium mb-2">{cita.nombrePaciente}</span> <br />
              <span className="text-600 font-medium mb-2">{cita.status}</span> <br /> <br />
              <span className="text-600 surface-200 p-2 border-round">{cita.especialidad}</span> <br />
            </div>
            <div>
              <br />
              <br />
              <i className="pi pi-calendar"></i>
              <label className="font-medium mb-2 " >  Día de tu cita:  </label>
              <label>{cita.diaCita}</label>
              <br />
              <br />
              <i className="pi pi-clock"></i>
              <label className="font-medium mb-2 " >  Hora de tu cita:  </label>
              <label>{cita.horaCita}</label>
              <br />
              <br />
              <i className="pi pi-map-marker"></i>
              <label className="font-medium mb-2 " >  Lugar de tu cita: </label>
              <label>{cita.lugarCita}</label><br /> <br />
              <a href={cita.maps} target="_blank" rel="noopener noreferrer">
                Abrir en Google Maps
              </a>
            </div>
            <div className="flex justify-content-center pt-4">
            <Button label="Cancelar Cita" severity="dangerous" onClick={() => handleCancelarCita(cita)} />

            </div>
          </div>
        </div>

      </div>
    );
  };

  const gridItem = (cita) => {
    return (
      <div className="col-12 md:col-8 xl:col-6 p-3">
        <div className="surface-card shadow-2 border-round p-3">
          <div className="flex justify-content-center pt-4">
            <img src={cita.imagen} className="mx-auto  border-rounded  justify-content-center" alt={cita.nombre} style={{ width: '110px', height: '80px' }} />
            <br />
          </div>
          <div className=" text-center">
            <span className="text-xl text-900 font-medium mb-2">{cita.nombrePaciente}</span> <br />
            <span className="text-600 font-medium mb-2">{cita.status}</span> <br /> <br />
            <span className="text-600 surface-200 p-2 border-round">{cita.especialidad}</span> <br />
          </div>
          <div>
            <br />
            <br />
            <i className="pi pi-calendar"></i>
            <label className="font-medium mb-2 " >  Día de tu cita:  </label>
            <label>{cita.diaCita}</label>
            <br />
            <br />
            <i className="pi pi-clock"></i>
            <label className="font-medium mb-2 " >  Hora de tu cita:  </label>
            <label>{cita.horaCita}</label>
            <br />
            <br />
            <i className="pi pi-map-marker"></i>
            <label className="font-medium mb-2 " >  Lugar de tu cita: </label>
            <label>{cita.lugarCita}</label><br /> <br />
            <a href={cita.maps} target="_blank" rel="noopener noreferrer">
              Abrir en Google Maps
            </a>
          </div>
          <div className="flex justify-content-center pt-4">
          <Button label="Cancelar Cita" severity="dangerous" onClick={() => handleCancelarCita(cita)} />

          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (cita, layout) => {
    if (!cita) return null;
    return layout === 'list' ? listItem(cita) : gridItem(cita);
  };

  const handleCancelarCita = (cita) => {
    setCitaInfo(cita);
    setMostrarDialog(true);
  };

  const confirmarCancelarCita = () => {
    // Perform cancellation logic here
    // For example, update the status to "Cita cancelada"
  
    // Filtrar las citas y quitar la cita cancelada
    const nuevasCitas = citas.filter(cita => cita !== citaInfo);
  
    // Actualizar el estado con las citas restantes
    setCitas(nuevasCitas);
  
    // Show success toast message
    toast.current.show({
      severity: 'success',
      summary: 'Cita Cancelada',
      detail: 'Su cita se ha cancelado con éxito.',
      life: 3000,
    });
  
    // Close the confirmation dialog
    setMostrarDialog(false);
  };

  const cancelarCitaFooter = (
    <>
       <Button label="Aceptar" icon="pi pi-check" onClick={confirmarCancelarCita} autoFocus severity="success" />
      <Button label="Cancelar" icon="pi pi-times" onClick={() => setMostrarDialog(false)} severity="dangerous" />
     
    </>
  );



  return (
    <Layout title="Mis Citas" description="Mis citas">
     
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <h2>Mis Citas</h2>
            <DataView value={citas} itemTemplate={itemTemplate} layout={layout} header={header()} />
            <Dialog
              header={`Confirmar cancelación de cita de ${citaInfo.nombrePaciente}`}
              visible={mostrarDialog}
              onHide={() => setMostrarDialog(false)}
              footer={cancelarCitaFooter}
              style={{ width: '35vw' }}
            >
            </Dialog>
            <Toast ref={toast} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Citas;
