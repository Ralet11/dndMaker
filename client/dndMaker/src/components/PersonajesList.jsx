import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';

const PersonajesList = ({ setSelectedPersonaje, selectedPersonaje, personajes }) => {
  const [newPersonajeName, setNewPersonajeName] = useState("");
  const [newPersonajeImg, setNewPersonajeImg] = useState("");

  const navigate = useNavigate()


  const handleSelectPersonaje = (personajeId) => {
    setSelectedPersonaje(personajeId);
  };

  const handleAddPersonaje = () => {
    navigate("/crearPersonaje")
    
  };

  return (
    <div className="flex flex-col items-center">
      <div className="overflow-x-auto w-full mb-4">
        <div className="flex">
          {personajes?.map((personaje) => (
            <div
              key={personaje.id}
              className={`flex flex-col items-center mr-8 p-5 rounded-lg shadow-md cursor-pointer
                          ${selectedPersonaje === personaje.id ? 'bg-blue-500' : 'bg-white hover:bg-blue-200'}`}
              onClick={() => handleSelectPersonaje(personaje.id)}
            >
              <img src={personaje.img} alt={personaje.name} className="w-20 h-20 rounded-full mb-2" />
              <div>{personaje.name}</div>
            </div>
          ))}
          <div className="flex flex-col items-center mr-8 p-5 rounded-lg shadow-md cursor-pointer bg-white hover:bg-blue-200">
            <button onClick={handleAddPersonaje} className="w-20 h-20 rounded-full mb-2 border-2 border-dashed border-gray-400 flex items-center justify-center">
              + 
            </button>
            <div>Agregar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonajesList;