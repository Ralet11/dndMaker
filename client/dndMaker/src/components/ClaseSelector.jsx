import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClaseSelector = ({setNewPersonaje, newPersonaje}) => {
  const [claseSeleccionada, setClaseSeleccionada] = useState(null);

  const clases = [
    {
        id: 1,
        nombre: "Bárbaro",
        imagen: "https://i.pinimg.com/564x/2a/d7/6d/2ad76de802b34f114fe1d772cff2907b.jpg",
        info: "Para algunos, su rabia brota de la comunión con espíritus de animales salvajes. Otros recurren a su hirviente reserva de ira frente a un mundo lleno de dolor. Para los bárbaros, la furia es un poder que no sólo les proporciona un frenesí ciego en la batalla, sino también extraordinarios reflejos, resistencia y proezas de fuerza.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un hacha a dos manos o (b) cualquier arma cuerpo a cuerpo marcial;\n(a) dos hachas de mano o (b) cualquier arma sencilla;\nun paquete de explorador y cuatro jabalinas.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d12\n\nRequisitos para multiclase: Fuerza 13\n\nHabilidades a nivel 1:\n\n- Defensa sin armadura: Mientras no llevas la armadura, tu CA es igual a 10 + tu modificador por Destreza + tu modificador por Constitución. Sigues pudiendo utilizar escudo y recibir sus beneficios.\n\n- Furia: Luchas con una ferocidad primitiva en la batalla. Durante tu turno, puedes dejarte llevar por la furia como acción adicional. Mientras estás en furia, consigues los siguientes beneficios si no llevas armadura pesada:\n  - Tienes ventaja en las pruebas de Fuerza y en las tiradas de salvación de Fuerza.\n  - Cuando realizas un ataque con armas cuerpo a cuerpo usando Fuerza, recibes un bonificador a la tirada de daño que aumenta según vas subiendo niveles de bárbaro, como se muestra en la columna «Daño de furia» de la tabla del bárbaro.\n  - Tienes resistencia al daño contundente, perforante y cortante.\n  - Si sabes lanzar conjuros, no puedes lanzarlos ni concentrarte en ellos mientras estás en furia.\n  - Tu furia dura un minuto. Acaba antes si te quedas inconsciente o, si antes de que acabe tu turno, no has atacado a una criatura hostil o no has recibido daño desde tu último turno. También puedes terminar tu furia durante tu turno como acción adicional.\n\n 2 veces por día / +2 de daño",
        hitPoints: 19
      },
    {
        id: 2,
      nombre: "Bardo",
      imagen: "https://i.pinimg.com/736x/89/0c/5f/890c5fd869e6c9e1c67bee9f760dadf5.jpg",
     info: "Ya sea un erudito, un poeta o un canalla, un bardo teje su magia a través de sus palabras y su música para inspirar a los aliados, desmoralizar a los enemigos, manipular mentes, crear ilusiones e incluso sanar heridas.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un estoque, (b) una espada larga o (c) cualquier arma sencilla;\n(a) un paquete de diplomático o (b) un paquete de artista;\n(a) un laúd o (b) cualquier otro instrumento musical;\narmadura de cuero y una daga.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d8\n\nRequisitos para multiclase: Carisma 13\n\nHabilidades a nivel 1:\n\n- Inspiración bárdica: Puedes inspirar a los demás con palabras o música emotivas. Para hacerlo, usa una acción adicional durante tu turno para elegir una criatura a menos de 60 pies de ti que no seas tú mismo y que pueda oírte. Esa criatura recibe un dado de inspiración de bardo.\n\n  Una vez durante los siguientes diez minutos, la criatura puede tirar el dado y sumar el resultado a una prueba de característica, tirada de ataque o tirada de salvación. Puede esperar hasta después de haber tirado el d20 para decidir si usa el dado de inspiración de bardo, pero debe decidirlo antes de que el director de juego diga si la tirada ha tenido éxito o ha fallado. Una vez se tira el dado de inspiración de bardo, se pierde. Una criatura solo puede tener un dado de inspiración de bardo a la vez.\n\n  Puedes usar este rasgo tantas veces como tu valor de Carisma (mínimo 1). Recuperas los usos que hayas gastado cuando finalices un descanso largo.\n\n- Lanzamiento de conjuros: La característica con la que lanzas tus conjuros de bardo es Carisma. Tu magia proviene del corazón y del alma que pones en la interpretación de tu música u recitación. Utilizas Carisma cuando un conjuro se refiere a tu característica para lanzar conjuros. Además, usas tu modificador por Carisma para establecer la CD de tu tirada de salvación para los conjuros de bardo que lances y cuando hagas una tirada de ataque con uno.\n\n  CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Carisma\n  Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Carisma\n\n- A nivel 1 conoces 4 conjuros y 4 trucos. Puedes lanzar trucos sin límite y 2 conjuros de nivel 1 por descanso.",
     hitPoints: 11
    },
    {
        id: 3,
      nombre: "Clérigo",
      imagen: "https://i.pinimg.com/564x/d1/eb/e7/d1ebe73f087426c6a28272928e01a378.jpg",
       info: "Los clérigos son intermediarios entre el mundo mortal y los distantes planos divinos. Tan diferentes entre ellos como los dioses a los que sirven, los clérigos se esfuerzan por personificar las obras de sus deidades. No son sacerdotes ordinarios, un clérigo se encuentra imbuido de magia divina.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) una maza o (b) un martillo de guerra (si eres competente);\n(a) una cota de escamas, (b) una armadura de cuero o (c) una cota de malla (si eres competente);\n(a) una ballesta ligera y 20 virotes o (b) cualquier arma sencilla;\n(a) un paquete de sacerdote o (b) un paquete de explorador;\nun escudo y un símbolo sagrado.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d8\n\nRequisitos para multiclase: Sabiduría 13\n\nHabilidades nivel 1:\n\n- Lanzamiento de conjuros: Tú preparas la lista de los conjuros que puedes lanzar: elige un número de conjuros de clérigo igual a tu modificador por Sabiduría + tu nivel de clérigo (mínimo un conjuro)\n\n  Puedes cambiar tu lista de conjuros preparados durante un descanso prolongado. Preparar una nueva lista de conjuros de clérigo requiere pasar tiempo orando y meditando: al menos 1 minuto por nivel de conjuro para cada uno.\n\n- Característica para lanzar conjuros: La característica con la que lanzas tus conjuros de clérigo es Sabiduría. El poder de tus conjuros proviene de la devoción que profesas hacia tu deidad. Cuando un conjuro se refiere a tu característica para lanzar conjuros, utiliza Sabiduría. Además, usas tu modificador por Sabiduría para establecer la CD de la tirada de salvación de los conjuros de clérigo que lances y cuando hagas una tirada de ataque con uno.\n\n  CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Sabiduría\n  Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Sabiduría\n\n- Puedes lanzar ilimitados trucos y 2 conjuros de nivel 1 / descanso (habla con tu DM para que te indique la lista de conjuros de clerigo)\n\n- Dominio Divino: Escoge un dominio entre el dominio de la vida, el del descubrimiento, el de la conquista, el de lo salvaje, el del sol, el de la oscuridad y el de la prosperidad (Habla con tu DM para el detalle), que te otorga conjuros de dominio y otros rasgos a partir del nivel 1",
       hitPoints: 14
    },
    {
        id: 4,
      nombre: "Druida",
      imagen: "https://i.pinimg.com/564x/a3/3b/b6/a33bb6f0f8111c6682a615d57a90868d.jpg",
      info: "Ya sea invocando a las fuerzas elementales o emulando a las criaturas del mundo animal, los druidas son la personificación de la resistencia, astucia y furia de la naturaleza. Dicen no tener un dominio sobre la naturaleza. En lugar de eso, se ven como una extensión de la voluntad indomable de la misma.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un escudo de madera o (b) cualquier arma sencilla;\n(a) una cimitarra o (b) cualquier arma cuerpo a cuerpo sencilla;\narmadura de cuero, un paquete de explorador y un canalizador druídico.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d8\n\nRequisitos para multiclase: Sabiduría 13\n\nHabilidades a nivel 1:\n\n- Lanzamiento de conjuros: Tú preparas la lista de conjuros que puedes lanzar: elige un número de conjuros de druida igual a tu modificador por Sabiduría + tu nivel de druida (mínimo un conjuro). Los conjuros deben ser de un nivel para el que tengas espacios de conjuro.\n\n  También puedes cambiar tu lista de conjuros preparados cuando hagas un descanso prolongado. Preparar una nueva lista de conjuros requiere pasar tiempo rezando y meditando: al menos un minuto por cada nivel de conjuro de cada conjuro de la lista.\n\n- Característica para lanzar conjuros: La característica con la que lanzas tus conjuros de druida es Sabiduría, dado que tu magia emana de la devoción y la afinidad hacia la naturaleza. Usa tu Sabiduría cuando un conjuro se refiera a tu característica para lanzar conjuros. Además, usa tu modificador por Sabiduría para establecer la CD de la tirada de salvación de tus conjuros de druida y cuando hagas una tirada de ataque con uno.\n\n  CD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Sabiduría\n  Modificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Sabiduría\n\n- Puedes lanzar ilimitados trucos y 2 conjuros de nivel 1 / descanso (haba con tu DM para que te indique la lista de conjuros de Druida)",
      hitPoints: 13
    },
    {
        id: 5,
      nombre: "Guerrero",
      imagen: "https://i.pinimg.com/564x/d5/f4/e3/d5f4e39262dc4e195b809915dd485f46.jpg",
      info: "Todos los guerreros comparten un dominio magistral de las armas y armaduras, y un exhaustivo conocimiento de las habilidades del combate. Además, están muy relacionados con la muerte, tanto repartiéndola como mirándola fijamente, desafiantes.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) una cota de malla o (b) una armadura de cuero, un arco largo y 20 flechas;\n(a) un arma marcial y un escudo o (b) dos armas marciales;\n(a) una ballesta ligera y 20 virotes o (b) dos hachas de mano;\n(a) un paquete de explorador de mazmorras o (b) un paquete de explorador.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d10\n\nRequisitos para multiclase: Fuerza 13 o Destreza 13\n\nHabilidades a nivel 1:\n\n- Tomar aliento: Dispones de una fuente ilimitada de vitalidad a la que puedes recurrir para protegerte del daño. Durante tu turno, puedes usar una acción adicional para recuperar un número de puntos de golpe igual a 1d10 + tu nivel de guerrero. Una vez usas este rasgo, debes terminar un descanso corto o largo antes de poder usarlo otra vez.\n\n- Estilos de combate: Escoge uno entre Combate con armas grandes, combate a dos armas, defensa, duelo, proteccion, tiro con arco (habla con tu Dm para ver los detalles de cada uno)",
      hitPoints: 15
    },
    {
        id: 6,
      nombre: "Mago",
      imagen: "https://i.pinimg.com/564x/5e/14/68/5e1468c919bd5c564e5c6aeae2cda11c.jpg",
      info: "Los magos son los practicantes supremos de la magia, definidos y unidos como una clase por los hechizos que conjuran. A partir de la sutil onda de la magia que impregna el cosmos, los magos lanzan explosivos hechizos de fuego, arcos voltaicos, sutiles engaños y brutales formas de control mental.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un bastón o (b) una daga;\n(a) un saquito de componentes o (b) un canalizador arcano;\n(a) un paquete de erudito o (b) un paquete de explorador;\nun libro de conjuros.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d6\n\nRequisitos para multiclase: Inteligencia 13\n\nHabilidades a nivel 1:\n\n- Libro de conjuros: En el nivel 1, tienes un libro de conjuros con seis conjuros de mago de nivel 1 de tu elección. Tu libro de conjuros es un repositorio de los conjuros de mago que conoces, excepto los trucos, los cuales tienes memorizados.\n\n- Característica para lanzar conjuros: La característica con la que lanzas tus conjuros de mago es Inteligencia, dado que los aprendes a través del estudio y la memorización. Usas Inteligencia cuando un conjuro se refiera a tu característica para lanzar conjuros. Además, usas tu modificador por Inteligencia para establecer la CD de la tirada de salvación de los conjuros de mago que lances y cuando hagas una tirada de ataque con uno.\n\nCD de la salvación de conjuros = 8 + tu bonificador por competencia + tu modificador por Inteligencia\n\nModificador al ataque con conjuros = tu bonificador por competencia + tu modificador por Inteligencia\n\nPuedes lanzar ilimitados trucos y 3 conjuros de nivel 1 / descanso (habla con tu DM para que te indique la lista de conjuros de mago",
      hitPoints: 10
    },
    {
        id: 7,
      nombre: "Paladín",
      imagen: "https://i.pinimg.com/736x/c8/37/47/c837473183183e16366134de5c3d0608.jpg",
     info: "Los paladines son campeones del bien y la justicia, dotados de poderes divinos para luchar contra el mal y proteger a los indefensos. Sirven como la mano derecha de los dioses en el mundo mortal.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un arma marcial y un escudo o (b) dos armas marciales;\n(a) cinco jabalinas o (b) cualquier arma cuerpo a cuerpo sencilla;\n(a) un paquete de sacerdote o (b) un paquete de explorador;\nuna cota de malla y un símbolo sagrado.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d10\n\nRequisitos para multiclase: Fuerza 13 y Carisma 13\n\nHabilidades a nivel 1:\n\n- Sentidos divinos: Para tus sentidos, la presencia de un gran mal se percibe como un hedor nocivo, mientras que un bien poderoso es como música celestial. Como acción, puedes abrir tus sentidos para detectar tales fuerzas. Hasta el final de tu siguiente turno, sabes dónde se encuentra cualquier celestial, infernal o no muerto que esté a menos de 60 pies de ti y que no esté completamente cubierto. Sabes de qué tipo es (celestial, infernal o no muerto), pero no su identidad. Dentro del mismo radio, también puedes detectar la presencia de cualquier lugar u objeto que haya sido bendecido o desacralizado, como con el conjuro Consagrar.\n\n- Imponer las manos: Tu toque sagrado puede curar heridas. Tienes una reserva de poder curativo que se recupera cuando terminas un descanso largo. Con dicha reserva, puedes recuperar un número de puntos de golpe igual a tu nivel de paladín multiplicado por 5. Como acción, puedes tocar a una criatura y extraer poder de la reserva para hacer que esta recupere puntos de golpe hasta la cantidad máxima que quede en tu reserva. De forma alternativa, puedes gastar 5 puntos de golpe de tu reserva de curación para curar al objetivo de una enfermedad o neutralizar el veneno que le afecta. Puedes curar varias enfermedades y neutralizar varios venenos con un único uso de Imposición de manos gastando puntos de golpe independientes para cada uno. Este rasgo no afecta ni a los no muertos ni a los constructos.",
     hitPoints: 17
    },
    {
        id: 8,
      nombre: "Pícaro",
      imagen: "https://i.pinimg.com/564x/6b/34/9c/6b349c430a490fb7b48d0ebf31cd3174.jpg",
      info: "Los pícaros confían en sus habilidades, el sigilo y las vulnerabilidades de sus oponentes para lograr sacar ventaja en cualquier situación. Tienen un don para encontrar la solución a prácticamente cualquier problema, demostrando un ingenio y versatilidad, que es la piedra angular de cualquier buen grupo de aventureros.\n\nEquipo: Además del que obtengas por tu trasfondo, empiezas con el siguiente equipo:\n\n(a) un estoque o (b) una espada corta;\n(a) un arco corto y una aljaba de 20 flechas o (b) una espada corta;\n(a) un paquete de ladrón, (b) un paquete de explorador de mazmorras o (c) un paquete de explorador;\n(a) una armadura de cuero, dos dagas y herramientas de ladrón.\n\nOrigen: Reglas básicas\n\nPuntos de Golpe: d8\n\nRequisitos para multiclase: Destreza 13\n\nHabilidades a nivel 1:\n\n- Pericia: Elige dos de tus competencias con habilidades, o una de tus competencias con habilidades y tu competencia con herramientas de ladrón. Tu bonificador por competencia se multiplica por 2 en cualquier prueba de característica que hagas que utilice una de las dos competencias elegidas. En el nivel 6, puedes elegir dos competencias más (con habilidades o con herramientas de ladrón) para conseguir este beneficio.\n\n- Ataque furtivo: Sabes aprovechar la distracción de un enemigo para atacarlo por la espalda. Una vez por turno, puedes infligir daño adicional a una criatura a la que impactes con un ataque si tienes ventaja en la tirada de ataque. El ataque debe usar un arma sutil o a distancia. Este rasgo funciona aunque no tengas ventaja en la tirada de ataque si otro enemigo del objetivo no incapacitado está a menos de 5 pies de él y si tú no tienes desventaja en la tirada de ataque. La cantidad de daño adicional aumenta conforme subes de nivel en esta clase:\n\n- Nivel 1: Daño adicional: 1d6\n- Nivel 3: Daño adicional: 2d6\n- Nivel 5: Daño adicional: 3d6\n- Nivel 7: Daño adicional: 4d6\n- Nivel 9: Daño adicional: 5d6\n- Nivel 11: Daño adicional: 6d6\n- Nivel 13: Daño adicional: 7d6\n- Nivel 15: Daño adicional: 8d6\n- Nivel 17: Daño adicional: 9d6\n- Nivel 19: Daño adicional: 10d6",
      hitPoints: 13
    }
  ];

  const seleccionarClase = (clase) => {

    console.log(clase)
    setNewPersonaje({ ...newPersonaje, classId: clase.id, hitPoints: clase.hitPoints });
    setClaseSeleccionada(clase);
  };

  const quitarClase = () => {
    setClaseSeleccionada(null)
    setNewPersonaje({ ...newPersonaje, classId: "" });

  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Selecciona tu Clase:</h2>
      <Slider {...settings}>
        {clases.map((clase, index) => (
          <div key={index}>
            <div className="max-w-md mx-auto">
              <img src={clase.imagen} alt={clase.nombre} className="w-full h-80 object-cover rounded-t-md" />
              <div className={`bg-white p-4 rounded-b-md shadow-lg ${claseSeleccionada && claseSeleccionada.id === clase.id ? 'bg-green-100' : ''}`}>
                <h3 className="text-gray-800 text-xl font-bold mb-2">{clase.nombre}</h3>
                <p className="text-gray-700 whitespace-pre-line">{clase.info}</p>
                {claseSeleccionada && claseSeleccionada.id === clase.id ? (
                  <button onClick={() => quitarClase(clase)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                ) : (
                  <button onClick={() => seleccionarClase(clase)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Elegir</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default ClaseSelector;