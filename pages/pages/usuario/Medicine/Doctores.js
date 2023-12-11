import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';


const Doctores = () => {
  //----------------| Lista de variables |----------------
  const [doctores, setDoctores] = useState([]);
  const [layout, setLayout] = useState('grid');
  const [docInfo, setDocInfo] = useState({});
  const [mostrarDialog, setMostrarDialog] = useState(false);
  const [buscador, setBuscador] = useState('');

  // Datos de ejemplo para los doctores
  const datosDoctores = [
    {
      nombre: "Dr. Oder Olvera Nieto",
      especialidad: "Gastroenterólogo",
      status: "Médico",
      imagen: "https://i.pinimg.com/564x/3c/d2/41/3cd2412f41301c2a8373ef90bb4c338a.jpg",
    },
    {
        nombre: "Dr. Antonio Dávalos Casas",
        especialidad: "Pediatra",
        status: "Médico",
        imagen: "https://i.pinimg.com/564x/c1/01/a3/c101a3c795879ed7f846689ab1759df4.jpg",
      },
      {
        nombre: "Dr. Ádrián Real Meza",
        especialidad: "Gastroenterólogo",
        status: "Médico",
        imagen: "https://i.pinimg.com/564x/10/49/68/1049687e0a1a7d02a48f17afc9805a0c.jpg",
      },
      {
        nombre: "Dr. Pablo García Márquez",
        especialidad: "Gastroenterólogo",
        status: "Médico",
        imagen: "https://i.pinimg.com/236x/98/0b/26/980b2638500a0b04408fe5a8044aee73.jpg",
      },
      {
        nombre: "Dra. Alma Galván Torres",
        especialidad: "Gastroenterólogo",
        status: "Médico",
        imagen: "https://i.pinimg.com/236x/05/09/f2/0509f2d5f9f0a8f704e09b74f0cf185f.jpg",
      },
    // ... Puedes agregar más objetos para representar otros doctores
  ];



  useEffect(() => {
    setDoctores(datosDoctores);
  }, []);

    //--> Filtrar doctores por el buscador
      
      const limpiarBusqueda = () => {
        setBuscador("");
        setDoctores(datosDoctores);
      };
      
      const buscarEnTiempoReal = (input) => {
        const busqueda = input.toLowerCase();
        const doctoresFiltrados = datosDoctores.filter(
          (doctor) =>
            doctor.nombre.toLowerCase().includes(busqueda) ||
            doctor.especialidad.toLowerCase().includes(busqueda)
        );
        setDoctores(doctoresFiltrados);
      };
      
      //--> Barra para cambiar modo de vista
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
      
      

  //--> Modo de vista: lista
  const listItem = (doctor) => {
    return (
      <div className="col-12">
        <div className="surface-card shadow-2 border-round p-4">
          <div className="flex border-bottom-1 surface-border pb-4">
            <img src={doctor.imagen} className="mr-3 border-rounded" alt={doctor.nombre} style={{ width: '70px', height: '70px' }} />
            <div className="flex flex-column align-items-start">
              <span className="text-xl text-900 font-medium mb-1">{doctor.nombre}</span>
              <span className="text-600 font-medium mb-2">{doctor.especialidad}</span>
              <Tag value={doctor.status} severity="success"></Tag>
            </div>
          </div>
          <div className="flex justify-content-between pt-4">
            <Button label="Agendar Cita" />
          </div>
        </div>
      </div>
    );
  };

  //--> Modo de vista: grid
  const gridItem = (doctor) => {
    return (
      <div className="col-12 md:col-8 xl:col-6 p-3">
        <div className="surface-card shadow-2 border-round p-4">
          <div className="flex border-bottom-1 surface-border pb-4">
            <img src={doctor.imagen} className="mr-3 rounded-full" alt={doctor.nombre} style={{ width: '70px', height: '70px' }} />
            <div className="flex flex-column align-items-start">
              <span className="text-xl text-900 font-medium mb-1">{doctor.nombre}</span>
              <span className="text-600 font-medium mb-2">{doctor.especialidad}</span>
              <Tag value={doctor.status} severity="success"></Tag>
            </div>
          </div>
          <div className="flex justify-content-between pt-4">
            <Button label="Agendar Cita" />
            <Button label="Ver más información"  outlined />
          </div>
        </div>
      </div>
    );
  };

  //--> Cambiar modo de vista
  const itemTemplate = (doctor, layout) => {
    if (!doctor) return null;
    return layout === 'list' ? listItem(doctor) : gridItem(doctor);
  };

  //----------------| Valor que regresará |----------------
  return (
    <Layout title="Nuestros Profesionales" description="Acceso al listado de los médicos disponibles">
      <div className="grid">
        <div className="col-12">
          <div className="card">
          <h2>Nuestros Profesionales</h2>
            <DataView value={doctores} itemTemplate={itemTemplate} layout={layout} header={header()} />
            <Dialog
              header={` ${doctor.nombre}`}
              
            >
              <div className="flex flex-column w-full mt-4">
                <section className="flex flex-column w-full mt-4">
                    <div className="flex w-full justify-content-between align-items-center mb-4">
                        <span className="font-semibold text-base text-600">Información del Doctor</span>    
                    </div>
                    <div>

                    </div>
                </section>
              
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctores;
