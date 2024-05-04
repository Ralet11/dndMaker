import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import RazaSelector from '../components/RazaSelector';
import ClaseSelector from '../components/ClaseSelector';
import StatsSelector from '../components/statsSelector';
import axios from 'axios';
import getParamsEnv from '../functions/getParamsEnv';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom/dist';

const {API_URL_BASE} = getParamsEnv()

const CrearPersonaje = () => {
    const user = useSelector((state) => state?.user)
    console.log(user)
    const navigate = useNavigate()
    const [newPersonaje, setNewPersonaje] = useState({
        name: "",
        raceId: "",
        classId: "",
        str: "",
        dex: "",
        con: "",
        wis: "",
        int: "",
        cha: "",
        armorClass: null,
        speed: 30,
        hitPoints: null,
        competencia: 2,
        userId: user.id,
        level: 1,
        alignment: "",
        personalityTraits: ["", "", ""],
        backstory: "",
        img: ""
    });

    const alignments = ["Bueno", "Malvado", "Caótico", "Neutral"];
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPersonaje(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleTraitChange = (index, value) => {
        setNewPersonaje(prevState => {
            const personalityTraits = [...prevState.personalityTraits];
            personalityTraits[index] = value;
            return { ...prevState, personalityTraits };
        });
    }

    const handleCreateCharacter = async () => {
        if (!newPersonaje.name || !newPersonaje.raceId || !newPersonaje.classId || !newPersonaje.str || !newPersonaje.dex || !newPersonaje.con || !newPersonaje.wis || !newPersonaje.int || !newPersonaje.cha) {
            setError("Por favor completa todos los campos necesarios.");
        } else {
            // Aquí puedes enviar el nuevo personaje al servidor o realizar otras acciones
         try {
            const response = await axios.post(`${API_URL_BASE}/api/character/create`, newPersonaje)
            if (response.statusText === 'Created') {
                navigate("/personajes")
            }
            console.log(response)
         } catch (error) {
            console.log(error)
         }
            setError("");
        }
    }

    console.log(newPersonaje)

    return (
        <>
            <TopBar />
            <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
                <h1 className="text-lg font-bold mb-4">CREAR PERSONAJE</h1>
                <RazaSelector setNewPersonaje={setNewPersonaje} newPersonaje={newPersonaje} />
                <ClaseSelector setNewPersonaje={setNewPersonaje} newPersonaje={newPersonaje} />
                <StatsSelector setNewPersonaje={setNewPersonaje} />

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                    <input type="text" name="name" value={newPersonaje.name} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Alineación:</label>
                    <select name="alignment" value={newPersonaje.alignment} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="">Seleccionar Alineación</option>
                        {alignments.map((alignment, index) => (
                            <option key={index} value={alignment}>{alignment}</option>
                        ))}
                    </select>
                </div>
                {[1, 2, 3].map(index => (
                    <div className="mb-4" key={index}>
                        <label className="block text-sm font-medium text-gray-700">Rasgo de personalidad {index}:</label>
                        <input type="text" value={newPersonaje.personalityTraits[index - 1]} onChange={e => handleTraitChange(index - 1, e.target.value)} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                ))}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Historia, miedos y objetivos:</label>
                    <textarea name="backstory" value={newPersonaje.backstory} onChange={handleChange} rows="4" className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                    <p className="text-xs text-gray-500 mt-1">Aquí puedes escribir la historia, miedos y objetivos del personaje.</p>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Imagen del personaje (URL):</label>
                    <input type="text" name="img" value={newPersonaje.img} onChange={handleChange} className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="mb-4">
                    {newPersonaje.img && (
                        <img src={newPersonaje.img} alt="Imagen del personaje" className="w-full h-auto" />
                    )}
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mt-4">
                    <button onClick={handleCreateCharacter} className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50">Crear Personaje</button>
                </div>
            </div>
        </>
    );
}

export default CrearPersonaje;