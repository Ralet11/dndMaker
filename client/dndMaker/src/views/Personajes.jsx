import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import PersonajesList from '../components/PersonajesList';
import { PiSwordFill, PiBrainBold } from "react-icons/pi";
import { FaShoePrints, FaShieldAlt } from "react-icons/fa";
import { SiOpslevel } from "react-icons/si";
import { GiBlackBook } from "react-icons/gi";
import { LuSmilePlus } from "react-icons/lu";
import { GiLevelTwo } from "react-icons/gi";
import { FaHeart, FaPersonRunning } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import getParamsEnv from '../functions/getParamsEnv';
import { useSelector } from 'react-redux';
import axios from 'axios';

const {API_URL_BASE} = getParamsEnv()

const Personajes = () => {
    const [selectedPersonaje, setSelectedPersonaje] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [aux, setAux] = useState(false)
    const [itemInfoModal, setItemInfoModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(false)
 
    const [characterItems, setCharacterItems] = useState({})
    const user = useSelector((state) => state?.user)
    console.log(user)
    const [inventory, setInventory] = useState([
    ]);
    const [bonus, setBonus] = useState({});
    const [personajes, setPersonajes] = useState([]);

    const equipItem = async (itemId) => {
        /* const itemToEquip = inventory.find(item => item.id === itemId);

        if (!itemToEquip) {
            return;
        }

        const updatedInventory = inventory.map(item => {
            if (item.type === 'accessory') {
                // Desequipar solo los accesorios si se agrega un nuevo accesorio
                if (item.id !== itemId && itemToEquip.type === 'accessory') {
                    item.equipped = false;
                }
            } else if (item.type === itemToEquip.type && item.subtype === itemToEquip.subtype && item.id !== itemId) {
                item.equipped = false;
            }
            return item;
        });

        setInventory(updatedInventory.map(item => {
            if (item.id === itemId) {
                item.equipped = !item.equipped;
            }
            return item;
        })); */

        try {
            const response = await axios.post(`${API_URL_BASE}/api/character/equipItem`, {itemId: itemId, characterId: selectedPersonaje})
            if(response.data.status === "ok") {
                setAux(!aux)
            }
        } catch (error) {
            console.log(error)
        }
    };

    

    useEffect(() => {
        const fetchCharacterItems = async () => {
           try {
            const response = await axios.post(`${API_URL_BASE}/api/character/getCharacterItems`, {characterId: selectedPersonaje})
            
            let items = []

            response.data.map(item => {
                item.Item.quantity = item.quantity
                item.Item.equipped = item.equipped
                items.push(item.Item)
            })

            

            setInventory(items)
           } catch (error) {
            console.log(error)
           }
        }

        fetchCharacterItems()
    },[selectedPersonaje, aux])

    useEffect(() => {
        calculateInventoryBonus();
    }, [inventory]);

    useEffect(() => {
        const fetchCharacterById = async () => {
            try {
                const response = await axios.post(`${API_URL_BASE}/api/character/characterByUserId`, {id: user.id})
                setPersonajes(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCharacterById()
    },[])

    console.log(inventory)

    const calculateInventoryBonus = () => {
        let newBonus = {};
        let speedBonus = 0;

        inventory.forEach(item => {
            if (item.equipped && item.bonus) {
                if (item.bonus.speed) {
                    speedBonus += item.bonus.speed;
                } else {
                    Object.entries(item.bonus).forEach(([attribute, value]) => {
                        newBonus[attribute] = (newBonus[attribute] || 0) + value;
                    });
                }
            }
        });

        newBonus.speed = speedBonus;

        setBonus(newBonus);
    };


    const unequipItem = async (itemId) => {
        /* const updatedInventory = inventory.map(item => {
            if (item.id === itemId) {
                item.equipped = false;
            }
            return item;
        });
        setInventory(updatedInventory); */

        try {
            const response = await axios.post(`${API_URL_BASE}/api/character/unEquipItem`, {itemId: itemId, characterId: selectedPersonaje})
            if(response.data.status === "ok") {
                setAux(!aux)
            }
        } catch (error) {
            console.log(error)
        }
    };

    const useItem = async (itemId) => {
        /* let updatedCharacter = null;
        const updatedInventory = inventory.map(item => {
            if (item.id === itemId && item.type === 'consumable' && item.quantity > 0) {
                updatedCharacter = { ...selectedCharacter };
                if (item.bonus) {
                    Object.keys(item.bonus).forEach(attribute => {
                        updatedCharacter[attribute] += item.bonus[attribute];
                    });
                }
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });

        if (updatedCharacter) {
            const updatedPersonajes = personajes.map(personaje => {
                if (personaje.id === selectedPersonaje) {
                    return updatedCharacter;
                }
                return personaje;
            });
            setInventory(updatedInventory.filter(item => item.quantity > 0));
            setPersonajes(updatedPersonajes);
        } else {
            setInventory(updatedInventory);
        } */

        try {
            const response = await axios.post(`${API_URL_BASE}/api/character/useItem`, {characterId: selectedPersonaje, itemId: itemId})
            console.log(response)
            
            if (response.data.status === "ok") {
                setAux(!aux)
            }
        } catch (error) {
            console.log(error)
        }

    };
    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = (item) => {
        setModalOpen(false);
        setModalContent('');
    };

    const selectedCharacter = personajes.find(personaje => personaje.id === selectedPersonaje);

    const getAttributeValue = (attribute) => {
        if (selectedCharacter && bonus && bonus[attribute]) {
            return selectedCharacter[attribute] + bonus[attribute];
        }
        return selectedCharacter ? selectedCharacter[attribute] : '';
    };

    const getAttributeModifier = (value) => {
        const modifierTable = {
            20: '+5',
            19: '+5',
            18: '+4',
            17: '+4',
            16: '+3',
            15: '+3',
            14: '+2',
            13: '+2',
            12: '+1',
            11: '+1',
            10: '0',
            9: '-1',
            8: '-1',
            7: '-2',
            6: '-2',
            5: '-3',
            4: '-3',
            3: '-4',
            2: '-4',
            1: '-5',
        };

        return modifierTable[value] || '';
    };

    const openModalItem = (item) => {
        setSelectedItem(item)
        setModalContent("item");
        setModalOpen(true);
    }

    return (
        <>
            <TopBar />
            <div className='container py-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="lg:flex lg:flex-col lg:justify-start lg:items-start">
                        <h2 className="text-lg font-semibold mb-4">Elige tu personaje</h2>
                        <PersonajesList personajes={personajes} setSelectedPersonaje={setSelectedPersonaje} selectedPersonaje={selectedPersonaje} />
                    </div>
                    <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
                        {selectedCharacter && (
                            <div className="bg-red-500 p-6 rounded-lg shadow-md">
                                <h2 className="text-lg font-semibold mb-4 text-center">{selectedCharacter.name}</h2>
                                <div className="flex items-center justify-center mb-4 border-b-2 border-white pb-4">
    <img src={selectedCharacter.img} alt={selectedCharacter.name} className="w-24 h-24 rounded-full mr-4 border-4 border-white" />
    <div>
        <p className="text-white"><GiLevelTwo className="inline mr-2" /> <strong>Nivel:</strong> {selectedCharacter.level}</p>
        <p className="text-white"><FaHeart className="inline mr-2" /> <strong>Vida:</strong> {getAttributeValue('hitPoints')} / {selectedCharacter.hitPoints}</p>
        <p className="text-white"><SiOpslevel className="inline mr-2" /> <strong>Clase de Armadura:</strong> {getAttributeValue('armorClass')}</p>
        <p className="text-white"><SiOpslevel className="inline mr-2" /> <strong>Experiencia:</strong> {selectedCharacter.experience}</p>
        <p className="text-white"><FaShoePrints className="inline mr-2" /> <strong>Competencia:</strong> {selectedCharacter.competencia}</p>
        <p className="text-white"><FaShieldAlt className="inline mr-2" /> <strong>Velocidad:</strong> {selectedCharacter.speed}</p>
    </div>
</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2 text-white">Atributos</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="text-white">
                                            <p><PiSwordFill className="inline mr-2" /> <strong>Fue:</strong> {getAttributeValue('str')} ({getAttributeModifier(getAttributeValue('str'))})</p>
                                            <p><FaPersonRunning className="inline mr-2" /> <strong>Des:</strong> {getAttributeValue('dex')} ({getAttributeModifier(getAttributeValue('dex'))})</p>
                                            <p><FaPersonRunning className="inline mr-2" /> <strong>Con:</strong> {getAttributeValue('con')} ({getAttributeModifier(getAttributeValue('con'))})</p>
                                        </div>
                                        <div className="text-white">
                                            <p><PiBrainBold className="inline mr-2" /> <strong>Int:</strong> {getAttributeValue('int')} ({getAttributeModifier(getAttributeValue('int'))})</p>
                                            <p><GiBlackBook className="inline mr-2" /> <strong>Sab:</strong> {getAttributeValue('wis')} ({getAttributeModifier(getAttributeValue('wis'))})</p>
                                            <p><LuSmilePlus className="inline mr-2" /> <strong>Car:</strong> {getAttributeValue('cha')} ({getAttributeModifier(getAttributeValue('cha'))})</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4 border-white" />
                                <div className="text-center bg-gray-800 rounded-lg p-6 shadow-xl">
                                    <h3 className="text-lg font-semibold text-white mb-4">Armamento y Armadura</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                        {inventory.filter(item => (item.type === 'weapon' || item.type === 'armor' || item.type === 'accessory') && item.equipped).map(item => (
                                            <div key={item.id} className={`bg-gray-700 p-4 rounded-lg border-2 border-green-400 relative flex items-center justify-center mb-4`}>
                                                <img onClick={()=> openModalItem(item)} src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-white mr-4" />
                                                <div>
                                                    <p className="text-white"><strong>{item.type === 'weapon' ? 'Arma:' : 'Armadura:'}</strong></p>
                                                    <p className="ml-4 text-green-400">{item.name}</p>
                                                    {item.type === 'weapon' && <p className="ml-4 text-green-400">Daño: 10</p>}
                                                    {item.subtype && <p className="ml-4 text-gray-400">{item.subtype}</p>}
                                                    <button
                                                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                                                        onClick={() => unequipItem(item.id)}
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <hr className="my-4 border-white" />
                                <div className="mt-4 text-center border-t-2 border-white pt-4">
                                    <button className="bg-white text-red-500 px-4 py-2 rounded-lg mr-2" onClick={() => openModal('Inventario')}><FaBoxOpen className="inline mr-2" />Inventario</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md h-80 overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Detalles de {modalContent}</h3>
                            <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>Cerrar</button>
                        </div>
                        {modalContent === 'Inventario' && (
                            <div>
                                {inventory.map(item => (
                                    <div key={item.id} className="mb-4 flex items-center">
                                        {item.equipped ? null : (
                                            <>
                                                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full border-2 border-gray-500 mr-4" />
                                                <div>
                                                    <p className="font-semibold">{item.name}</p>
                                                    <p>{item.description}</p>
                                                    <p>Cantidad: {item.quantity}</p>
                                                    {item.type === 'consumable' && item.quantity > 0 && (
                                                        <button className="bg-red-500 text-white px-2 py-1 rounded-lg mt-2" onClick={() => useItem(item.id)}>Usar</button>
                                                    )}
                                                    {item.type !== 'consumable' && (
                                                        <button className={`bg-green-500 text-white px-2 py-1 rounded-lg mt-2`} onClick={() => equipItem(item.id)}>Equipar</button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                        {modalContent === 'item' && (
                            <div>
                             
                                    <div key={selectedItem.id} className="mb-4 flex items-center">
                                      
                                            <>
                                                <img src={selectedItem.img} alt={selectedItem.name} className="w-12 h-12 rounded-full border-2 border-gray-500 mr-4" />
                                                <div>
                                                    <p className="font-semibold">{selectedItem.name}</p>
                                                    <p>{selectedItem.description}</p>


                                                </div>
                                            </>
                                        
                                    </div>
                             
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Personajes;