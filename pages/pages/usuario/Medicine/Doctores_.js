import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Tag } from 'primereact/tag';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { InputText } from 'primereact/inputtext';
import { useRouter } from 'next/router';
import { Table, TableCell, TableRow, TableBody, TableContainer, TableHeader } from "semantic-ui-react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Image } from 'cloudinary-react';


const Doctores = () => {
    //----------------| Lista de variables |----------------
    const [doctores, setDoctores] = useState([]);
    const [layout, setLayout] = useState('grid');
    const [docInfo, setDocInfo] = useState({});
    const [mostrarDialog, setMostrarDialog] = useState(false);
    const [buscador, setBuscador] = useState('');
    const router = useRouter();

    // Datos de ejemplo para los doctores
    const datosDoctores = [
        {
            nombre: "Dr. Marco Antonio García Olvera",
            especialidad: "Nefrólogo",
            status: "50967720",
            imagen: "https://i.pinimg.com/564x/94/f8/14/94f81441022f70fca9c61aa1ee7b7da8.jpg",
            dirección: "Centro Médico Serenidad, Calle Esperanza, Nº 123,  Colonia Tranquilidad, Edo. Méx.",
            maps: "https://maps.app.goo.gl/iznrCk5NRyKYnKsF9",
            descripcion: "Soy un nefrólogo reconocido con una trayectoria dedicada al estudio y tratamiento de enfermedades renales. Mi compromiso con la excelencia clínica y la investigación ha contribuido al avance del campo. He colaborado en estudios clínicos, compartido conocimientos con colegas y estudiantes, y mantenido un enfoque centrado en el paciente. Mi objetivo continuo es mejorar la salud renal y la calidad de vida de mis pacientes, siempre buscando innovar en la atención médica."
        },
        {
            nombre: "Dr. Ying Wang",
            especialidad: "Otorrinolaringólogo",
            status: "15967720",
            imagen: "https://i.pinimg.com/564x/23/e7/c0/23e7c0fa712d53620e7925e7fb532791.jpg",
            dirección: "Hospital Vitalis, Avenida Salud, Nº 567, Barrio Renacimiento, Metrópolis Sanitaria",
            maps: "https://maps.app.goo.gl/3RmhCoA4Mpi4XcVw8",
            descripcion: "Como otorrinolaringólogo reconocido, he dedicado mi carrera al diagnóstico y tratamiento de trastornos del oído, la nariz y la garganta. Con experiencia clínica sólida, participo activamente en investigaciones y avances tecnológicos en el campo. Además, comparto mis conocimientos a través de la educación médica y me esfuerzo por proporcionar atención personalizada y avanzada para mejorar la calidad de vida de mis pacientes."
        },
        {
            nombre: "Dr. Antonio Dávalos Casas",
            especialidad: "Pediatra",
            status: "15837720",
            imagen: "https://i.pinimg.com/564x/96/42/16/964216a81b96ee2385d385a018930a0d.jpg",
            dirección: "Clínica Aurora, Plaza Bienestar, Nº 789, Urbanización Saludable, Villa Sanitaria",
            maps: "https://maps.app.goo.gl/3RmhCoA4Mpi4XcVw8",
            descripcion: "Soy un pediatra reconocido comprometido con la salud infantil. Mi carrera se ha centrado en brindar atención médica de alta calidad, desde el tratamiento de enfermedades pediátricas comunes hasta casos más complejos. Además, he participado en programas de prevención y educación para padres. Mi dedicación a la formación médica incluye la enseñanza a estudiantes y residentes, contribuyendo al desarrollo de profesionales comprometidos con el bienestar de los niños. Mi objetivo es continuar promoviendo el cuidado integral de los niños para garantizar un inicio saludable en cada etapa de sus vidas."
        },
        {
            nombre: "Dr. Andrés Real Meza",
            especialidad: "Ginecólogo",
            status: "57867720",
            imagen: "https://i.pinimg.com/564x/e7/c8/6b/e7c86bb88d06d4decda94e4e5d435754.jpg",
            dirección: "Hospital Harmonía, Calle Bienestar, Nº 456, Distrito Sano, Pueblo Saludable",
            maps: "https://maps.app.goo.gl/3RmhCoA4Mpi4XcVw8",
            descripcion: "Como ginecólogo reconocido, me especializo en brindar atención integral a la salud de las mujeres. Mi trayectoria destaca por la excelencia clínica, la participación en investigaciones y estudios clínicos, así como por mi compromiso como educador. Mi objetivo es ofrecer atención de calidad, centrada en la paciente, y contribuir al avance constante de la salud ginecológica."
        },
        {
            nombre: "Dr. Pablo García Márquez",
            especialidad: "Gastroenterólogo",
            status: "11305820",
            imagen: "https://i.pinimg.com/564x/00/f0/7a/00f07a1939f2834843c8ce39c7e672c6.jpg",
            dirección: "Hospital Marcos Juárez, Ciudad de México. CP.54513",
            maps: "https://maps.app.goo.gl/3RmhCoA4Mpi4XcVw8",
            descripcion: "Como gastroenterólogo destacado, me he dedicado a sobresalir en el diagnóstico y tratamiento de trastornos gastrointestinales. Mi compromiso con la excelencia médica y la participación activa en investigaciones ha contribuido al avance del campo. Priorizo un enfoque centrado en el paciente, brindando cuidados personalizados. Con una sólida reputación, mi objetivo continuo es mejorar la salud gastrointestinal y la calidad de vida de mis pacientes."
        },
        {
            nombre: "Dra. Alma Galván Torres",
            especialidad: "Cardióloga",
            status: "52517720",
            imagen: "https://i.pinimg.com/564x/dc/97/8f/dc978fd33b17ca573dfc100579e3b693.jpg",
            dirección: "Centro Médico Elysium, Avenida Bienestar, Nº 789, Colina Salud, Ciudad Armonía",
            maps: "https://maps.app.goo.gl/3RmhCoA4Mpi4XcVw8",
            descripcion: "Soy una cardióloga reconocida con una destacada carrera en el ámbito de la cardiología. Mi dedicación a la investigación ha contribuido al avance en el diagnóstico y tratamiento de enfermedades cardiovasculares. Mi experiencia abarca desde casos comunes hasta situaciones clínicas complejas. Además, he compartido mi conocimiento como educadora y mantengo un enfoque integral y centrado en el paciente para proporcionar atención médica de calidad."
        },

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
                            <span className="text-600 font-medium mb-2">{doctor.status}</span>
                            <span className="text-600 font-medium mb-2">{doctor.especialidad}</span>
                        </div>
                    </div>
                    <div className="flex justify-content-between pt-4">
                        <Button label="Agendar Cita" onClick={() => { router.push('/pages/usuario/Medicine/agendarCita') }} />
                        <Button label="Ver más información" outlined onClick={() => dialogo(doctor)} />
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
                            <span className="text-600 font-medium mb-2">Cédula Profesional: {doctor.status}</span>
                            <span className="text-600 font-medium mb-2">{doctor.especialidad}</span>
                        </div>
                    </div>
                    <div className="flex justify-content-between pt-4">
                        <Button label="Agendar Cita" onClick={() => { router.push('/pages/usuario/Medicine/agendarCita') }} />
                        <Button label="Ver más información" outlined onClick={() => dialogo(doctor)} />
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

    //----------------| Funciones para dialogo |----------------
    const dialogo = (doctor) => {
        setDocInfo(doctor);
        setMostrarDialog(true);
    }

    const cerrarDialogo = () => {
        setMostrarDialog(false);
        setDocInfo({});
    }

    const botonesDialogo = (
        <Button label="Cerrar" icon="pi pi-times" onClick={cerrarDialogo} className="p-button-text" />
    )

    //----------------| Valor que regresará |----------------
    return (
        <Layout title="Nuestros Profesionales" description="Acceso al listado de los médicos disponibles">
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h2>Nuestros Profesionales</h2>
                        <DataView value={doctores} itemTemplate={itemTemplate} layout={layout} header={header()} />

                        <Dialog header={`Información de ${docInfo.nombre}`}
                            visible={mostrarDialog} onHide={cerrarDialogo}
                            footer={botonesDialogo} style={{ width: '35vw' }}>

                            <div className="flex flex-column align-items-center flex-or">
                                <img style={{ borderRadius: '50%' }} src={docInfo.imagen} alt={docInfo.nombre} className="h-10rem w-10rem border-rounded" />
                            </div>
                            <div className="mt-5">
                                <div>
                                    <p className="my-2"><span className="font-semibold text-lg">Nombre:</span>{docInfo.nombre}</p>
                                </div>
                                <div>
                                    <p className="my-2"><span className="font-semibold text-lg">Especialidad:    </span>{docInfo.especialidad}</p>
                                </div>
                                <div>
                                    <p className="my-2"><span className="font-semibold text-lg">Cédula Profesional:</span>{docInfo.status}</p>
                                </div>
                                <div>
                                    <p className="my-2"><span className="font-semibold text-lg">Dirección: </span>{docInfo.dirección}</p>
                                    <a href={docInfo.maps} target="_blank" rel="noopener noreferrer">
                                        Abrir en Google Maps
                                    </a>
                                </div>

                                <div className="border-y-1 surface-border py-4 my-4">
                                    <p className="font-medium text-lg text-700 mt-0">
                                        Descripción:
                                    </p>
                                    <p class="text-base text-900 mt-0 mb-0">
                                        {docInfo.descripcion}
                                    </p>
                                </div>
                            </div>

                        </Dialog>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Doctores;
