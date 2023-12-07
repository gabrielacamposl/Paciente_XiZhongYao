import Layout from "@/layout/layout"
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";


const Perfil = () => {

  //--> Variable de redireccinamiento
  const router = useRouter();

  const [nombre, setNombre] = useState('')
  const [icono, setIcono] = useState('')
  useEffect(() => {
    setNombre(localStorage.getItem('nombre'))
    //--> Extraer primera letra del nombre
   // setIcono(localStorage.getItem('nombre').charAt(0))
  }, [])

  return (
    <Layout
      title="Perfil"
      description="Datos del usuario">
      <div className="grid">
        <div className="col-12">
          <div className="card">
            <h5>Perfil</h5>
            <div className="flex align-items-center flex-wrap">
              <Avatar label={icono} size="xlarge" shape="circle" className="flex align-items-center justify-content-center m-2" />
              <p className="flex align-items-center justify-content-center m-2"> <span className="underline">{nombre}</span></p>
            </div>

            <div className="mt-4">
              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-home flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }}></i>
                <Button label="Inicio" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/dashboard') }} />
              </div>

              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-user-edit flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }}></i>
                <Button label="Modificar Perfil" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/usuario/PerfilUser/modifUser') }} />
              </div>

              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-shopping-bag flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }}></i>
                <Button label="Mis compras" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/usuario/Ecommerce/miscompras ') }} />
              </div>

              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-file flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }}></i>
                <Button label="Mis Análisis" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/usuario/Medicine/analisisResult') }} />
              </div>
              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-calendar-times flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }}></i>
                <Button label="Mis Citas" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/usuario/Medicine/citas') }} />
              </div>
          
              <div className="flex align-items-center flex-wrap my-2">
                <i className="pi pi-user flex align-items-center justify-content-center m-2" style={{ fontSize: '2rem' }} ></i>
                <Button label="Mi cuenta" text className="flex align-items-center justify-content-center m-2" onClick={() => { router.push('/pages/usuario/PerfilUser/miCuenta') }} />

              </div>
            
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Perfil
