import React, { useState } from 'react';

const StatsSelector = ({ setNewPersonaje }) => {
    const [stats, setStats] = useState({
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    });
    const [randomNumber, setRandomNumber] = useState(null);
    const [selectedStat, setSelectedStat] = useState(null);
    const [diceRolled, setDiceRolled] = useState(false);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 20) + 1;
    }

    const handleRandomize = () => {
        if (!diceRolled) {
            const randomNum = generateRandomNumber();
            setRandomNumber(randomNum);
            setDiceRolled(true);
        }
    }

    const handleSelectStat = (stat) => {
        setSelectedStat(stat);
        setStats(prevStats => ({
            ...prevStats,
            [stat]: randomNumber
        }));
        setRandomNumber(null);
        setDiceRolled(false);
        setNewPersonaje(prevState => ({
            ...prevState,
            [stat]: randomNumber
        }));
    }

    return (
        <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden bg-gray-800 shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Tira los dados para determinar tus atributos</h2>
            <p className="text-gray-300 mb-4">Haz clic en "Tirar dado" para ver el número generado y luego elige un atributo al que quieras asignarlo. Haz esto para cada uno de los atributos. ¡Buena suerte!</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(stats).map((key, index) => (
                    <div key={index} className="p-4 bg-gray-700 rounded-md text-center relative">
                        <div className="text-white font-bold text-lg mb-2">{key === "str" ? "Fuerza" : key === "dex" ? "Destreza" : key === "con" ? "Constitución" : key === "int" ? "Inteligencia" : key === "wis" ? "Sabiduría" : "Carisma"}</div>
                        <div className="text-3xl text-white mb-4">{stats[key]}</div>
                        {!stats[key] && (
                            <button onClick={() => handleSelectStat(key)} className="absolute bottom-0 left-0 right-0 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded">
                                Elegir
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center items-center">
                
                    <button onClick={handleRandomize} disabled={diceRolled} className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mr-4 ${diceRolled && "opacity-50 cursor-not-allowed"}`}>
                        Tirar dado
                    </button>
            
                {randomNumber && (
                    <div>
                        <p className="font-bold text-xl text-white mb-2">Número aleatorio: {randomNumber}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StatsSelector;