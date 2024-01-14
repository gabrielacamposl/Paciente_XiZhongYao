import React, { useContext } from 'react';
// import ReactDOM from 'react-dom'
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';


// import Link from 'next/link';

const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);

  const EstetoscopioIcon = () => {
    return (
      <FontAwesomeIcon icon={faStethoscope} />
    );
  };

  const model = [
    {
      label: 'Menú Principal',
      items: [{ label: 'Inicio', icon: "pi pi-fw pi-home", to: '/pages/dashboard' }]
    },
    {
      label: 'Servicios Médicos',
      items: [
        { label: 'Nuestros Profesionales', icon: 'pi pi-fw pi-users', to: '/pages/usuario/Medicine/Doctores' },
        { label: 'Mis Citas', icon: 'pi pi-fw pi-calendar-times', to: '/pages/usuario/Medicine/citas' }
      ]
    },
    {
      label: 'Interpretaciones Clínicas',
      items: [
        { label: 'Interpretar Análisis', icon: 'pi pi-fw pi-shield', to: '/pages/usuario/Medicine/analisCliFront' },
        { label: 'Remedios Naturales', icon: 'pi pi-fw pi-book', to: '/pages/usuario/Medicine/Recomendaciones' },
      
      ]
    },
    
     {
      label: 'Indentifación de Flora',
      items: [
        { label: 'Identifica tu Planta', icon: 'pi pi-fw pi-search', to: 'http://localhost:5000/predicciones' }
      ]
    },
    {
      label: 'Tienda Medicinal',
      items: [
        { label: 'Ver Productos', icon: 'pi pi-fw pi-shopping-bag ', to: '/pages/usuario/Ecommerce/productos' },
        { label: 'Carrito', icon: 'pi pi-fw pi-shopping-cart', to: '/pages/usuario/Ecommerce/carrito' },
        { label: 'Mis Compras', icon: 'pi pi-fw pi-heart', to: '/pages/usuario/Ecommerce/miscompras' },
      ]
    },  {
      label: 'Check',
      items: [
        { label: 'Ver Productos', icon: 'pi pi-fw pi-shopping-bag ', to: '/pages/catalogos/plantasMedicinales' },

      ]
    },
    

  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">


        {model.map((item, i) => {
          return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}

      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
