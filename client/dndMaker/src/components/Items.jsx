import axios from 'axios';
import React, { useEffect, useState } from 'react';
import getParamsEnv from '../functions/getParamsEnv';

const { API_URL_BASE } = getParamsEnv();

const Items = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSubtype, setSelectedSubtype] = useState('all');
  const [allCharacters, setAllCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/api/character/getAll`);
        setAllCharacters(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${API_URL_BASE}/api/items/getAll`);
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => {
    filterItems();
  }, [searchTerm, selectedType, selectedSubtype]);

  const filterItems = () => {
    let filtered = [...items];

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    if (selectedSubtype !== 'all') {
      filtered = filtered.filter(item => item.subtype === selectedSubtype);
    }

    setFilteredItems(filtered);
  };

  const assignItemToCharacter = async (itemId) => {
    try {
        const response = await axios.post(`${API_URL_BASE}/api/character/addItem`, {
          itemId,
          characterId: selectedCharacter,
          quantity: selectedQuantity
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  };

  console.log(selectedCharacter, selectedQuantity)

  return (
    <div className="pt-20 px-4 md:px-0">
      <h1 className="text-2xl font-bold mb-4">Items</h1>
      <div className="flex flex-wrap mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <select
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ml-2 mt-2 md:mt-0 md:ml-2"
        >
          <option value="all">Todos los tipos</option>
          <option value="weapon">Arma</option>
          <option value="armor">Armadura</option>
          <option value="consumable">Consumible</option>
          <option value="accessory">Accesorio</option>
        </select>
        <select
          value={selectedSubtype}
          onChange={e => setSelectedSubtype(e.target.value)}
          className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ml-2 mt-2 md:mt-0 md:ml-2"
        >
          <option value="all">Todos los subtipos</option>
          <option value="main">Principal</option>
          <option value="second">Secundario</option>
          <option value="shield">Escudo</option>
          <option value="chest">Pecho</option>
          <option value="gloves">Guantes</option>
          <option value="boots">Botas</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-sm text-gray-500 mb-2">Cantidad: {item.quantity}</p>
              <p className="text-sm text-gray-500 mb-2">Tipo: {item.type}</p>
              {item.subtype && (
                <p className="text-sm text-gray-500 mb-2">Subtipo: {item.subtype}</p>
              )}
              {item.bonus && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Bonus:</p>
                  <ul className="list-disc pl-5">
                    {Object.entries(item.bonus).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4">
                <label htmlFor={`character-select-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">Asignar a:</label>
                <select
                  id={`character-select-${item.id}`}
                  value={selectedCharacter}
                  onChange={e => setSelectedCharacter(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Seleccionar personaje</option>
                  {allCharacters.map(character => (
                    <option key={character.id} value={character.id}>{character.name}</option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  max={item.quantity}
                  value={selectedQuantity}
                  onChange={e => setSelectedQuantity(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-2"
                />
                <button
                  onClick={() => assignItemToCharacter(item.id)}
                  className="w-full mt-2 bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                  Asignar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;