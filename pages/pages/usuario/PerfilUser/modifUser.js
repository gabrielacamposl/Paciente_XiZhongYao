import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Image } from 'cloudinary-react';

const Doctores = () => {
  //----------------| Lista de variables |----------------
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellido] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneL, setPhoneLadas] = useState(null);



  //--> Validar envio
  const [estiloPhone, setEstiloPhone] = useState('')
  const [estiloPhoneLadas, setEstiloPhoneLadas] = useState('')
  const [estiloNombre, setEstiloNombre] = useState('')
  const [estiloApellido, setEstiloApellido] = useState('')

    // --> Leer localstorage
  
    
    //-----------------------| Envio Nombre |-----------------------
    const cambiarNombre = async () => {
      //--> Validar campos vacios
      if ([nombre, apellidos].includes('')) {
        if (!nombre) setEstiloNombre('p-invalid')
        if (!apellidos) setEstiloApellido('p-invalid')
        mostrarMensaje(camposVacios)
        setTimeout(() => { limpiarMensaje() }, 3000)
        return
      } else {
        setEstiloNombre('')
        setEstiloApellido('')
      }
      //--> Validar formato
      if (/^\d*$/.test(nombre, apellidos)) {
        setEstiloNombre('p-invalid')
        setEstiloApellido('p-invalid')
        mostrarMensaje(formatoNombre)
        setTimeout(() => { limpiarMensaje() }, 3000)
        return
      } else {
        setEstiloNombre('')
        setEstiloApellido('')
      }
  
      //--> Preparar objeto para enviar
      const token = localStorage.getItem('token')
      const cabecera = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      const objetoEnviar = {
        nombre: nombre,
        apellido: apellidos
      }
      //--> Limpiar campos
      setNombre('')
      setApellido('')
    }
  
    //-----------------------| Envio Teléfono |-----------------------
  const changePhone = async () => {
    //--> Validar campos llenos
    //--> Validar campos llenos
    if ([phone, phoneL].includes('')) {
      if (!phone) setEstiloPhone('p-invalid')
      if (!phoneL) setEstiloPhoneLadas('p-invalid')
      mostrarMensaje(camposVacios)
      setTimeout(() => { limpiarMensaje() }, 3000)
      return
    } else {
      setEstiloPhone('')
      setEstiloPhoneLadas('')
    }
    //--> Validar phone
    if (phone.length !== 10) {
      setEstiloPhone('p-invalid')
      mostrarMensaje(contactoInvalido)
      setTimeout(() => { limpiarMensaje() }, 3000)
      return
    } else {
      setEstiloPhone('')
    }

    if (/[a-zA-Z]/.test(phone)) {
      setEstiloPhone('p-invalid')
      mostrarMensaje(contactoInvalido)
      setTimeout(() => { limpiarMensaje() }, 3000)
      return
    } else {
      setEstiloPhone('')
    }

    //--> Preparar objeto para enviar
    const token = localStorage.getItem('token')
    const cabecera = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const objetoEnviar = {
      telefono: phone,

    }
  
    //--> Limpiar campos
    setPhone('')
    setPhoneLadas('')
  }

  //----------------| Valor que regresará |----------------
  return (
    <Layout title="Modificar Perfil" description="Modificar perfil del usuario">
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <div className="surface-card p-5 shadow-2 border-round flex-auto">
            <div className="flex flex-column align-items-center flex-or">
            <span className="font-medium text-900 mb-2">Profile Picture</span>
            <Image style={{borderRadious:'50%'}} src={`/images/analisCli.jpg`} alt="avatar-f-2" className="h-10rem w-10rem rounded-full" />
            <Button
              icon="pi pi-pencil" // Agrega el icono de lápiz
              className=' p-button-rounded -mt-4 '
            />
          </div>
              <div className="text-900 font-semibold text-lg mt-3">Perfil</div>
              <div className="p-divider p-component p-divider-horizontal p-divider-solid p-divider-left" role="separator">
                <div className="p-divider-content"> </div>
              </div>
              <div className="flex gap-5 flex-column md:flex-row">
                <div className="flex-auto p-fluid">
                  <div className="mb-4">
                    <label htmlFor="bio" className="block font-medium text-900 mb-2">Bio</label>
                    <textarea id="bio" type="text" rows="5" className="p-inputtextarea p-inputtext p-component p-inputtextarea-resizable" style={{ overflow: 'hidden', height: '132px' }}></textarea>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="website" className="block font-medium text-900 mb-2">URL</label>
                  <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">http://</span>
                    <InputText id="website" type="text" className="p-inputtext p-component"></InputText>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="state" className="block font-medium text-900 mb-2">Company</label>
                  <InputText id="state" type="text" className="p-inputtext p-component"></InputText>
                </div>
              </div>
              <div className="flex flex-column align-items-center">
              <Button aria-label="Update Profile" className="p-button p-component p-ripple w-auto">Guardar Cambios</Button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Layout>
  );
}

export default Doctores;
