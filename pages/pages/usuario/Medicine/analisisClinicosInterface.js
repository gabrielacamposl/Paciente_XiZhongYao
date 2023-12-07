import React, { useEffect, useState, useRef } from "react";
import Layout from "@/layout/layout"
import axios from "axios";
//--> Componentes de PrimeReact
import { Tag } from 'primereact/tag';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { SplitButton } from 'primereact/splitbutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TabView, TabPanel } from 'primereact/tabview';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Menu } from 'primereact/menu';

// --> Libreria de cloudinary
import { Image } from 'cloudinary-react'



const analisisClinicos = () => {
  //----------------| Lista de variables |----------------
  
  const [formValues, setFormValues] = useState({
    glucosa: '',
    urea: '',
    creatinina: '',
    acidoUrico: '',
    colesterolTotal: '',
    colesterolLdl: '',
    colesterolHdl: '',
    trigliceridos: '',
    bilirrubina: '',
    tgo: '',
    tgp: '',
    ggt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar que el valor ingresado sea numérico
    if (!isNaN(value) || value === '') {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío de datos
    console.log('Formulario enviado:', formValues);
  };



  const toolbarLeftTemplate = () => {
      return (
          <>
              <Button label="New" icon="pi pi-plus" style={{ marginRight: '.5em' }} />
              <Button label="Open" icon="pi pi-folder-open" severity="secondary" />

              <i className="pi pi-bars p-toolbar-separator" style={{ marginRight: '.5em' }}></i>

              <Button icon="pi pi-check" severity="success" style={{ marginRight: '.5em' }} />
              <Button icon="pi pi-trash" severity="warning" style={{ marginRight: '.5em' }} />
              <Button icon="pi pi-print" severity="danger" />
          </>
      );
  };
  //const toolbarRightTemplate = <SplitButton label="Options" icon="pi pi-check" model={toolbarItems} menuStyle={{ width: '12rem' }}></SplitButton>;
  const cardHeader = (
      <div className="flex align-items-center justify-content-between mb-0 p-3 pb-0">
          <h5 className="m-0">Card</h5>
          <Button icon="pi pi-plus" text onClick={(event) => menu1.current?.toggle(event)} />
        
      </div>
  );

  //----------------| Valor que regresara |----------------
  return (
    <Layout
      title="Interpretación de Análisis" description="Interpreta los análisis clínicos sanguíneos de los pacientes" >
      <div className="grid">
        <div className="col-12">
          <div className="card">

          <div className="grid">
        <div className="col-12">
          <div className="card">
            <h5>Divider</h5>
            <div className="row">
              <div className="col-6">
                <div className="p-fluid">
                  <div className="field">
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Consectetur,
                      adipisci velit, sed quia non numquam eius modi.
                    </p>
                  </div>
                  <p>hola1</p>
                </div>
                <p>hola1</p>
              </div>
              <div className="col-6">
                <div className="p-fluid">
                  <div className="field">
                    <p>
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Itaque
                      earum rerum hic tenetur a sapiente delectus, ut aut
                      reiciendis voluptatibus maiores alias consequatur aut
                      perferendis doloribus asperiores repellat. Donec vel
                      volutpat ipsum. Integer nunc magna, posuere ut tincidunt
                      eget, egestas vitae sapien.
                    </p>
                  </div>
                  <p>hola1</p>
                </div>
                <p>hola1</p>
              </div>
            </div>
            <div className="p-divider p-component p-divider-vertical p-divider-solid p-divider-center" role="separator" data-pc-name="divider" data-pc-section="root">
              <div className="p-divider-content" data-pc-section="content">
                <b>OR</b>
              </div>
              <p>hola0</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-6">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Consectetur,
                  adipisci velit, sed quia non numquam eius modi.
                </p>
              </div>
              <p>hola1</p>
            </div>
            <p>hola1</p>
          </div>
        </div>
      </div>


      <h1>Holaa aqui</h1>

      <div className="grid">
        <div className="col-12">
          <div className="card">
            <h2>Formulario de Análisis Clínicos</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="field">

                  <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2">
                    Glucosa:
                    <InputText type="text" name="glucosa" className="p-inputtext-sm" value={formValues.glucosa} onChange={handleChange} />
                  </label>
                  <br />
                  <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2">
                    Glucosa:
                    <InputText type="text" name="glucosa" className="p-inputtext-sm" value={formValues.glucosa} onChange={handleChange} />
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="field">
                <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2">
                    Glucosa:
                    <InputText type="text" name="glucosa" className="p-inputtext-sm" value={formValues.glucosa} onChange={handleChange} />
                  </label>
                </div>
              </div>
            </div>

          

          </div>
        </div>
      </div>

      <h1>Divider bien</h1>
      <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Toolbar</h5>
                    
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>AccordionPanel</h5>
                    <Accordion activeIndex={0}>
                        <AccordionTab header="Header I">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Header II">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="Header III">
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                minus.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div className="card">
                    <h5>TabView</h5>
                    <TabView>
                        <TabPanel header="Header I">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                                id est laborum.
                            </p>
                        </TabPanel>
                        <TabPanel header="Header II">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>
                        </TabPanel>
                        <TabPanel header="Header III">
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                minus.
                            </p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
            <div className="col-12 md:col-6">
                <div className="card">
                    <h5>Panel</h5>
                    <Panel header="Header" toggleable>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel>
                </div>
                <div className="card">
                    <h5>Fieldset</h5>
                    <Fieldset legend="Legend" toggleable>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset>
                </div>
                <Card header={cardHeader}>
                    <p className="line-height-3 m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Card>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Divider</h5>
                    <div className="grid">
                        <div className="col-5 flex align-items-center justify-content-center">
                            <div className="p-fluid">
                                <div className="field">
                                    <label htmlFor="username">Username</label>
                                    <InputText id="username" type="text" />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">Password</label>
                                    <InputText id="password" type="password" />
                                </div>
                                <Button label="Login"></Button>
                            </div>
                        </div>
                        <div className="col-1">
                            <Divider layout="vertical">
                                <b>OR</b>
                            </Divider>
                        </div>
                        <div className="col-5 align-items-center justify-content-center">
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                            </p>

                            <Divider layout="horizontal" align="center">
                                <span className="p-tag">Badge</span>
                            </Divider>

                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                minus.
                            </p>

                            <Divider align="right">
                                <Button label="Button" icon="pi pi-search" outlined></Button>
                            </Divider>

                            <p>
                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                                reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Donec vel volutpat ipsum. Integer nunc magna, posuere ut tincidunt eget, egestas vitae sapien. Morbi dapibus luctus odio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5>Splitter</h5>
                    <Splitter style={{ height: '300px' }}>
                        <SplitterPanel size={30} minSize={10}>
                            <div className="h-full flex align-items-center justify-content-center">Panel 1</div>
                        </SplitterPanel>
                        <SplitterPanel size={70}>
                            <Splitter layout="vertical">
                                <SplitterPanel size={50} minSize={10}>
                                    <div className="h-full flex align-items-center justify-content-center">Panel 2</div>
                                </SplitterPanel>
                                <SplitterPanel size={50} minSize={10}>
                                    <div className="h-full flex align-items-center justify-content-center">Panel 3</div>
                                </SplitterPanel>
                            </Splitter>
                        </SplitterPanel>
                    </Splitter>
                </div>
            </div>
        </div>








          <h2>Formulario de Análisis Clínicos</h2>

             <div className=''>
                 <div className='field'>
                 <label htmlFor="glucosa" className="block text-900 text-md font-medium mb-2"> Glucosa:
                 <InputText type= "text" name="glucosa"  className="p-inputtext-sm" value={formValues.glucosa} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="urea" className="block text-900 text-md font-medium mb-2"> Urea:
                 <InputText type= "text" name="urea" className="p-inputtext-sm" value={formValues.urea} onChange={handleChange} />
                 </label> <br/>
                 
                 <label htmlFor="creatinina" className="block text-900 text-md font-medium mb-2"> Creatinina:
                 <InputText type= "text" name="creatinina" className="p-inputtext-sm" value={formValues.creatinina} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="acidourico" className="block text-900 text-md font-medium mb-2"> Ácido Úrico:
                 <InputText type= "text" name="acidourico" className="p-inputtext-sm" value={formValues.acidoUrico} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="colesteroltotal" className="block text-900 text-md font-medium mb-2"> Colesterol Total:
                 <InputText type= "text" name="colesteroltotal" className="p-inputtext-sm" value={formValues.colesterolTotal} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="colesterolLdl" className="block text-900 text-md font-medium mb-2"> Colesterol Ldl:
                 <InputText type= "text" name="colesterolLdl" className="p-inputtext-sm" value={formValues.colesterolLdl} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="colesterolHdl" className="block text-900 text-md font-medium mb-2"> colesterol Hdl:
                 <InputText type= "text" name="colesterolHdl" className="p-inputtext-sm" value={formValues.colesterolHdl} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="trigliceridos" className="block text-900 text-md font-medium mb-2"> Trigliceridos:
                 <InputText type= "text" name="trigliceridos" className="p-inputtext-sm" value={formValues.trigliceridos} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="bilirrubina" className="block text-900 text-md font-medium mb-2"> Bilirrubina:
                 <InputText type= "text" name="bilirrubina" className="p-inputtext-sm" value={formValues.bilirrubina} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="tgo" className="block text-900 text-md font-medium mb-2"> TGO:
                 <InputText type= "text" name="tgo" className="p-inputtext-sm" value={formValues.tgo} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="tgp" className="block text-900 text-md font-medium mb-2"> TGP:
                 <InputText type= "text" name="tgp" className="p-inputtext-sm" value={formValues.tgp} onChange={handleChange} />
                 </label> <br/>

                 <label htmlFor="ggt" className="block text-900 text-md font-medium mb-2"> GGT:
                 <InputText type= "text" name="ggt" className="p-inputtext-sm" value={formValues.ggt} onChange={handleChange} />
                 </label> <br/>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default analisisClinicos