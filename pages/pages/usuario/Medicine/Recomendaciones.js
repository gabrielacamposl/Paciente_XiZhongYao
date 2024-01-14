import React, { useState, useRef } from "react";
import Layout from "@/layout/layout";
import { Image } from 'primereact/image';
import { Button } from "semantic-ui-react";

import axios from "axios";
import { InputText } from "primereact/inputtext";


const recomendaciones = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const contentRef = useRef(null);

    const handleSearch = () => {
        const content = contentRef.current;

        if (content) {
            const searchText = searchQuery.toLowerCase();
            const elements = content.getElementsByClassName('searchable-content');

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const elementText = element.innerText.toLowerCase();

                if (elementText.includes(searchText)) {
                    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                    break;
                }
            }
        }
    };


    //----------------| Valor que regresará |----------------
    return (
        <Layout title="Recomendaciones" description="Libro de recomendaciones caseras para el usuario">

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                     <h1>Recomendaciones Naturales</h1> <br/>

                        <div >
                            <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Glucosa</h2>
                                </div>
                            </div>
                            <div className="card"  >
                            <br />
                            <h4>Glucosa Alta:</h4>
                            <p>
                                La hiperglucemia (glucosa alta) mantenida es el principal síntoma de la diabetes. El cuerpo no genera la suficiente insulina, que controla los niveles de azúcar en sangre.
                                Se considera alta cuando es superior a 130 mg / dl (antes de una comida) o superior a 180 mg / dl dos horas después de haber comido.

                                <br /><b>Ojo, una comida pesada, el estrés o la falta de actividad física pueden disparar los niveles de azúcar. </b>


                                <ul>
                                    <li>
                                        <b>1. Té de salvia</b><br />
                                        La salvia, cuyo nombre científico es Salvia officinalis,
                                        posee efecto hipoglucemiante, por lo que ayuda a disminuir el azúcar en la sangre y favorece
                                        el control de la diabetes e inclusive la regulación del azúcar en la prediabetes. Conozca otros beneficios del té de salvia.

                                        <br /> <br /> <b>Modo de preparación: </b> Colocar 2 cucharadas de hojas secas de salvia en 250 ml de agua hirviendo y dejar reposar durante 10 minutos.
                                        Tomar hasta 2 veces al día.
                                    </li> <br />

                                    <li>
                                        <b>2. Té de carqueja</b><br />
                                        La carqueja, cuyo nombre científico es Baccharis trimera, posee acción hipoglucemiante,
                                        por lo que ayuda a mantener estable la glucosa en la sangre, esto debido a que posee acción depurativa y antioxidante.

                                        <br /> <br /> <b>Modo de preparación: </b> Para preparar el té se deben colocar 10 gramos de carqueja en 500 ml de agua hirviendo, dejándola reposar durante 10 minutos.
                                        Se pueden tomar hasta 3 tazas al día.
                                    </li> <br />

                                    <li>
                                        <b>3. Té de pezuña de vaca</b>
                                        <br /> La pata de vaca, pezuña de vaca o pezuña de buey es una planta medicinal que posee una proteína que actúa de forma semejante a la hormona insulina en el organismo. Esta propiedad está comprobada en animales y es de amplio conocimiento popular, pero carece de comprobación científica en humanos,
                                        motivo por el cual debe tomarse bajo la orientación del médico. El nombre científico de esta planta es Bauhinia forficata.

                                        <br /> <br /><b>Modo de preparación: </b> Añadir 2 hojas de pata de vaca en una olla y agregar 250 ml de agua, mantener a fuego lento hasta hervir durante 5 minutos. Dejar reposar,
                                        colar y beber caliente 2 veces al día. Estas hierbas ayudan a controlar la diabetes debido a que poseen propiedades antioxidantes, antiinflamatorias e hipoglucemiantes que permiten regular el azúcar en la sangre.
                                        Sin embargo, es importante mencionar que el uso de estas plantas no sustituye los medicamentos para la diabetes recetados por el endocrinólogo.
                                    </li>

                                </ul>
                            </p>
                            <h4>Glucosa Baja:</h4>
                            <p>
                                El término médico para el azúcar bajo en la sangre es <b>HIPOGLUCEMIA.</b>
                                Es una afección que ocurre cuando el azúcar en la sangre del cuerpo  disminuye y es demasiado bajo, el azúcar en la sangre por debajo de 70 mg/dL (3.9 mmol/L) se considera bajo.
                                La insulina es una hormona producida por el páncreas. Es necesaria para movilizar la glucosa hasta las células donde se almacena o se usa para obtener energía. Sin la suficiente insulina, la glucosa se acumula en la sangre en lugar de ir a las células. Esto lleva a que se presenten síntomas de diabetes.
                                El bajo nivel de azúcar en la sangre ocurre debido a cualquiera de los siguientes factores: <br />

                                <ul>
                                    <li>El azúcar  del cuerpo se agota con demasiada rapidez.</li>
                                    <li>La producción de glucosa en el cuerpo es muy baja y es liberada en el torrente sanguíneo con demasiada lentitud. </li>
                                    <li>Se libera demasiada insulina en el torrente sanguíneo.</li>
                                </ul>
                                <br />
                                El bajo nivel de azúcar en la sangre es común en personas con diabetes que están tomando insulina u otros medicamentos para controlar esta enfermedad. Sin embargo, muchos otros medicamentos para la diabetes no causan un bajo nivel de azúcar.

                                En personas que no tienen diabetes, el bajo nivel de azúcar en la sangre puede ser causado por:
                                <ul>
                                    <li>Consumo de alcohol.</li>
                                    <li>Insulinoma, un poco frecuente tumor del páncreas que produce demasiada insulina.</li>
                                    <li>Falta o deficiencia de una hormona, como cortisol, hormona de crecimiento u hormona tiroidea.</li>
                                    <li>Insuficiencia cardíaca, renal o hepática grave.</li>
                                    <li>Infección que afecta todo el cuerpo (sepsis).</li>
                                    <li>Algunos tipos de cirugía para bajar de peso (usualmente 5 o más años después de la cirugía).</li>

                                </ul>


                                <br />  El propósito del tratamiento es corregir el bajo nivel de azúcar en la sangre. También es importante tratar de identificar la razón por la que bajó el nivel de azúcar para evitar que ocurra otro episodio de bajo nivel de azúcar en sangre.
                                Si tiene diabetes, es importante que el proveedor le enseñe cómo tratar los niveles bajos de azúcar en la sangre. En este caso no se recomienda el uso de alguna planta medicinal, pero puede hacer lo siguiente:
                                <ul>
                                    <li>Beber jugos. </li>
                                    <li>Consumir alimentos. </li>
                                </ul>
                            </p>

                            </div>
                          
                        </div>
                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Urea</h2>
                                </div>
                            </div>
                        <div className="card" >
                            <br />
                            <h4>Urea Baja:</h4>
                            <p>
                                La urea es un producto de desecho que se elimina del cuerpo a través de los riñones. Cuando los niveles de urea en la sangre son bajos, puede indicar una disfunción renal, una deshidratación, una dieta pobre en proteínas o una enfermedad hepática.
                                Las causas del bajo nivel de urea son: <br />
                                <ul>
                                    <li>Inanición.</li>
                                    <li>Dieta baja en proteínas.</li>
                                    <li>Desnutrición.</li>
                                    <li> <b>Sobrehidratación: </b>la sobrehidratación diluye la sangre, lo que hace que disminuyan no solo las concentraciones de urea, sino también los iones.</li>
                                    <li>Bajo consumo de proteínas: las proteínas son nuestra principal fuente de nitrógeno, ya que están formadas por aminoácidos, que comienzan con un grupo que contiene nitrógeno.</li>
                                    <li>Embarazo.</li>
                                    <li>Vejez.</li>
                                    <li>Tener una cantidad excesiva de hormona antidiurética (llamada ADH). Esto nuevamente causa que el volumen de sangre aumente debido a la retención de agua.</li>
                                    <li><b>Enfermedad hepática:</b> la urea es producida por múltiples procesos, incluida la transaminación (cuando los aminoácidos se convierten en otros).</li>
                                </ul>
                                <h4> Tratamiento de la urea baja</h4>
                                Cuando existe una proporción por debajo del rango normal del nitrógeno de urea podría significar enfermedad hepática, desnutrición u otra causa; por lo tanto, el tratamiento se aplicará según la causa o condición subyacente.
                                <b>Algunas plantas medicinales que pueden ayudar a tratar la urea baja son:</b>
                                <ul>
                                    <li>
                                        <b>1. Punarnava</b>
                                        Esta hierba tiene propiedades diuréticas y antiinflamatorias, y puede eliminar el exceso de agua del cuerpo. Se dice que es una de las plantas más eficientes para aumentar los niveles de urea.
                                    </li>

                                    <li>
                                        <b>2. Bhumi Amla:  </b>
                                        Esta hierba facilita la eliminación de los materiales de desecho del cuerpo, y mejora el funcionamiento de los riñones. También tiene efectos antioxidantes y hepatoprotectores.
                                        <br /> Esta hierba ayuda a eliminar los líquidos, la urea y el ácido úrico de los riñones. También tiene propiedades antiinflamatorias.
                                        <br /> Estas son algunas de las plantas que pueden ser útiles para tratar la urea baja, pero siempre es recomendable consultar con un médico antes de usarlas, ya que pueden tener contraindicaciones o interacciones con otros medicamentos.
                                    </li>

                                </ul>
                            </p>
                            <h4>Urea Alta:</h4>
                            <p>
                                La urea alta en la sangre, también conocida como hiperuremia, puede estar asociada con diversas condiciones médicas.
                                La urea es un producto de desecho del metabolismo de las proteínas y se elimina principalmente a través de los riñones. Cuando los riñones no funcionan adecuadamente, la urea puede acumularse en la sangre. Algunas enfermedades y condiciones que pueden estar relacionadas con niveles elevados de urea incluyen:

                                <ul>
                                    <li>
                                        <b>Insuficiencia renal:</b>Los riñones desempeñan un papel crucial en la eliminación de productos de desecho del cuerpo, incluida la urea. La insuficiencia renal puede resultar en una acumulación de urea en la sangre.
                                    </li>

                                    <li>
                                        <b>Desorden metabólico: </b>Algunos trastornos metabólicos hereditarios pueden afectar la capacidad del cuerpo para metabolizar las proteínas correctamente, lo que puede aumentar los niveles de urea.
                                    </li>

                                    <li>
                                        <b>Desnutrición: </b> La desnutrición severa o la malnutrición proteica pueden contribuir a niveles elevados de urea en la sangre.
                                    </li>
                                    <li>
                                        <b>Hiperparatiroidismo:  </b> Una glándula paratiroides hiperactiva puede afectar la función renal y contribuir a la acumulación de urea.
                                    </li>
                                    <li>
                                        <b>Descomposición de tejido:  </b> Traumatismos graves, cirugías extensas o condiciones que causan una descomposición rápida de tejido, como la rabdomiólisis, pueden aumentar los niveles de urea en la sangre.
                                    </li>
                                </ul>
                                <p>En muchos casos, se requiere la atención médica y la supervisión de un profesional de la salud. Es esencial recordar que el manejo de condiciones médicas graves generalmente requiere la orientación de un profesional de la salud. Sin embargo, algunos cambios en el estilo de vida y opciones naturales pueden ayudar a mantener la salud renal en general. Estos pueden incluir:</p>

                                <ul>
                                    <li><strong>Dieta saludable:</strong> Consumir una dieta equilibrada y limitar la ingesta de proteínas puede ser beneficioso en algunos casos.</li>
                                    <li><strong>Hidratación:</strong> Mantenerse bien hidratado puede ayudar a los riñones a eliminar los productos de desecho de manera más eficiente.</li>
                                    <li><strong>Hierbas y suplementos:</strong> Algunas hierbas y suplementos, como el diente de león y el cardo mariano, se han utilizado tradicionalmente para respaldar la salud renal, pero su eficacia no está respaldada por evidencia científica sólida.</li>
                                    <li><strong>Cardo mariano:</strong> El cardo mariano se utiliza como un suplemento para apoyar la función hepática, especialmente en casos de enfermedades hepáticas crónicas.</li>
                                    <li><strong>Diente de león:</strong> Esta planta tiene efectos depurativos y antioxidantes, y puede mejorar el funcionamiento de los riñones. Se puede tomar en forma de decocción o cápsulas.</li>

                                </ul>
                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Creatinina</h2>
                                </div>
                            </div>
                        <div className="card" >
                            <br />
                            <h4>Creatinina  Baja:</h4>
                            <p>
                                La creatinina baja es un indicador de una posible disminución de la masa muscular, que puede tener varias causas, como enfermedades neuromusculares, malnutrición, sedentarismo o envejecimiento.
                                <ul>
                                    <li><strong>Desnutrición:</strong> Una dieta baja en proteínas puede llevar a niveles bajos de creatinina, ya que la creatinina es un producto de desecho de la descomposición de la creatina, que proviene principalmente de la carne y otros alimentos ricos en proteínas.</li>
                                    <li><strong>Masa muscular reducida:</strong> La creatinina se produce en los músculos, por lo que una disminución en la masa muscular ya sea debido a condiciones médicas, inactividad física o envejecimiento, puede resultar en niveles bajos de creatinina.</li>
                                    <li><strong>Enfermedades musculares degenerativas:</strong> Condiciones que afectan la salud muscular, como distrofias musculares o miopatías, pueden contribuir a niveles bajos de creatinina.</li>
                                    <li><strong>Insuficiencia hepática:</strong> Aunque menos común que la insuficiencia renal, la disfunción hepática grave también puede afectar la producción de creatinina.</li>
                                    <li><strong>Embarazo:</strong> En algunas mujeres embarazadas, los niveles de creatinina pueden disminuir debido a un aumento en el volumen sanguíneo y otros cambios fisiológicos.</li>
                                </ul>

                                <p>Algunas plantas medicinales que pueden ayudar a aumentar la creatinina son:</p>

                                <ul>
                                    <li><strong>Cola de caballo:</strong> Esta planta tiene propiedades diuréticas y antiinflamatorias, y puede estimular el crecimiento muscular y la producción de creatina. Se puede tomar en forma de decocción o comprimidos.</li>
                                    <li><strong>Diente de león:</strong> Esta planta tiene efectos depurativos y antioxidantes, y puede mejorar el funcionamiento de los riñones y el metabolismo muscular. Se puede tomar en forma de decocción o cápsulas.</li>
                                    <li><strong>Ortosifón:</strong> Esta planta ayuda a eliminar los líquidos, la urea y el ácido úrico de los riñones. También tiene propiedades antiinflamatorias.</li>
                                </ul>

                                <p>Estas son algunas de las plantas que pueden ser útiles para aumentar la creatinina, pero siempre es recomendable consultar con un médico antes de usarlas, ya que pueden tener contraindicaciones o interacciones con otros medicamentos.</p>
                            </p>
                            <h4>Creatinina Alta:</h4>
                            <p>La creatinina es un producto de desecho que se forma cuando los músculos usan la creatina, una sustancia que ayuda a producir energía. La creatinina normalmente se elimina por los riñones a través de la orina, pero cuando los riñones no funcionan bien, la creatinina se acumula en la sangre y puede causar problemas de salud. Algunas de las enfermedades que se relacionan con la creatinina alta son:</p>

                            <ul>
                                <li><strong>Insuficiencia renal:</strong> Es el trastorno más común que causa un aumento de la creatinina en la sangre. Los riñones no pueden filtrar adecuadamente los desechos y el exceso de líquido del cuerpo, lo que provoca síntomas como fatiga, náuseas, hinchazón, pérdida de apetito y presión arterial alta.</li>
                                <li><strong>Deshidratación:</strong> Cuando el cuerpo no tiene suficiente agua para eliminar las toxinas y el exceso de creatinina, esta se concentra en la sangre y puede elevar sus niveles. La deshidratación puede deberse a una pérdida excesiva de líquidos por sudoración, vómitos, diarrea o fiebre.</li>
                                <li><strong>Elevación del consumo de proteínas:</strong> Las proteínas son necesarias para el crecimiento y la reparación muscular, pero también generan más creatinina al metabolizarse. Un consumo excesivo o inadecuado de proteínas puede sobrecargar los riñones y aumentar la producción de esta sustancia.</li>
                            </ul>

                            <p>Para bajar la creatinina alta, es importante consultar con un médico para determinar la causa y el tratamiento adecuado. Además, se pueden seguir algunas recomendaciones generales como:</p>

                            <h4>Recomendaciones:</h4>
                            <ul>
                                <li>Beber mucha agua para mantenerse hidratado y favorecer la eliminación de desechos.</li>
                                <li>Reducir el consumo de sal para evitar la retención de líquidos y presión arterial alta.</li>
                                <li>Hacer ejercicio moderado para mejorar el flujo sanguíneo renal y prevenir lesiones musculares.</li>
                                <li>Consumir alimentos ricos en vitamina C para ayudar a proteger los riñones del estrés oxidativo.</li>
                                <li>Consumir alimentos ricos en magnesio para relajar los músculos y prevenir calambres.</li>
                                <li>Evitar el consumo de alcohol y tabaco para reducir el daño renal.</li>
                            </ul>

                            <h4>Remedios Naturales:</h4>
                            <p>También existen algunos remedios naturales que pueden ayudar a bajar la creatinina alta, aunque no hay evidencia científica suficiente que respalde su eficacia. Algunos ejemplos son:</p>

                            <ul>
                                <li><strong>Té de ortiga:</strong> Esta planta tiene propiedades diuréticas y antiinflamatorias que pueden eliminar el exceso de agua del cuerpo y reducir la inflamación renal.</li>
                                <li><strong>Infusión de manzanilla:</strong> Esta hierba tiene efectos calmantes y digestivos que pueden aliviar los síntomas asociados a una insuficiencia renal.</li>
                                <li><strong>Té de raíz de diente de león:</strong> Esta planta tiene propiedades depurativas y antioxidantes que pueden mejorar el funcionamiento renal.</li>
                                <li><strong>Remedio natural con canela:</strong> Esta especia tiene propiedades antiinflamatorias e hipoglucemiantes que pueden ayudar a controlar la presión arterial alta y prevenir complicaciones renales.</li>
                                <li><strong>Infusión de cola de caballo:</strong> Esta planta tiene propiedades diuréticas muy potentes que pueden eliminar grandes cantidades de líquido del cuerpo.</li>
                            </ul>

                            <p>Estos remedios naturales deben tomarse con precaución y bajo supervisión médica, ya que pueden tener contraindicaciones o interacciones con otros medicamentos.</p>

                            <p>

                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Ácido Úrico</h2>
                                </div>
                            </div>

                        <div className="card" >
                            <br />
                            <h4>Ácido Úrico Baja:</h4>
                            <p>
                                <p>El ácido úrico es una sustancia que se forma cuando el cuerpo descompone las purinas, que son unas moléculas que se encuentran en algunos alimentos y bebidas. El ácido úrico normalmente se elimina por la orina, pero cuando hay demasiado o no se elimina bien, puede causar problemas de salud como la gota, los cálculos renales o las enfermedades cardiovasculares.</p>

                                <p>Algunas de las causas más comunes de ácido úrico alto incluyen:</p>

                                <ul>
                                    <li><strong>Dieta rica en purinas:</strong> Consumir alimentos ricos en purinas, como carne roja, mariscos, vísceras, y algunos tipos de legumbres, puede aumentar los niveles de ácido úrico.</li>
                                    <li><strong>Obesidad:</strong> La obesidad está asociada con un mayor riesgo de hiperuricemia, ya que el tejido graso puede aumentar la producción de ácido úrico y reducir su excreción.</li>
                                    <li><strong>Insuficiencia renal:</strong> Los riñones desempeñan un papel crucial en la eliminación de ácido úrico del cuerpo. La insuficiencia renal puede dar lugar a niveles elevados de ácido úrico en la sangre.</li>
                                    <li><strong>Consumo excesivo de alcohol:</strong> El alcohol, especialmente la cerveza y las bebidas destiladas, puede aumentar la producción de ácido úrico y disminuir su eliminación, lo que contribuye a la hiperuricemia.</li>
                                    <li><strong>Condiciones médicas:</strong> Algunas enfermedades, como la gota, la hipertensión arterial, la diabetes y la enfermedad renal, pueden estar asociadas con niveles altos de ácido úrico.</li>
                                </ul>

                                <h4>Remedios:</h4>

                                <p>Para bajar el ácido úrico de forma natural, existen algunos remedios caseros que pueden ayudar a reducir los niveles de esta sustancia y a aliviar los síntomas asociados. Algunos de estos remedios son:</p>

                                <ul>
                                    <li><strong>Consumir alimentos ricos en vitamina C:</strong> La vitamina C puede ayudar a disminuir el ácido úrico al inhibir la formación de las mismas y favorecer su excreción. Algunos alimentos que contienen vitamina C son las naranjas, los limones, las fresas, los pimientos y el brócoli.</li>
                                    <li><strong>Beber mucha agua:</strong> El agua ayuda a hidratar el cuerpo y a facilitar la eliminación del ácido úrico por la orina. Se recomienda beber al menos 2 litros de agua al día, preferiblemente entre las comidas.</li>
                                    <li><strong>Evitar el alcohol y el tabaco:</strong> El alcohol y el tabaco pueden aumentar el ácido úrico al interferir con su metabolización y su excreción. Además, pueden dañar los riñones y provocar inflamación e infección. Se aconseja limitar o evitar su consumo.</li>
                                    <li><strong>Tomar infusiones de plantas diuréticas:</strong> Algunas plantas tienen propiedades diuréticas que pueden ayudar a eliminar el exceso de líquidos y toxinas del cuerpo, incluyendo el ácido úrico. Algunas infusiones que pueden ser beneficiosas son la cola de caballo, la ortiga, el sauce o la manzanilla.</li>
                                    <li><strong>Aplicar frío en las articulaciones afectadas:</strong> El frío puede ayudar a reducir la inflamación y el dolor causados por la gota o los cálculos renales. Se puede aplicar una bolsa con hielo envuelta en un paño sobre las articulaciones doloridas durante unos 20 minutos varias veces al día.</li>
                                </ul>

                                <p>Estos son algunos remedios naturales para bajar el ácido úrico, pero siempre es importante consultar con un médico antes de usarlos, ya que pueden tener contraindicaciones o interacciones con otros medicamentos.</p>

                            </p>
                            <h4>Ácido Úrico Alta:</h4>
                            <p>
                                <p>El ácido úrico es una sustancia que se forma cuando el cuerpo descompone las purinas, que son unas moléculas que se encuentran en algunos alimentos y bebidas. El ácido úrico normalmente se elimina por la orina, pero cuando hay demasiado o no se elimina bien, puede causar problemas de salud como la gota, los cálculos renales o las enfermedades cardiovasculares.</p>

                                <p>Algunas de las causas más comunes de ácido úrico alto incluyen:</p>

                                <ul>
                                    <li><strong>Dieta rica en purinas:</strong> Consumir alimentos ricos en purinas, como carne roja, mariscos, vísceras, y algunos tipos de legumbres, puede aumentar los niveles de ácido úrico.</li>
                                    <li><strong>Obesidad:</strong> La obesidad está asociada con un mayor riesgo de hiperuricemia, ya que el tejido graso puede aumentar la producción de ácido úrico y reducir su excreción.</li>
                                    <li><strong>Insuficiencia renal:</strong> Los riñones desempeñan un papel crucial en la eliminación de ácido úrico del cuerpo. La insuficiencia renal puede dar lugar a niveles elevados de ácido úrico en la sangre.</li>
                                    <li><strong>Consumo excesivo de alcohol:</strong> El alcohol, especialmente la cerveza y las bebidas destiladas, puede aumentar la producción de ácido úrico y disminuir su eliminación, lo que contribuye a la hiperuricemia.</li>
                                    <li><strong>Condiciones médicas:</strong> Algunas enfermedades, como la gota, la hipertensión arterial, la diabetes y la enfermedad renal, pueden estar asociadas con niveles altos de ácido úrico.</li>
                                </ul>

                                <h4>Remedios:</h4>

                                <p>Para bajar el ácido úrico de forma natural, existen algunos remedios caseros que pueden ayudar a reducir los niveles de esta sustancia y a aliviar los síntomas asociados. Algunos de estos remedios son:</p>

                                <ul>
                                    <li><strong>Consumir alimentos ricos en vitamina C:</strong> La vitamina C puede ayudar a disminuir el ácido úrico al inhibir la formación de las mismas y favorecer su excreción. Algunos alimentos que contienen vitamina C son las naranjas, los limones, las fresas, los pimientos y el brócoli.</li>
                                    <li><strong>Beber mucha agua:</strong> El agua ayuda a hidratar el cuerpo y a facilitar la eliminación del ácido úrico por la orina. Se recomienda beber al menos 2 litros de agua al día, preferiblemente entre las comidas.</li>
                                    <li><strong>Evitar el alcohol y el tabaco:</strong> El alcohol y el tabaco pueden aumentar el ácido úrico al interferir con su metabolización y su excreción. Además, pueden dañar los riñones y provocar inflamación e infección. Se aconseja limitar o evitar su consumo.</li>
                                    <li><strong>Tomar infusiones de plantas diuréticas:</strong> Algunas plantas tienen propiedades diuréticas que pueden ayudar a eliminar el exceso de líquidos y toxinas del cuerpo, incluyendo el ácido úrico. Algunas infusiones que pueden ser beneficiosas son la cola de caballo, la ortiga, el sauce o la manzanilla.</li>
                                    <li><strong>Aplicar frío en las articulaciones afectadas:</strong> El frío puede ayudar a reducir la inflamación y el dolor causados por la gota o los cálculos renales. Se puede aplicar una bolsa con hielo envuelta en un paño sobre las articulaciones doloridas durante unos 20 minutos varias veces al día.</li>
                                </ul>

                                <p>Estos son algunos remedios naturales para bajar el ácido úrico, pero siempre es importante consultar con un médico antes de usarlos, ya que pueden tener contraindicaciones o interacciones con otros medicamentos.</p>

                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Colesterol Total</h2>
                                </div>
                            </div>

                        <div className="card">
                            <p>El colesterol total es la suma de todos los tipos de colesterol que circulan en la sangre, incluyendo el colesterol LDL, el colesterol HDL y los triglicéridos. Tener un colesterol total alto puede aumentar el riesgo de sufrir enfermedades cardiovasculares, como infarto, angina o accidente cerebrovascular.</p>

                            <br />
                            <h4>Colesterol Total Baja:</h4>
                            <p>
                                <p>El colesterol total bajo es una condición poco frecuente que puede tener varias causas y consecuencias. Algunas de las causas que pueden provocar un nivel bajo de colesterol total son:</p>

                                <ul>
                                    <li>Hipertiroidismo</li>
                                    <li>Enfermedad celiaca</li>
                                    <li>Aplasia medular</li>
                                    <li>Patologías hepáticas</li>
                                    <li>Enfermedades de malabsorción</li>
                                    <li>Enfermedades genéticas</li>
                                    <li>Deficiencia de manganeso</li>
                                    <li>Enfermedades hematológicas</li>
                                    <li>Alimentación insuficiente</li>
                                </ul>

                                <p>Algunas de las consecuencias que puede tener un nivel bajo de colesterol total son:</p>

                                <ul>
                                    <li>Cáncer</li>
                                    <li>Accidente cerebrovascular hemorrágico</li>
                                    <li>Depresión</li>
                                    <li>Ansiedad</li>
                                    <li>Nacimiento prematuro y bajo peso al nacer si tienes el colesterol bajo mientras estás embarazada</li>
                                </ul>

                                <h3>Remedios:</h3>

                                <p>Para aumentar el colesterol total de forma natural, se recomienda consumir alimentos ricos en grasas saludables, como el aceite de oliva, el aguacate, los frutos secos, las semillas y el pescado azul. También se pueden tomar algunos remedios naturales que pueden ayudar a elevar el colesterol, como la levadura de arroz rojo, el alga chlorella, el fenogreco, el fucus o el magnesio.</p>

                                <p>Sin embargo, siempre es importante consultar con un médico antes de tomar cualquier remedio natural, ya que pueden tener contraindicaciones o interacciones con otros medicamentos. El médico también puede determinar la causa del colesterol bajo y el tratamiento más adecuado para cada caso.</p>


                            </p>
                            <h4>Colesterol Total Alto :</h4>
                            <p>

                                <p>Algunas de las causas que pueden elevar el colesterol total son:</p>

                                <ul>
                                    <li><strong>Una dieta rica en grasas saturadas y trans:</strong> Se encuentran en alimentos como la mantequilla, la nata, el queso, la carne roja, los embutidos, los pasteles, las galletas y las frituras.</li>
                                    <li><strong>Un estilo de vida sedentario:</strong> Reduce el gasto energético y favorece el aumento de peso y la acumulación de grasa en el cuerpo.</li>
                                    <li><strong>Factores genéticos:</strong> Pueden determinar la forma en que el cuerpo produce y elimina el colesterol.</li>
                                    <li><strong>Otras enfermedades:</strong> Como la diabetes, el hipotiroidismo, el síndrome nefrótico o la cirrosis, que pueden alterar el metabolismo del colesterol.</li>
                                </ul>

                                <h4>Remedios:</h4>

                                <p>Para bajar el colesterol total de forma natural, existen algunos remedios caseros que pueden ayudar a mejorar el perfil lipídico y a prevenir complicaciones.</p>

                                <ul>
                                    <li><strong>Consumir alimentos ricos en fibra soluble:</strong> Como la avena, la cebada, las legumbres, las frutas y las verduras, que ayudan a reducir la absorción de colesterol en el intestino.</li>
                                    <li><strong>Consumir alimentos ricos en ácidos grasos omega-3:</strong> Como el pescado azul, las nueces, las semillas de lino o de chía, que ayudan a aumentar el colesterol HDL y a disminuir el colesterol LDL y los triglicéridos.</li>
                                    <li><strong>Consumir alimentos ricos en antioxidantes:</strong> Como el té verde, el ajo, la cúrcuma, el jengibre, el tomate o las bayas, que ayudan a prevenir la oxidación del colesterol y a proteger las arterias.</li>
                                    <li><strong>Tomar infusiones de plantas medicinales con propiedades hipocolesterolemiantes:</strong> Como la alcachofa, el diente de león, el cardo mariano, la ortiga o el gugul, que ayudan a mejorar el funcionamiento del hígado y a eliminar el exceso de colesterol.</li>
                                    <li><strong>Hacer ejercicio físico de forma regular:</strong> Al menos 30 minutos al día, que ayuda a quemar calorías, a perder peso, a aumentar el colesterol HDL y a mejorar la circulación sanguínea.</li>
                                </ul>

                                <p>Estas son algunas alternativas naturales para reducir el colesterol total; sin embargo, es esencial buscar la opinión de un médico antes de incorporarlas, ya que podrían presentar contraindicaciones o interactuar con otros medicamentos.</p>
                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium"> Colesterol LDL</h2>
                                </div>
                            </div>

                        <div className="card" >
                            <br />
                            <h4>Colesterol LDL Baja:</h4>
                            <p>
                                <p>Los niveles bajos de colesterol LDL pueden estar relacionados con un mayor riesgo de padecer depresión, ansiedad, nacimiento prematuro y bajo peso al nacer si tienes el colesterol bajo mientras estás embarazada.</p>

                                <p>Para reducir los niveles de colesterol LDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Beta-glucano:</strong> Estudios sugieren que el beta-glucano reduce la absorción de colesterol y grasa en el torrente sanguíneo. Con más del 40% de fibra, el salvado de trigo es uno de los mejores remedios naturales para bajar el colesterol malo y los triglicéridos.</li>
                                    <li><strong>Esteroles y estanoles vegetales:</strong> También pueden ayudar a reducir el riesgo de enfermedad cardíaca. Estos ayudan a evitar que tu intestino delgado absorba el colesterol. Esto puede reducir los niveles de colesterol de lipoproteínas de baja densidad (LDL) en tu sangre.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, consulta tu médico.</p>

                            </p>
                            <h4>Colesterol LDL Alta:</h4>
                            <p>
                                <p>El colesterol LDL alto se asocia con un mayor riesgo de enfermedades cardiovasculares, como enfermedades coronarias, accidentes cerebrovasculares y enfermedades vasculares periféricas.</p>

                                <p>Algunas enfermedades que pueden estar relacionadas con el colesterol LDL alto incluyen enfermedad renal crónica, diabetes, hipotiroidismo, lupus eritematoso, sobrepeso y obesidad, síndrome de ovario poliquístico y apnea del sueño.</p>

                                <p>Hay varios remedios naturales que pueden ayudar a reducir los niveles de colesterol LDL en sangre. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Cúrcuma:</strong> Esta especia contiene componentes que ayudan a reducir el exceso de colesterol y triglicéridos en sangre. Puedes añadirla a cremas, guisos, arroces, etc.</li>
                                    <li><strong>Levadura de arroz rojo:</strong> Se obtiene fermentando arroz con el hongo Monascus purpureus. Es rico en estatinas naturales con menos efectos secundarios que las artificiales. Conviene tomarla en la dosis recomendada por el fabricante junto con coenzima Q10 (90-10 mg al día).</li>
                                    <li><strong>Fucus vesiculosus:</strong> También conocida como laminaria, es un alga que reduce colesterol y triglicéridos, seguramente por su riqueza en yodo, que estimula el metabolismo. También produce sensación de saciedad. Se vende en cápsulas o polvo.</li>
                                    <li><strong>Aceite de pescado:</strong> Sus ácidos grasos omega 3 son los más eficaces contra el colesterol. También reducen los triglicéridos (otro tipo de grasas que también se acumulan en las arterias y que tienden a estar aumentados en las personas con el colesterol alto). Se recomienda tomar de 3 a 4 g diarios. Cuando vayas a comprarlo, pide un aceite que esté purificado.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, se recomienda ir con su médico.</p>

                            </p>
                        </div>


                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Colesterol HDL </h2>
                                </div>
                            </div>

                        <div className="card" >
                            <br />
                            <h4>Colesterol HDL Baja:</h4>
                            <p>

                                <p>También conocido como “colesterol bueno”, el colesterol HDL es un tipo de lipoproteína que ayuda a eliminar el exceso de colesterol de las arterias y transportarlo de vuelta al hígado para su eliminación. Los niveles bajos de colesterol HDL en sangre pueden estar relacionados con un mayor riesgo de enfermedades cardiovasculares, como enfermedades coronarias, accidentes cerebrovasculares y enfermedades vasculares periféricas.</p>

                                <p>Algunas enfermedades que pueden estar relacionadas con el colesterol HDL bajo incluyen enfermedad renal crónica, diabetes, hipotiroidismo, lupus eritematoso, sobrepeso y obesidad, síndrome de ovario poliquístico y apnea del sueño.</p>

                                <p>Para aumentar los niveles de colesterol HDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Aguacate:</strong> El aguacate es rico en grasas monoinsaturadas, que pueden ayudar a aumentar los niveles de colesterol HDL en sangre. Además, también es rico en fibra y antioxidantes.</li>
                                    <li><strong>Nueces:</strong> Las nueces son ricas en grasas monoinsaturadas y poliinsaturadas, que pueden ayudar a aumentar los niveles de colesterol HDL en sangre. También son ricas en fibra y antioxidantes.</li>
                                    <li><strong>Aceite de oliva:</strong> El aceite de oliva es rico en grasas monoinsaturadas, que pueden ayudar a aumentar los niveles de colesterol HDL en sangre. También es rico en antioxidantes y tiene propiedades antiinflamatorias.</li>
                                    <li><strong>Pescado graso:</strong> El pescado graso, como el salmón, el atún y la caballa, es rico en ácidos grasos omega-3, que pueden ayudar a aumentar los niveles de colesterol HDL en sangre. También son ricos en proteínas y bajos en grasas saturadas.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales.</p>

                            </p>
                            <h4>Colesterol HDL Alto:</h4>
                            <p>
                                <p>Una concentración elevada de lipoproteína de alta densidad (HDL, por sus siglas en inglés) corresponde a concentraciones anormalmente elevadas de colesterol HDL en la sangre. Una concentración elevada de colesterol HDL (el colesterol «bueno») puede reducir el riesgo de infarto de miocardio y de accidentes cerebrovasculares.</p>

                                <p>Para reducir los niveles de colesterol HDL en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Beta-glucano:</strong> Estudios sugieren que el beta-glucano reduce la absorción de colesterol y grasa en el torrente sanguíneo. Con más del 40% de fibra, el salvado de trigo es uno de los mejores remedios naturales para bajar el colesterol malo y los triglicéridos.</li>
                                    <li><strong>Esteroles y estanoles vegetales:</strong> También pueden ayudar a reducir el riesgo de enfermedad cardíaca. Estos ayudan a evitar que tu intestino delgado absorba el colesterol. Esto puede reducir los niveles de colesterol de lipoproteínas de baja densidad (LDL) en tu sangre.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, consulta tu médico.</p>

                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Triglicéridos </h2>
                                </div>
                            </div>

                        <div className="card">
                            <br />
                            <h4>Triglicéridos Bajos:</h4>
                            <p>
                                <p>Aunque los niveles bajos de triglicéridos no suelen ser motivo de preocupación, pueden indicar una alimentación con pocas calorías o alguna enfermedad, como hipertiroidismo o desnutrición.</p>

                                <p>Algunas enfermedades que pueden estar relacionadas con los triglicéridos bajos incluyen enfermedad renal crónica, diabetes, hipotiroidismo, lupus eritematoso, sobrepeso y obesidad, síndrome de ovario poliquístico y apnea del sueño.</p>

                                <p>Para subir los niveles de triglicéridos en sangre, es importante seguir una dieta equilibrada y saludable, rica en grasas saludables, como las que se encuentran en el aceite de oliva, el aguacate y los frutos secos.</p>

                                <p>También es importante evitar el consumo de alcohol y tabaco, y hacer ejercicio físico regularmente.</p>

                            </p>
                            <h4>Triglicéridos Altos:</h4>
                            <p>
                                <p>Los triglicéridos altos pueden contribuir al endurecimiento de las arterias o al engrosamiento de las paredes arteriales, lo que incrementa el riesgo de sufrir un accidente cerebrovascular o un ataque cardiaco.</p>

                                <p>Algunas enfermedades que pueden estar relacionadas con los triglicéridos altos incluyen enfermedad renal crónica, diabetes, hipotiroidismo, lupus eritematoso, sobrepeso y obesidad, síndrome de ovario poliquístico y apnea del sueño.</p>

                                <p>Para reducir los niveles de triglicéridos en sangre, existen varios remedios naturales que pueden ayudar. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Jugo de piña con naranja:</strong> El jugo de piña con el bagazo de la naranja es excelente para bajar los triglicéridos, porque tanto el bagazo de la naranja como el de la piña son ricas en fibras solubles que ayudan a disminuir la concentración de grasas en el torrente sanguíneo, favoreciendo la disminución tanto de los triglicéridos como del colesterol. Ingredientes: 2 vasos de agua; 2 ruedas de piña; 1 naranja con el bagazo; Jugo de 1 limón.</li>
                                    <li><strong>Agua de avena con canela:</strong> La avena contiene betaglucanos, un tipo de fibra soluble que ayuda a disminuir la absorción de grasas a nivel del intestino, y la canela es rica en antioxidantes, por lo que ambas en conjunto favorecen la disminución de los triglicéridos y del colesterol. Ingredientes: 1/2 taza de avena en hojuelas; 500 ml agua; 1 palo de canela.</li>
                                    <li><strong>Jugo de betabel con manzana:</strong> El betabel o la remolacha es un vegetal con un alto contenido en fibras, al igual que la manzana, por lo que ambas en conjunto ayudan a disminuir tanto los triglicéridos como el colesterol “malo”. Además, el limón también ayuda a eliminar y limpiar el organismo gracias a su alto contenido de vitaminas, minerales y antioxidantes. Ingredientes: 50 g de remolacha; 2 manzanas; Jugo de 1 limón; 1 trozo pequeño de jengibre.</li>
                                    <li><strong>Aceite de pescado:</strong> El aceite de pescado es rico en ácidos grasos omega-3, que pueden ayudar a reducir los niveles de triglicéridos en sangre. También son ricos en proteínas y bajos en grasas saturadas. Se recomienda tomar de 3 a 4 g diarios. Cuando vayas a comprarlo, pide un aceite que esté purificado.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, consulta a tu médico.</p>

                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium"> Bilirrubina</h2>
                                </div>
                            </div>
                        <div className="card">
                            <br />
                            <h4>Bilirrubina Baja:</h4>
                            <p>
                                <p>La bilirrubina baja puede ser un síntoma de enfermedades del hígado, páncreas o vesícula biliar, como hepatitis crónica, cirrosis hepática, cálculos biliares o tumores en el páncreas, síndromes de Dubin Johnson y de Rotor.</p>

                                <p>Para subir los niveles de bilirrubina en sangre, es importante seguir una dieta equilibrada y saludable, rica en grasas saludables, como las que se encuentran en el aceite de oliva, el aguacate y los frutos secos. También es importante evitar el consumo de alcohol y tabaco, y hacer ejercicio físico regularmente.</p>

                                <p>Algunas plantas medicinales que pueden ayudar a subir los niveles de bilirrubina en sangre son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a reducir los niveles de bilirrubina en sangre. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>

                            </p>
                            <h4>Bilirrubina Alta:</h4>
                            <p>
                                <p>La bilirrubina alta es un síntoma de enfermedad del hígado, páncreas o vesícula biliar. Algunas enfermedades que pueden estar relacionadas con la bilirrubina alta incluyen hepatitis aguda, cirrosis hepática, cálculos biliares o tumores en el páncreas, síndromes de Dubin Johnson y de Rotor.</p>

                                <p>Para bajar la bilirrubina alta, existen algunos remedios naturales que pueden ayudar. Algunos de ellos son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a reducir los niveles de bilirrubina en sangre. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de bilirrubina en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>
                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium"> Transaminasa Glutámico Oxalacética - TGO</h2>
                                </div>
                            </div>
                        <div className="card">
                            <br />
                            <h4>TGO Bajo:</h4>
                            <p>

                                <p>Los niveles bajos de TGO pueden ser un indicador de buena salud hepática, pero también pueden ser un resultado de una enfermedad hepática avanzada. Algunas enfermedades que pueden estar relacionadas con los niveles bajos de TGO incluyen cirrosis hepática, enfermedad hepática alcohólica, enfermedad hepática autoinmunitaria, enfermedad hepática por depósito de grasa no alcohólica y enfermedad hepática por virus de la hepatitis B o C.</p>

                                <p>No hay plantas medicinales específicas que se hayan demostrado efectivas para bajar los niveles de TGO en sangre. Sin embargo, existen algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función. Algunas de ellas son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a proteger el hígado y a mejorar su función. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>

                            </p>
                            <h4>TGO Alto:</h4>
                            <p>
                                <p>La enzima TGO, también conocida como AST, es una enzima presente en el hígado y puede elevarse en la sangre cuando el hígado presenta una lesión crónica, como una hepatitis o cirrosis, por ejemplo. También puede estar presente en el corazón, pudiendo ser utilizada como marcador cardíaco, ya que podría indicar un infarto o isquemia.</p>

                                <p>Algunas enfermedades que pueden estar relacionadas con el TGO alto incluyen pancreatitis aguda, hepatitis viral aguda, hepatitis alcohólica, cirrosis hepática, absceso en el hígado, cáncer primario en el hígado, entre otros.</p>

                                <p>Existen algunas recomendaciones básicas que pueden ayudar a bajar el TGO alto en la sangre. Algunas plantas medicinales que pueden ayudar a proteger el hígado y a reducir los niveles de TGO en sangre son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a reducir los niveles de TGO en sangre. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a reducir los niveles de TGO en sangre. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de TGO en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a reducir los niveles de TGO en sangre. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>

                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium">Transaminasa Glutámico Pirúvica - TGP </h2>
                                </div>
                            </div>

                        <div className="card" >
                            <br />
                            <h4>TGP Baja:</h4>
                            <p>

                                <p>Los niveles bajos de TGP pueden ser un indicador de buena salud hepática, pero también pueden ser un resultado de una enfermedad hepática avanzada. Algunas enfermedades que pueden estar relacionadas con los niveles bajos de TGP incluyen cirrosis hepática, enfermedad hepática alcohólica, enfermedad hepática autoinmunitaria, enfermedad hepática por depósito de grasa no alcohólica y enfermedad hepática por virus de la hepatitis B o C.</p>

                                <p>No hay plantas medicinales específicas que se hayan demostrado efectivas para bajar los niveles de TGP en sangre. Sin embargo, existen algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función. Algunas de ellas son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a proteger el hígado y a mejorar su función. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, consulta a tu médico.</p>

                            </p>
                            <h4>TGP Alta:</h4>
                            <p>
                                <p>El TGP, también conocido como AST, es una enzima presente en el hígado y puede elevarse en la sangre cuando el hígado presenta una lesión crónica, como una hepatitis o cirrosis, por ejemplo. También puede estar presente en el corazón, pudiendo ser utilizada como marcador cardíaco, ya que podría indicar un infarto o isquemia. Algunas enfermedades que pueden estar relacionadas con el TGP alto incluyen pancreatitis aguda, hepatitis viral aguda, hepatitis alcohólica, cirrosis hepática, absceso en el hígado, cáncer primario en el hígado, entre otros.</p>

                                <p>No hay plantas medicinales específicas que se hayan demostrado efectivas para bajar los niveles de TGP en sangre. Sin embargo, existen algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función. Algunas de ellas son:</p>

                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a proteger el hígado y a mejorar su función. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>

                                <p>Recuerda que estos remedios naturales no deben sustituir los tratamientos médicos convencionales. Si tienes dudas o necesitas más información, consulta a tu médico.</p>
                            </p>
                        </div>

                        <div className="flex w-full relative align-items-center justify-content-center my-3 px-4"><div class="border-top-1 surface-border top-50 left-0 absolute w-full">
                            </div>
                                <div className="px-2 z-1 surface-0 flex align-items-center">
                                  <Image src={`/images/recom.png`} alt="Image" width="35" height="40" />
                                    <h2 className="text-900 font-medium"> Gamma-Glutamil Transferasa - GGT </h2>
                                </div>
                            </div>

                        <div className="card" > 
                            <br />
                            <h4>GGT Baja:</h4>
                            <p>
                                Los niveles bajos de GGT pueden ser un indicador de buena salud hepática, pero también pueden ser un resultado de una enfermedad hepática avanzada.
                                Algunas enfermedades que pueden estar relacionadas con los niveles bajos de GGT incluyen cirrosis hepática, enfermedad hepática alcohólica, enfermedad hepática autoinmunitaria, enfermedad hepática por depósito de grasa no alcohólica y enfermedad hepática por virus de la hepatitis B o C.
                                No hay plantas medicinales específicas que se hayan demostrado efectivas para bajar los niveles de GGT en sangre.
                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a proteger el hígado y a mejorar su función. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>
                            </p>
                            <h4>GGT Alta:</h4>
                            <p>
                                La Gamma glutamil transferasa  es una enzima presente en el hígado y puede elevarse en la sangre cuando el hígado presenta una lesión crónica, como una hepatitis o cirrosis.
                                También puede estar presente en el corazón, pudiendo ser utilizada como marcador cardíaco, ya que podría indicar un infarto o isquemia . Algunas enfermedades que pueden estar relacionadas con el GGT alto incluyen pancreatitis aguda, hepatitis viral aguda, hepatitis alcohólica, cirrosis hepática, absceso en el hígado, cáncer primario en el hígado, entre otros.
                                No hay plantas medicinales específicas que se hayan demostrado efectivas para bajar los niveles de GGT en sangre.Sin embargo, existen algunas plantas medicinales que pueden ayudar a proteger el hígado y a mejorar su función
                                <ul>
                                    <li><strong>Diente de león:</strong> Esta planta es un excelente depurativo hepático y ayuda a proteger el hígado. Puedes tomarla en infusión o añadirla a tus ensaladas.</li>
                                    <li><strong>Alcachofera:</strong> Es rica en cinarina, un compuesto que ayuda a proteger el hígado y a mejorar su función. Puedes añadirla a tus ensaladas, guisos, etc.</li>
                                    <li><strong>Cardo mariano:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                    <li><strong>Verbena:</strong> Es una planta que ayuda a proteger el hígado y a mejorar su función. Puedes tomarla en infusión o añadirla a tus comidas.</li>
                                </ul>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default recomendaciones