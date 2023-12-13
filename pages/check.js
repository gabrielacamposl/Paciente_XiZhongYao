import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import { Table, TableCell, TableRow, TableBody, TableContainer, TableHeader } from "semantic-ui-react";

const Citas = () => {
    const [citas, setCitas] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [citaInfo, setCitaInfo] = useState({});
    const [mostrarDialog, setMostrarDialog] = useState(false);
    const [buscador, setBuscador] = useState('');
    const router = useRouter();

    const datosCitas = [
        {
            nombrePaciente: "Robert Wilkins",
            especialidad: "Gastroenterólogo",
            status: "Médico",
            imagen: "https://i.pinimg.com/564x/3c/d2/41/3cd2412f41301c2a8373ef90bb4c338a.jpg",
            diaCita: "2023-12-15",
            lugarCita: "Hospital XYZ, Ciudad ABC",
            maps: "https://maps.app.goo.gl/dzCatb4agSt9W99YA",
        },
        // Agrega más datos de citas según sea necesario
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
                cita.especialidad.toLowerCase().includes(busqueda)
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
                <div className="col-12 md:col-6 xl:col-5 p-3">
                    <div className="surface-card shadow-2 border-round p-3">

                        <div className=" text-center">
                            <span className="text-xl text-900 font-medium mb-2">{cita.nombrePaciente}</span> <br />
                            <span className="text-600 font-medium mb-2">{cita.status}</span> <br /> <br />
                            <span className="text-600 surface-200 p-2 border-round">{cita.especialidad}</span> <br />
                        </div>
                        <div>
                            <br />
                            <br />
                            <i className="pi pi-calendar"></i>
                            <label className="font-medium mb-2 " >  Día de tu cita: {cita.diaCita}</label>
                            <br />
                            <br />
                            <i className="pi pi-map-marker"></i>
                            <label className="font-medium mb-2 " >  Lugar de tu cita: {cita.lugarCita}</label><br /> <br />
                            <a href={cita.maps} target="_blank" rel="noopener noreferrer">
                                Abrir en Google Maps
                            </a>
                        </div>
                        <div className="flex justify-content-between pt-4">
                            <Button label="Cancelar Cita" severity="dangerous" />

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

                    <div className=" text-center">
                        <span className="text-xl text-900 font-medium mb-2">{cita.nombrePaciente}</span> <br />
                        <span className="text-600 font-medium mb-2">{cita.status}</span> <br /> <br />
                        <span className="text-600 surface-200 p-2 border-round">{cita.especialidad}</span> <br />
                    </div>
                    <div>
                        <br />
                        <br />
                        <i className="pi pi-calendar"></i>
                        <label className="font-medium mb-2 " >  Día de tu cita: {cita.diaCita}</label>
                        <br />
                        <br />
                        <i className="pi pi-map-marker"></i>
                        <label className="font-medium mb-2 " >  Lugar de tu cita: {cita.lugarCita}</label><br /> <br />
                        <a href={cita.maps} target="_blank" rel="noopener noreferrer">
                            Abrir en Google Maps
                        </a>
                    </div>
                    <div className="flex justify-content-between pt-4">
                        <Button label="Cancelar Cita" severity="dangerous" />

                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (cita, layout) => {
        if (!cita) return null;
        return layout === 'list' ? listItem(cita) : gridItem(cita);
    };

    const dialogo = (cita) => {
        setCitaInfo(cita);
        setMostrarDialog(true);
    };

    const cerrarDialogo = () => {
        setMostrarDialog(false);
        setCitaInfo({});
    };

    const botonesDialogo = (
        <Button label="Cerrar" icon="pi pi-times" onClick={cerrarDialogo} className="p-button-text" />
    );

    return (
        <Layout title="Mis Citas" description="Mis citas">
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h2>Mis Citas</h2>
                        <DataView value={citas} itemTemplate={itemTemplate} layout={layout} header={header()} />
                        <Dialog header={`Información de la Cita de ${citaInfo.nombrePaciente}`}
                            visible={mostrarDialog} onHide={cerrarDialogo}
                            footer={botonesDialogo} style={{ width: '35vw' }}>
                            <div className="mt-5">
                                <p className="my-2"><span className="font-semibold text-lg">Nombre del Paciente: </span>{citaInfo.nombrePaciente}</p>
                                <p className="my-2"><span className="font-semibold text-lg">Especialidad: </span>{citaInfo.especialidad}</p>
                                <p className="my-2"><span className="font-semibold text-lg">Día de la Cita: </span>{citaInfo.diaCita}</p>
                                <p className="my-2"><span className="font-semibold text-lg">Lugar de la Cita: </span>{citaInfo.lugarCita}</p>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Citas;
