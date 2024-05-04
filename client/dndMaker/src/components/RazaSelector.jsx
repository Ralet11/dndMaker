import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RazaSelector = ({setNewPersonaje, newPersonaje}) => {
  const [razaSeleccionada, setRazaSeleccionada] = useState(null);

  const razas = [
    {
        id: 1,
      nombre: "Draconido",
      imagen: "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vYTMyYmZlYjEtZWRmMS00MmM4LWI3ZmItOTk1OGE5MmE5OGU2LmpwZWc.webp",
      info: "Tu herencia dracónida se manifiesta en una serie de rasgos que compartes con otros dracónidos. Los dracónidos tienden hacia los extremos en la guerra cósmica entre el bien y el mal. La mayoría son buenos, pero los que se ponen de lado del mal pueden ser terriblemente malignos.\n\nRasgos raciales Dracónido\nTu personaje Dracónido tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 30 pies\n\n- Linaje dracónico: Tienes un antepasado dragón. Elige un tipo de dragón de la tabla de antepasado dragón. Tu arma de aliento y tu resistencia al daño están determinadas por el tipo de dragón, como se indica en la tabla:\n\n  - Azul: Relámpago - Línea de 5 a 30 pies (salvación de Destreza)\n  - Blanco: Frío - Cono de 15 pies (salvación de Constitución)\n  - De bronce: Relámpago - Línea de 5 a 30 pies (salvación de Destreza)\n  - De cobre: Ácido - Línea de 5 a 30 pies (salvación de Destreza)\n  - De oro: Fuego - Cono de 15 pies (salvación de Destreza)\n  - De oropel: Fuego - Línea de 5 a 30 pies (salvación de Destreza)\n  - De plata: Frío - Cono de 15 pies (salvación de Constitución)\n  - Negro: Ácido - Línea de 5 a 30 pies (salvación de Destreza)\n  - Rojo: Fuego - Cono de 15 pies (salvación de Destreza)\n  - Verde: Veneno - Cono de 15 pies (salvación de Constitución)\n\n- Ataque de aliento: Puedes usar tu acción para exhalar energía destructiva. Tu antepasado dragón determina el tamaño, la forma y el tipo de daño de la exhalación. Cuando usas tu arma de aliento, todas las criaturas que se encuentren en el área de la exhalación deben hacer una tirada de salvación, según determine tu antepasado dragón. La CD de esta tirada de salvación es igual a 8 + tu modificador por Constitución + tu bonificador por competencia. Si la criatura falla la tirada, recibe 2d6 puntos de daño, y si tiene éxito, la mitad. El daño aumenta a 3d6 en el nivel 6, a 4d6 en el nivel 11 y a 5d6 en el nivel 16. Después de usar tu arma de aliento, tienes que completar un descanso corto o largo para volver a utilizarla.\n\n- Resistencia al daño: Tienes resistencia al tipo de daño asociado con tu antepasado dragón.\n\nIdiomas: Puedes hablar, leer y escribir común y dragón. Se cree que el dragón es uno de los idiomas más antiguos, y a menudo se usa en el estudio de la magia. Esta lengua suena áspera para la mayoría de criaturas e incluye muchas consonantes duras y sibilantes.\n\nModificadores: Los personajes Dracónido obtienen los siguientes modificadores y competencias:\n+2 Fuerza\n+1 Carisma",
    },
    {   
        id: 2,
        nombre: "Elfo",
        imagen: "https://i.pinimg.com/564x/a0/40/99/a04099a56da86a2d9b3e35079367614c.jpg",
        info: "Los elfos circulan libremente por las tierras de los humanos, donde siempre son bienvenidos pero nunca se encuentran como en casa. Son gentes conocidas por su poesía, baile, canto, saber y artes mágicas, y gustan de las cosas cuya belleza sea natural y sencilla.\n\nRasgos raciales Elfo\nTu personaje Elfo tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 30 pies\n- Visión en la oscuridad: Estás acostumbrado a la luz crepuscular de los bosques y al cielo nocturno. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante y, en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.\n- Linaje feérico: Tienes ventaja en las tiradas de salvación para no quedar hechizado y no puedes quedarte dormido por ningún efecto mágico.\n- Trance: Los elfos no necesitan dormir, en lugar de ello meditan profundamente y permanecen semiinconscientes durante cuatro horas al día (conocido como «trance»). Descansar de este modo te otorga los mismos beneficios que dormir ocho horas a un humano.\n- Idiomas: Puedes hablar, leer y escribir común y élfico. El élfico es un idioma fluido, con entonaciones sutiles y una gramática intrincada. La literatura élfica es rica y variada, y sus poemas y canciones son famosos entre el resto de razas. Muchos bardos aprenden este idioma para incluir poemas élficos a sus repertorios.\n\nModificadores: Los personajes Elfo obtienen los siguientes modificadores y competencias:\n+2 Destreza\nCompetencia: Percepción\n\nHabilidad adicional: Salto Élfico. Una vez por combate, puedes transportarte a un lugar desocupado a 30 pies que puedas ver."
      },
      {
        id: 3,
        nombre: "Enano",
        imagen: "https://i.pinimg.com/736x/cd/b5/9e/cdb59efba1eab52c3fd349aaf74b4119.jpg",
        info: "Los enanos son conocidos por su habilidad en el arte de la guerra, su gran resistencia a los castigos, su conocimiento de los secretos de la tierra, su dedicación al trabajo y su capacidad para beber cerveza. Los enanos son gente poco dada a las risas o las bromas, y suelen mostrarse recelosos con los desconocidos; sin embargo, se comportan de forma generosa con los que se ganan su confianza.\n\nOrigen: Reglas básicas\n\nRasgos raciales Enano\nTu personaje Enano tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 25 pies\n- Visión en la oscuridad: Tienes una visión superior en la oscuridad y en la penumbra. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.\n- Fortaleza enana: Tienes ventaja en las tiradas de salvación contra venenos y eres resistente al daño por veneno.\n- Afinidad con la piedra: Cuando realices una prueba de Inteligencia (Historia) relacionada con el origen de una obra de mampostería, se considera que tienes competencia con la habilidad de Historia y añades a la prueba tu bonificador por competencia multiplicado por 2 en lugar del bonificador habitual.\n- Idiomas: Puedes hablar, leer y escribir común y enano. El idioma enano está lleno de consonantes duras y sonidos guturales, características que se aplican también a cualquier otra lengua que hable un enano.\n- Velocidad enana: Tu velocidad no se reduce por llevar armadura pesada.\n\nModificadores: Los personajes Enano obtienen los siguientes modificadores y competencias:\n+2 Constitución\nCompetencia: Hacha de mano, Hacha de batalla, Martillo de guerra y Martillo ligero\nTienes competencia con las herramientas de artesano que elijas entre: armero, cervecero o albañil."
      },
      {
        id: 4,
        nombre: "Gnomo",
        imagen: "https://s3-eu-west-2.amazonaws.com/dungeon20/images/180/medium-992cb90bb7079a65d978bdc5317e279913570d57.jpg?1603970262",
        info: "Los gnomos son bienvenidos en todas partes como técnicos, alquimistas e inventores, pero muchos de ellos prefieren quedarse entre los suyos aunque sus habilidades estén muy demandadas. Viven en cómodas madrigueras excavadas bajo colinas onduladas y frondosas. Aunque en estos lugares abundan los animales, ir de caza es una pésima idea.\n\nOrigen: Reglas básicas\n\nRasgos raciales Gnomo\nTu personaje Gnomo tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 25 pies\n- Visión en la oscuridad: Al estar acostumbrado a la vida subterránea, tienes una visión superior en la oscuridad y en la penumbra. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.\n- Astucia de gnomo: Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia.\n- Idiomas: Puedes hablar, leer y escribir común y gnomo. El idioma gnomo, que utiliza la grafía enana, es famoso por sus tratados técnicos y sus catálogos de conocimiento sobre el mundo natural.\n\nModificadores: Los personajes Gnomo obtienen los siguientes modificadores y competencias:\n+2 Inteligencia"
      },
      {
        id: 5,
        nombre: "Humano",
        imagen: "https://i.pinimg.com/736x/36/da/c1/36dac1de094be312f15ab92fe183a454.jpg",
        info: "La mayoría de los humanos son descendientes de pioneros, conquistadores, comerciantes, viajeros, refugiados y demás emigrantes. Por tanto, las tierras humanas son una amalgama de pueblos distintos en cuanto a aspectos físicos, culturales, religiosos y políticos.\n\nOrigen: Reglas básicas\n\nSubraza de Humano\n\nRasgos raciales Humano\nTu personaje Humano tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 30 pies\n\nModificadores: Los personajes Humano obtienen los siguientes modificadores y competencias:\n+1 Fuerza, Destreza, Constitución, Inteligencia, Sabiduría y Carisma\n\nRasgos raciales Humano\nComo subraza de Humano, tu personaje comparte también los rasgos su raza principal:\n\n- Edad: Alcanzan la madurez poco antes de los veinte años y viven menos de un siglo.\n- Alineamiento: Los humanos no tienen tendencia a ningún alineamiento en particular. Entre ellos puede encontrarse tanto lo mejor como lo peor.\n- Tamaño: La altura y complexión de los humanos varían enormemente de un individuo a otro, midiendo entre un poco menos de 5 pies y algo más de 6 pies de altura. Independientemente de cual sea tu altura concreta, tu tamaño es Mediano.\n- Idiomas: Puedes hablar, leer y escribir común y un idioma adicional de tu elección. Los humanos normalmente aprenden los idiomas de aquellos con los que se relacionan, aunque sean dialectos poco conocidos. Les gusta adornar su habla con palabras tomadas de otras lenguas: maldiciones orcas, expresiones musicales elfas, términos militares enanos, y así."
      },
      {
        id: 6,
        nombre: "Semiorco",
        imagen: "https://i.pinimg.com/736x/df/3c/fc/df3cfc077651f597641c12b277a5ed81.jpg",
        info: "Tu personaje semiorco tiene ciertos rasgos que derivan de su ancestro orco. Los semiorcos heredan la tendencia hacia el caos de sus progenitores orcos y no están muy inclinados hacia el bien. Los semiorcos que se crían entre orcos y que permanecen entre ellos suelen ser malignos.\n\nOrigen: Reglas básicas\n\nRasgos raciales Semiorco\nTu personaje Semiorco tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 30 pies\n\n- Visión en la oscuridad: Gracias a tu sangre orca, tienes una visión superior en la oscuridad y en la penumbra. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.\n\n- Aguante incansable: Cuando tus puntos de golpe se reducen a 0 pero no mueres inmediatamente, puedes quedarte con 1 punto de golpe. No puedes volver a utilizar esta característica hasta que completes un descanso prolongado.\n\n- Ataques salvajes: Cuando saques un crítico en un ataque con un arma cuerpo a cuerpo, puedes volver a tirar uno de los dados de daño del arma y añadirlo al daño adicional del golpe crítico.\n\n- Idiomas: Puedes hablar, leer y escribir común y orco. El orco es un idioma áspero, chirriante y con consonantes duras. No tiene grafía propia, se escribe con la grafía enana.\n\n- Edad: Los semiorcos maduran un poco más rápido que los humanos, llegando a la edad adulta en torno a los catorce años. También envejecen visiblemente más deprisa y rara vez viven más de setenta y cinco años.\n\n- Tamaño: Los semiorcos son ligeramente más altos y corpulentos que los humanos, midiendo desde 5 hasta bastante por encima de 6 pies de altura. Eres de tamaño Mediano.\n\n- Modificadores: Los personajes Semiorco obtienen los siguientes modificadores y competencias:\nCompetencia: Intimidar\n+2 Fuerza\n+1 Constitución"
      },
      {
        id: 7,
        nombre: "Tiefling",
        imagen: "https://i.pinimg.com/736x/23/dc/25/23dc253f5bc1d6f66f67876d57a99f4a.jpg",
        info: "Puede que los tieflings no tengan una tendencia innata hacia el mal, pero muchos de ellos acaban ahí. Maligna o no, una fuerza externa inclina a muchos tieflings hacia un alineamiento caótico.\n\nOrigen: Reglas básicas\n\nRasgos raciales Tiefling\nTu personaje Tiefling tiene unos cuantos rasgos en común con el resto de miembros de su raza:\n\n- Velocidad: 30 pies\n\n- Visión en la oscuridad: Gracias a tu herencia infernal, tienes una visión superior en la oscuridad y en la penumbra. Puedes ver en la penumbra a una distancia de 60 pies como si fuera luz brillante, y en la oscuridad como si fuera penumbra. En la oscuridad no puedes distinguir colores, solo tonos de gris.\n\n- Legado infernal: Conoces el truco Taumaturgia. Cuando alcanzas el nivel 3, puedes lanzar el conjuro Represión infernal como un conjuro de nivel 2 una vez con este rasgo y volver a utilizarlo cuando completes un descanso prolongado. Cuando alcanzas el nivel 5, puedes lanzar el conjuro Oscuridad una vez con este rasgo y volver a utilizarlo cuando completes un descanso prolongado. La característica con la que lanzas estos conjuros es Carisma.\n\n- Resistencia infernal: Tienes resistencia al daño por fuego.\n\n- Idiomas: Puedes hablar, leer y escribir común e infernal.\n\n- Modificadores: Los personajes Tiefling obtienen los siguientes modificadores y competencias:\n+2 Carisma\n+1 Inteligencia\nConjuro preparado: Taumaturgia\nConjuro preparado: Reprensión infernal a nivel 3\nConjuro preparado: Oscuridad a nivel 5"
      }
    // Agrega más razas aquí
  ];

  const seleccionarRaza = (raza) => {
    setNewPersonaje({ ...newPersonaje, raceId: raza.id });
    setRazaSeleccionada(raza);
  };
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
      <h2 className="text-2xl font-bold mb-4">Selecciona tu raza:</h2>
      <Slider {...settings}>
        {razas.map((raza, index) => (
          <div key={index}>
            <div className="max-w-md mx-auto">
              <img src={raza.imagen} alt={raza.nombre} className="w-full h-80 object-cover rounded-t-md" />
              <div className={`bg-white p-4 rounded-b-md shadow-lg ${razaSeleccionada && razaSeleccionada.id === raza.id ? 'bg-green-100' : ''}`}>
                <h3 className="text-gray-800 text-xl font-bold mb-2">{raza.nombre}</h3>
                <p className="text-gray-700 whitespace-pre-line">{raza.info}</p>
                {razaSeleccionada && razaSeleccionada.id === raza.id ? (
                  <button onClick={() => setRazaSeleccionada(null)} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancelar</button>
                ) : (
                  <button onClick={() => seleccionarRaza(raza)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Elegir</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RazaSelector;