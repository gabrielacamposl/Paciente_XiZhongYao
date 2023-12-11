import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import styles from '../styles/styles.module.css';



export default function bot() {
const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Tenorite',
  fontFamily: 'Tenorite',
 
  headerBgColor: '#94B0B7',
  headerFontColor: '#d72d3b',

  headerFontColor: '#fff',
  botBubbleColor: '#DDDDDA',
  botFontColor: '#000000',
  
};
const steps=[{
  id:'saludo',
  message:'Hola, soy Nursy , bienvenido a Soporte al Cliente, ¿En qué te puedo ayudar?',  
  trigger:'opciones' 
},
{
  id:'opciones',
  options:[{value: "Identificacion      ",label: "1. Interpretación de Imágenes       ",trigger:"Identificacion"},
           
           {value: "Flores que Ofrecemos   ",label: "2. Interpretación de Análisis Químicos   ",trigger:"Ofrecemos"},
           {value: "Cuidado de Flores      ",label: "3. Cuidado de las plantas      ",trigger:"Cuidado"},
           {value: "Duración de las flores ",label: "4. Recomendaciones para malestares ",trigger:"Duracion"},
           
           {value: "Envíos y costos        ",label: "5. Envíos a domicilio        ",trigger:"EC"},
           
           {value: "Métodos de pago        ",label: "6. Métodos de pago        ",trigger:"Metodosp"},    
  
  ],
  
}, 
{
  id:'cuidadoFlores',
  options:[{value: "Manzanilla",        label: "Manzanilla        ",trigger:"Manzanilla"},
           {value: "Menta ",   label: "Menta   " ,trigger:"Menta"},
           {value: "Aloe Vera  ",  label: "Aloe Vera   ", trigger:"Aloe Vera"},
           {value: "Lavanda",       label: "Lavanda",       trigger:"Lavanda"},
           {value: "Celéndula",    label: "Celéndula",   trigger:"Celéndula"},
           {value: "Jengibre",    label: "Jengibre",   trigger:"Jengibre"},
           {value: "Romero",    label: "Romero",   trigger:"Romero"},
           {value: "Orégano",    label: "Orégano",   trigger:"Orégano"},
           {value: "Salir",    label: "Volver al menú principal",   trigger:"Salir"},
          
  ],
  
},

//Menu de malestares

{
  id:'duracionFlores',
  options:[{value: "Dolor de cabeza",        label: "Dolor de cabeza        ",trigger:"Cabeza"},
           {value: "Estres o Ansiedad ",   label: "Estrés o Ansiedad    " ,trigger:"Estres"},
           {value: "Problemas Digestivos  ",  label: "Problemas Digestivos   ", trigger:"Digestivos"},
           {value: "Dolores Musculares",       label: "Dolores musculares",       trigger:"Musculares"},
           {value: "Fatiga Mental ",    label: "Fatiga Mental",   trigger:"Mental"},  
           
  ],
  
},


{
  id:'InfoPlantaLavanda',
  options:[{value: "Recomendaciones",        label: "Recomendaciones        ",trigger:"RecomendacionesLavanda"},
           {value: "Precauciones ",   label: "Precauciones   " ,trigger:"PrecaucionesLavanda"},
           {value: "Salir ",   label: "Salir   " ,trigger:"Salir"},
              
  ],
  
},





{
  id:'eventos',
  options:[{value: "AmorAniversario   ",label: "Amor Aniversario  ",trigger:"amorAni"},
          {value: "Condolencias       ",label: "Condolencias      ",trigger:"condolencias"},
          {value: "Cumpleaños         ",label: "Cumpleaños        ",trigger:"cumpleaños"},
          {value: "Bautizos           ",label: "Bautizos          ",trigger:"bautizos"},
          {value: "Agradecimiento     ",label: "Agradecimiento    ",trigger:"agradecimiento"},     
  ],
},

{
  id:'SalirCuidados',
  options:[{value: "Ver otra planta  ",label: "Ver otra planta  ",trigger:"cuidadoFlores"},
          {value: "Salir       ",label: "Volver a menú principal      ",trigger:"Salir"},
              
  ],
},

{
  id:'Menu',
  options:[
        {value: "Salir       ",label: "Volver a menú principal      ",trigger:"Salir"},
              
  ],
},
//MEnu para salir de malestares
{
  id:'Menu2',
  options:[
        {value: "Duracion       ",label: "Ver otro malestar      ",trigger:"duracionFlores"},
        {value: "Salir       ",label: "Volver a menú principal      ",trigger:"Salir"},   
  ],
},






{
  id:'Salir',
  message:'¿Te puedo ayudar en algo más?',  
  trigger:'opciones'
},

//IDentificacion de plantas
{
  id:'Identificacion',
  message:'Para realizar la identificación de alguna planta, solo debes seguir estos sencillos pasos: ',
  trigger:'ide2'
},
{
  id:'ide2',
  message:'Paso 1: Toma una foto de la planta que desees identificar ',
  trigger:'ide3'
},
{
  id:'ide3',
  message:'Paso 2: Selecciona y sube tu foto ',
  trigger:'ide4'
},
{
  id:'ide4',
  message:'Paso 3: Da clic en identificar ',
  trigger:'ide5'
},
{
  id:'ide5',
  message:'Listo, mediante IA tu planta será identificada, te brindará información y los cuidados necesarios',
  trigger:'Menu'
},

//Menu para cuidados de plantas

{
  id:'Cuidado',
  message: 'Seleccione la planta de la cual desea ver sus cuidados.',
  trigger:'cuidadoFlores'
},
{
  id:'floresEventos',
  message: 'Contamos con flores para los siguientes eventos:',
  trigger:'eventos'
},



//Cuidados de Manzanilla 
{
  id: 'Manzanilla',
  message: 'Para mantener sana una planta de manzanilla,es importante proporcionarle las condiciones adecuadas y seguir algunos cuidados específicos. Aquí tienes algunas recomendaciones:',
  trigger: 'Manz1'
},

{
  id: 'Manz1',
  message: 'LUZ: La manzanilla prefiere la luz solar directa a luz parcial. Coloca la planta en un lugar donde reciba al menos 6 horas de luz solar al día. ',
  trigger: 'Manz2'
},

{
  id: 'Manz2',
  message: 'SUELO: Utiliza un sustrato bien drenado y fértil. La manzanilla prospera en suelos con buen drenaje y moderadamente ricos en nutrientes.',
  trigger: 'Manz3'
},

{
  id: 'Manz3',
  message: 'RIEGO: Riega la planta de manzanilla de manera regular para mantener el sustrato ligeramente húmedo. Evita el encharcamiento, ya que el exceso de agua puede provocar problemas como la pudrición de la raíz.',
  trigger: 'Manz4'
},

{
  id: 'Manz4',
  message: 'TEMPERATURA: La manzanilla prefiere temperaturas moderadas. Mantén la planta en un rango de temperatura de alrededor de 15-25°C. Protege la planta de las heladas si se encuentra en un área con inviernos fríos.',
  trigger: 'Manz5'
},

{
  id: 'Manz5',
  message: 'PODAR REGULARMENTE: Recorta las flores marchitas para estimular la producción continua de nuevas flores. Esto también ayuda a mantener un aspecto ordenado y favorece un crecimiento saludable.',
  trigger: 'SalirCuidados'
},



//Cuidados de Menta

{
  id: 'Menta',
  message: 'Para mantener sana una planta de menta, es necesario tener en cuenta ciertos cuidados específicos. Aquí tienes algunas recomendaciones:',
  trigger: 'Ment1'
},


{
  id: 'Ment1',
  message: 'LUZ: La menta prefiere luz parcial a completa. Coloca la planta en un lugar donde reciba al menos 4-6 horas de luz solar directa al día. Puede crecer bien en zonas con sombra parcial en climas cálidos.',
  trigger: 'Ment2'
},

{
  id: 'Ment2',
  message: 'SUELO: Utiliza un sustrato bien drenado y rico en materia orgánica. La menta prefiere suelos húmedos pero bien drenados.',
  trigger: 'Ment3'
},

{
  id: 'Ment3',
  message: 'RIEGO: Mantiene el sustrato uniformemente húmedo. Riéga cuando la capa superior del suelo comienza a secarse, pero evita el encharcamiento. La menta es tolerante a condiciones de humedad, pero también puede sufrir si se seca en exceso.',
  trigger: 'Ment4'
},

{
  id: 'Ment4',
  message: 'TEMPERATURA: La menta prefiere temperaturas moderadas y se adapta bien a climas frescos. Asegúrate de protegerla del calor extremo en verano y del frío intenso en invierno.',
  trigger: 'Ment5'
},

{
  id: 'Ment5',
  message: 'PODAR REGULARMENTE: Poda la menta con regularidad para estimular un crecimiento más compacto y fomentar la producción de hojas frescas. También elimina las flores para prevenir la propagación no deseada a través de semillas.',
  trigger: 'SalirCuidados'
},

//Cuidados de Aloe Vera

{
  id: 'Aloe Vera',
  message:'Cuidar una planta de Aloe vera es relativamente sencillo, ya que es una planta resistente y adaptable. Aquí tienes algunos cuidados específicos para mantener saludable una planta de Aloe vera: ',
  trigger: 'Aloe1'
},
{
  id: 'Aloe1',
  message: 'LUZ: El Aloe vera prefiere luz solar directa a luz parcial. Colócala en un lugar donde reciba luz brillante, pero también puede tolerar la sombra parcial.',
  trigger: 'Aloe2'
},
{
  id: 'Aloe2',
  message: 'SUELO: Utiliza un sustrato bien drenado. La mezcla de tierra para cactus o sustrato específico para suculentas es adecuada. Asegúrate de que el contenedor tenga agujeros de drenaje para evitar el encharcamiento.',
  trigger: 'Aloe3'
},
{
  id: 'Aloe3',
  message: 'RIEGO: El Aloe vera es una planta suculenta que almacena agua en sus hojas, por lo que no necesita riegos frecuentes. Permite que el sustrato se seque completamente entre riegos. Demasiada humedad puede llevar a la pudrición de las raíces.',
  trigger: 'Aloe4'
},
{
  id: 'Aloe4',
  message: 'TEMPERATURA: El Aloe vera prefiere temperaturas cálidas y no tolera bien las heladas. Mantén la planta en un rango de temperatura entre 18-24°C. Protege la planta de temperaturas extremas.',
  trigger: 'Aloe5'
},
{
  id: 'Aloe5',
  message: 'PODAR CON MODERACIÓN: Poda las hojas amarillas o dañadas con tijeras limpias y afiladas. Evita podar excesivamente, ya que las hojas sanas contribuyen a la salud general de la planta.',
  trigger: 'SalirCuidados'
},



//Cuidados de Lavanda


{
  id: 'Lavanda',
message:'Cuidar una planta de lavanda requiere atención a ciertos detalles para asegurar su salud y belleza. Aquí te dejo algunos cuidados específicos para la planta de lavanda:',
  trigger: 'Lavanda1'
},

{
  id: 'Lavanda1',
  message: 'LUZ: La lavanda prospera en pleno sol. Coloca la planta en un lugar donde reciba al menos 6-8 horas de luz solar directa al día.',
  trigger: 'Lavanda2'
},
{
  id: 'Lavanda2',
  message: 'SUELO: Utiliza un sustrato bien drenado y ligeramente alcalino. La lavanda prefiere suelos arenosos y secos. Agrega arena o piedra pómez a la mezcla del suelo para mejorar el drenaje.',
  trigger: 'Lavanda3'
},
{
  id: 'Lavanda3',
  message: 'RIEGO: La lavanda es resistente a la sequía y prefiere suelos secos. Riégala de manera moderada, permitiendo que el sustrato se seque completamente entre riegos. Evita el encharcamiento.',
  trigger: 'Lavanda4'
},
{
  id: 'Lavanda4',
  message: 'TEMPERATURA: La lavanda prefiere climas cálidos y tolera bien el calor. Protege la planta de las heladas, especialmente las variedades más sensibles.',
  trigger: 'Lavanda5'
},
{
  id: 'Lavanda5',
  message: 'PODAR REGULARMENTE: Poda la lavanda después de la floración para darle forma y estimular el crecimiento compacto. Corta las flores marchitas y evita que la planta se vuelva leñosa.',
  trigger: 'SalirCuidados'
},

//Cuidados de Celendula

{
  id: 'Celéndula',
message:'Cuidar una planta de caléndula (Calendula officinalis) es relativamente sencillo, ya que es una flor resistente y versátil. Aquí tienes algunos cuidados específicos para mantener saludable una planta de caléndula:',
  trigger: 'Cel1'
},

{
  id: 'Cel1',
  message: 'LUZ: La caléndula prefiere la luz solar directa, pero también puede tolerar la sombra parcial. Coloca la planta en un lugar donde reciba al menos 6 horas de luz solar al día.',
  trigger: 'Cel2'
},
{
  id: 'Cel2',
  message: 'SUELO: Utiliza un sustrato bien drenado y fértil. La caléndula prefiere suelos ligeramente alcalinos. Asegúrate de que el sustrato tenga buen drenaje para prevenir problemas de pudrición de raíces.',
  trigger: 'Cel3'
},
{
  id: 'Cel3',
  message: 'RIEGO: Riega la caléndula de manera regular para mantener el suelo uniformemente húmedo. Evita el encharcamiento y permite que la capa superior del suelo se seque entre riegos.',
  trigger: 'Cel4'
},
{
  id: 'Cel4',
  message: 'TEMPERATURA: La caléndula es resistente y puede tolerar temperaturas frescas. Prefiere climas moderados y se desarrolla bien en primavera y otoño.',
  trigger: 'Cel5'
},
{
  id: 'Cel5',
  message: 'PODAR REGULARMENTE: Poda las flores marchitas de la caléndula para prolongar la floración. También puedes pellizcar las puntas para fomentar un crecimiento más compacto y una mayor ramificación.',
  trigger: 'SalirCuidados'
},


//Cuidados de jengibre
{
  id: 'Jengibre',
message:'El jengibre (Zingiber officinale) es una planta que se cultiva por su rizoma subterráneo, que se utiliza comúnmente como especia y en la medicina tradicional. Aquí tienes algunos cuidados específicos para mantener saludable una planta de jengibre:',
  trigger: 'Jen1'
},

{
  id: 'Jen1',
  message: 'LUZ: El jengibre prefiere la luz parcial a la luz completa. Coloca la planta en un lugar con luz brillante, pero evita la exposición directa al sol durante las horas más intensas.',
  trigger: 'Jen2'
},
{
  id: 'Jen2',
  message: 'SUELO: Utiliza un sustrato bien drenado y rico en materia orgánica. El jengibre prefiere suelos sueltos y bien aireados. Añadir compost puede mejorar la estructura del suelo.',
  trigger: 'Jen3'
},
{
  id: 'Jen3',
  message: 'RIEGO: Riega el jengibre de manera regular para mantener el sustrato uniformemente húmedo. Evita el encharcamiento, ya que el rizoma puede pudrirse en suelos demasiado húmedos.',
  trigger: 'Jen4'
},
{
  id: 'Jen4',
  message: 'TEMPERATURA: El jengibre prefiere temperaturas cálidas y tropicales. Mantén la planta en un ambiente con temperaturas entre 20-30°C. Puede ser cultivado en climas más fríos, pero necesita protección contra las heladas.',
  trigger: 'Jen5'
},
{
  id: 'Jen5',
  message: 'PERIÓDO DE DESCANSO: Durante el invierno, reduce el riego y la fertilización para permitir un período de descanso. Puedes cosechar y replantar el jengibre para mantener un suministro constante.',
  trigger: 'SalirCuidados'
},

//Cuidados de Romero 

{
  id: 'Romero',
message:'El romero (Rosmarinus officinalis) es una planta aromática y medicinal que se utiliza comúnmente en la cocina y la medicina. Aquí tienes algunos cuidados específicos para mantener saludable una planta de romero:' , 
trigger: 'Rom1'
},

{
  id: 'Rom1',
  message: 'LUZ: El romero prefiere la luz solar plena. Coloca la planta en un lugar donde reciba al menos 6 horas de luz solar directa al día. También puede tolerar la luz parcial.',
  trigger: 'Rom2'
},
{
  id: 'Rom2',
  message: 'SUELO: Utiliza un sustrato bien drenado y ligeramente alcalino. El romero prefiere suelos arenosos y secos. Agrega arena o perlita al sustrato para mejorar el drenaje.',
  trigger: 'Rom3'
},
{
  id: 'Rom3',
  message: 'RIEGO:  Riega el romero de manera regular, permitiendo que el sustrato se seque entre riegos. Esta planta prefiere condiciones más secas y puede ser susceptible a la pudrición de raíces si se riega en exceso.',
  trigger: 'Rom4'
},
{
  id: 'Rom4',
  message: 'TEMPERATURA: El romero prefiere temperaturas moderadas y es resistente a climas cálidos y secos. Protege la planta del frío intenso y las heladas. ',
  trigger: 'Rom5'
},
{
  id: 'Rom5',
  message: 'PODAR REGULARMENTE: Poda el romero regularmente para darle forma y fomentar un crecimiento compacto. También puedes podar para cosechar las hojas y mantener la planta vigorosa.',
  trigger: 'SalirCuidados'
},



//Cuidados de Oregano
{
  id: 'Orégano',
  message:'El orégano (Origanum vulgare) es una hierba aromática popular en la cocina y tiene propiedades medicinales. Aquí te dejo algunos cuidados específicos para mantener saludable una planta de orégano:',
trigger: 'Or1'
},

{
  id: 'Or1',
  message: 'LUZ: El orégano prefiere pleno sol, al menos 6 horas de luz solar directa al día. Puede tolerar la luz parcial, pero un lugar soleado favorecerá un crecimiento más saludable.',
  trigger: 'Or2'
},
{
  id: 'Or2',
  message: 'SUELO: Utiliza un sustrato bien drenado y ligeramente alcalino. El orégano prefiere suelos con buen drenaje y no es exigente en cuanto a la calidad del sustrato. ',
  trigger: 'Or3'
},
{
  id: 'Or3',
  message: 'RIEGO: Riega el orégano de manera regular, manteniendo el sustrato uniformemente húmedo. Evita el encharcamiento y permite que la capa superior del suelo se seque entre riegos.',
  trigger: 'Or4'
},
{
  id: 'Or4',
  message: 'TEMPERATURA:  El orégano es resistente y tolera una variedad de temperaturas. Prefiere climas moderados y puede ser cultivado tanto en exteriores como en interiores.',
  trigger: 'Or5'
},
{
  id: 'Or5',
  message: 'PODAR REGULARMENTE: Poda el orégano con regularidad para estimular un crecimiento más compacto y fomentar la producción de hojas frescas. Corta las flores para prevenir que la planta se vuelva leñosa.',
  trigger: 'SalirCuidados'
},





{
  id: 'Regresar',
  message:'Hola, bienvenido a Soporte al Cliente, ¿En qué te puedo ayudar?.',
trigger: 'opciones'
},
//Interpretacion de analisis
{
  id:'Ofrecemos',
  message:'Nuestro sistema permite hacer la interpretación de tu Análisis clínico, para hacerlo solo debes seguir los siguientes pasos:',  
  trigger:'Analisis'
},

{
  id: 'Analisis',
  message:'Paso 1.:Da clic en la opción "Interpretar análisis" que se encuentra en el menú lateral derecho',
trigger: 'Analisis2'
},

{
  id: 'Analisis2',
  message:'Paso 2.:El sistema mostrará un formulario , favor de llenar con los datos correctos según su estudio realizado',
trigger: 'Menu'
},

{
  id: 'Analisis2',
  message:'Paso 2.:El sistema mostrará un formulario , favor de llenar con los datos correctos según su estudio realizado',
trigger: 'Analisis3'
},

{
  id: 'Analisis3',
  message:'Paso 3.: Dar clic en el botón Interpretar Análisis',
trigger: 'Analisis4'
},

{
  id: 'Analisis4',
  message:'Paso 4: Listo! , el sistema mostrará los resultados obtenidos',
trigger: 'Menu'
},

{
  id:'RecomendacionesLavanda',
  message:'Recomendaciones: Calmante y relajante. Se puede utilizar en aceites esenciales, infusiones o aplicado en la piel.',  
  trigger:'InfoPlantaLavanda'
},


{
  id:'PrecaucionesLavanda',
  message:'Precauciones: Evitar en personas con alergias a la lavanda.',  
  trigger:'InfoPlantaLavanda'
},


//recomendaciones

{
  id:'Duracion',
  message:'Es importante recordar que, si bien estas plantas pueden proporcionar alivio en muchos casos, es fundamental consultar a un profesional de la salud antes de usarlas para tratar condiciones médicas específicas, especialmente si estás tomando otros medicamentos o si estás embarazada.',  
  trigger:'Advertencia'
},
{
  id:'Advertencia',
  message:'Selecciona el malestar que te gustaria aliviar.',  
  trigger:'duracionFlores'
},


//plantas recomendadas Para malestares 
//Dolor de cabeza
{
  id: 'Cabeza',
  message: 'Los dolores de cabeza pueden tener diversas causas, que van desde tensiones musculares hasta problemas de salud más graves. Algunas personas recurren a remedios naturales para aliviar dolores de cabeza leves o para complementar el tratamiento médico. Aquí hay algunas plantas y métodos naturales que se han asociado con el alivio de dolores de cabeza:',
  trigger: 'Cabeza1'
},

{
  id:'Cabeza1',
  message:'-Lavanda (Lavandula angustifolia): El aceite de lavanda se ha utilizado tradicionalmente para aliviar el estrés y las tensiones, lo que puede ayudar a reducir los dolores de cabeza relacionados con la tensión.',  
  trigger:'Cabeza2'
},


{
  id:'Cabeza2',
  message:'-Menta (Mentha piperita):El aceite de menta puede tener propiedades analgésicas y relajantes musculares. Aplicar aceite de menta diluido en las sienes puede proporcionar alivio.',  
  trigger:'Cabeza3'
},

{
  id:'Cabeza3',
  message:'-Jengibre (Zingiber officinale):El jengibre puede ayudar a aliviar las náuseas asociadas con los dolores de cabeza. Puedes consumirlo en forma de té o suplementos.',  
  trigger:'Cabeza4'
},

{
  id:'Cabeza4',
  message:'-Manzanilla (Matricaria chamomilla):La manzanilla tiene propiedades antiinflamatorias y relajantes que pueden ayudar a aliviar dolores de cabeza relacionados con el estrés.',  
  trigger:'Cabeza5'
},

{
  id:'Cabeza5',
  message:'-Aceite de romero (Rosmarinus officinalis):El aceite esencial de romero puede ayudar a aliviar dolores de cabeza al mejorar la circulación sanguínea y reducir la tensión.',  
  trigger:'Cabeza6'
},

{
  id:'Cabeza6',
  message:'Es importante recordar que, si experimentas dolores de cabeza frecuentes o intensos, es crucial consultar a un profesional de la salud para obtener un diagnóstico preciso y un tratamiento adecuado. Además, algunas plantas pueden interactuar con medicamentos u otras condiciones médicas, por lo que siempre es recomendable hablar con un médico antes de probar nuevos enfoques.',  
  trigger:'Menu2'
},


//Estres


{
  id: 'Estres',
  message: 'El estrés es una respuesta natural del cuerpo ante situaciones percibidas como amenazantes o desafiantes. Aunque el estrés ocasional es normal, el estrés crónico puede tener efectos negativos en la salud física y mental. Aquí hay algunas plantas y técnicas naturales que se han asociado con la reducción del estrés:',
  trigger: 'Estres1'
},

{
  id:'Estres1',
  message:'-Lavanda (Lavandula angustifolia): El aroma de la lavanda se ha asociado con propiedades relajantes y puede ayudar a reducir el estrés. Se puede utilizar en forma de aceite esencial, té o sachet.',  
  trigger:'Estres2'
},


{
  id:'Estres2',
  message:'-Manzanilla (Matricaria chamomilla):La manzanilla tiene propiedades calmantes que pueden ayudar a reducir el estrés y promover la relajación. Se puede consumir como té.',  
  trigger:'Menu2'
},

//Digestivos
{
  id: 'Digestivos',
  message: 'Algunas plantas y hierbas tienen propiedades digestivas y se han utilizado tradicionalmente para ayudar con problemas gastrointestinales y mejorar la digestión. Aquí tienes algunas plantas conocidas por sus propiedades digestivas:',
  trigger:'Dig1'
},
{
  id:'Dig1',
  message:'-Jengibre (Zingiber officinale):El jengibre es conocido por su capacidad para aliviar las náuseas y mejorar la digestión. Puede consumirse en forma de té, en rodajas frescas o como suplemento.',  
  trigger:'Dig2'
},
{
  id:'Dig2',
  message:'-Menta (Mentha piperita): La menta es útil para aliviar la indigestión y puede ayudar a relajar los músculos del tracto digestivo. Se puede consumir como té o agregar a alimentos.',  
  trigger:'Dig3'
},
{
  id:'Dig3',
  message:'-Manzanilla (Matricaria chamomilla): La manzanilla tiene propiedades antiinflamatorias y calmantes que pueden aliviar problemas digestivos. Se consume comúnmente ',  
  trigger:'Dig4'
},
{
  id:'Dig4',
  message:'Es importante destacar que, si experimentas problemas digestivos persistentes o graves, es recomendable consultar a un profesional de la salud para obtener un diagnóstico preciso y un tratamiento adecuado. Además, algunas personas pueden ser alérgicas o tener sensibilidad a ciertas hierbas, por lo que es crucial usarlas con precaución y en consulta con un profesional. ',  
  trigger:'Menu2'
},


//Musculares

{
  id: 'Musculares',
  message: 'Diversas plantas y alimentos contienen compuestos con propiedades antiinflamatorias. Aquí hay algunos ejemplos:',
  trigger:'Muscu1'
},

{
  id:'Muscu1',
  message:'-Jengibre (Zingiber officinale):Contiene gingerol, que tiene propiedades antiinflamatorias y puede ser útil para aliviar dolores y molestias.',  
  trigger:'Muscu2'
},


{
  id:'Muscu2',
  message:'Es importante destacar que, si bien esta planta puede contribuir a la reducción de la inflamación, no deben considerarse como sustitutos de un tratamiento médico adecuado. Si experimentas problemas de salud, es fundamental consultar a un profesional de la salud para recibir orientación y tratamiento apropiados.',  
  trigger:'Menu2'
},

//MEntal


{
  id: 'Mental',
  message: 'La fatiga mental es un estado de agotamiento mental que puede estar acompañado de falta de concentración, dificultad para tomar decisiones, irritabilidad y una sensación general de cansancio cognitivo. Algunas plantas y hierbas se han utilizado tradicionalmente para mejorar la claridad mental y aliviar la fatiga mental. Aquí tienes algunas opciones:',
  trigger: 'Mental2'
},

{
  id:'Mental2',
  message:'-Romero (Rosmarinus officinalis): El aroma del romero se ha asociado con mejoras en la memoria y la claridad mental. Puede usarse como aceite esencial o consumirse como té.',  
  trigger:'Mental3'
},

{
  id:'Mental3',
  message:'Es importante tener en cuenta que los efectos de estas plantas pueden variar entre las personas, y la fatiga mental también puede ser causada por otros factores como falta de sueño, estrés crónico o condiciones médicas subyacentes. Antes de usar suplementos o hierbas, es recomendable consultar con un profesional de la salud, especialmente si estás tomando medicamentos o tienes condiciones médicas preexistentes.',  
  trigger:'Menu2'
},





{
  id:'EC',
  message:'Lo sentimos, por el momento no realizamos entregas a domicilio, pero puedes recoger el producto de tu agrado directamente en sucursal',  
  trigger:'EC2'
},

{
  id:'EC2',
  message:'Lamentamos que el inconveniente que esto pueda ocasionar',  
  trigger:'Salir'
},



{
  id:'Seguimiento',
  message:'Puede ver el status de su envío en la opción "Seguimiento" que se encuentra en el menú principal.',  
  trigger:'opciones'
},
{
  id:'Metodosp',
  message:'Es posible efectuar el pago mediante tarjetas de débito y crédito de distintas redes, tales como: ',  
  trigger:'VISA'
},


{
  id:'VISA',
  message:'Visa',  
  trigger:'Mastercard'
},

{
  id:'Mastercard',
  message:'Mastercard',  
  trigger:'AmericanExpress'
},


{
  id:'AmericanExpress',
  message:'American Express',  
  trigger:'JCB'
},

{
  id:'JCB',
  message:'JCB',  
  trigger:'Diners'
},

{
  id:'Diners',
  message:'Diners Club INTERNATIONAL',  
  trigger:'Maestro'
},

{
  id:'Maestro',
  message:'Maestro',  
  trigger:'Discover'
},

{
  id:'Discover',
  message:'Discover',  
  trigger:'Menu'
},


{
  id:'amorAni',
  message:'Las flores para Amor o Aniversario son: Rosas, Margaritas, Lirios y Tulipanes',
  trigger:'opciones'
},
{
  id:'condolencias',
  message:'Las flores apropiadas para expresar condolencia son: Lirio blanco, Rosa blanca y Orquídeas blancas',
  trigger:'opciones'
},
{
  id:'cumpleaños',
  message:'Las flores aptas para cumpleaños son: Girasoles, Rosas de colores y Lirios',
  trigger:'opciones'
},
{
  id:'bautizos',
  message:'Las flores para un bautizo son: Tulipanes, Rosas y Lirios',
  trigger:'opciones'
},
{
  id:'agradecimiento',
  message:'Las flores para mostrar agradecimiento son: Tulipanes, Margaritas y Lilas',
  trigger:'opciones'
}

];

return(
    
  <ThemeProvider theme={otherFontTheme}>
   
    <ChatBot
        steps={steps}
        
        headerTitle= "Nursy-Servicio al Cliente"
      
        floatingStyle={{

          borderRadius: '50%',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)'
        }}
        
        opened={false}
        floating={true}
        style={{ width: '450px', height: '470px', headerBgColor:'purple' }}
          floatingIcon={<img src="/images/docChat.png" height={'50px'} alt="Chatbot Icon" />}
          botAvatar="/images/docChat.png"
        optionStyle={{ width: '200px', fontSize: '12px', background:'#d72d3b' }}
      />
  
     </ThemeProvider>
 

)
      };
