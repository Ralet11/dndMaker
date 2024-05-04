import Character from "../models/characters.model.js";
import CharacterItem from "../models/characterItems.model.js";
import Item from "../models/items.model.js";


// Controlador para crear un nuevo personaje
export const createCharacter = async (req, res) => {
    try {
        const {
            name,
            raceId,
            classId,
            str,
            dex,
            con,
            int,
            wis,
            cha,
            armorClass,
            speed,
            hitPoints,
            competencia,
            userId,
            level,
            alignment,
            personalityTraits,
            backstory,
            img
        } = req.body;

        // Crear el personaje en la base de datos
        const character = await Character.create({
            name,
            raceId,
            classId,
            str,
            dex,
            con,
            int,
            wis,
            cha,
            armorClass,
            speed,
            hitPoints,
            competencia,
            userId,
            level,
            alignment,
            personalityTrait1: personalityTraits[0],
            personalityTrait2: personalityTraits[1],
            personalityTrait3: personalityTraits[2],
            backstory,
            img
        });

        res.status(201).json({ character, message: 'Personaje creado correctamente.' });
    } catch (error) {
        console.error('Error al crear el personaje:', error);
        res.status(500).json({ message: 'Hubo un error al crear el personaje.' });
    }
};

export const getCharactersById = async (req, res) => {
    
    const {id} = req.body
    
    try {
        // Buscar todos los personajes que coincidan con el userId
        const characters = await Character.findAll({
            where: {
                userId: id
            }
        });

        res.status(200).json(characters);
    } catch (error) {
        console.error("Error al obtener personajes:", error);
        res.status(500).json({ error: "Error al obtener personajes" });
    }
};

export const getAll = async (req, res) => {
    try {
        const response = await Character.findAll()
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

export const addItem = async (req, res) => {
    const { itemId, characterId, quantity } = req.body;
    
    try {
        // Crear una nueva instancia de CharacterItem con los datos proporcionados
        const newItem = await CharacterItem.create({
            characterId,
            itemId,
            quantity,
            equipped: false
        });

        // Enviar la nueva instancia como respuesta
        res.status(201).json({msg: "item added correctly", status: "OK"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al agregar el ítem al personaje." });
    }
};


export const getCharacterItems = async (req, res) => {
    const { characterId } = req.body;
    
    try {
        const characterItems = await CharacterItem.findAll({
            where: { characterId },
            include: [{
                model: Item
            }]
        });

        res.status(200).json(characterItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener los ítems del personaje." });
    }
};



export const useItem = async (req, res) => {
    const { itemId, characterId } = req.body;

    try {
        // Busca el CharacterItem correspondiente al characterId y itemId
        const characterItem = await CharacterItem.findOne({
            where: {
                characterId: characterId,
                itemId: itemId
            }
        });

        if (characterItem) {
            // Si el ítem existe para este personaje
            let newQuantity = characterItem.quantity - 1;
            if (newQuantity <= 0) {
                // Si la nueva cantidad es 0 o menos, elimina el ítem
                await CharacterItem.destroy({
                    where: {
                        characterId: characterId,
                        itemId: itemId
                    }
                });
                res.status(200).json({ message: "El ítem ha sido usado y eliminado.", status: "ok" });
            } else {
                // Si la nueva cantidad es mayor que 0, actualiza la cantidad
                await CharacterItem.update(
                    { quantity: newQuantity },
                    {
                        where: {
                            characterId: characterId,
                            itemId: itemId
                        }
                    }
                );
                res.status(200).json({ message: "Se ha usado un ítem.", status: "ok" });
            }
        } else {
            // Si el ítem no existe para este personaje
            res.status(404).json({ message: "El ítem no está en posesión del personaje." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al usar el ítem." });
    }
};

export const equipItem = async (req, res) => {
    const { itemId, characterId } = req.body;

    try {
        // Busca todos los CharacterItem del personaje con su respectivo Item
        const characterItems = await CharacterItem.findAll({
            where: {
                characterId: characterId
            }
        });

        if (characterItems) {
            // Encuentra el item que se va a equipar
            const itemToEquip = characterItems.find(item => item.itemId === itemId);

            if (!itemToEquip) {
                return res.status(404).json({ message: "El ítem no está en posesión del personaje." });
            }

            // Desactiva todos los otros items equipados con el mismo subtype
            const subtype = itemToEquip.subtype;
            await Promise.all(characterItems.map(async (item) => {
                if (item.equipped && item.subtype === subtype && item.itemId !== itemId) {
                    await CharacterItem.update(
                        { equipped: false },
                        {
                            where: {
                                characterId: characterId,
                                itemId: item.itemId
                            }
                        }
                    );
                }
            }));

            // Si el item es de tipo 'accessory', desactiva todos los otros items con tipo 'accessory'
            if (itemToEquip.type === 'accessory') {
                await CharacterItem.update(
                    { equipped: false },
                    {
                        where: {
                            characterId: characterId,
                            type: 'accessory',
                            equipped: true
                        }
                    }
                );
            }

            // Equipa el item seleccionado
            await CharacterItem.update(
                { equipped: true },
                {
                    where: {
                        characterId: characterId,
                        itemId: itemId
                    }
                }
            );

            res.status(200).json({ message: "El ítem ha sido equipado correctamente.", status: "ok" });
        } else {
            res.status(404).json({ message: "No se encontraron ítems para este personaje." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al equipar el ítem." });
    }
};

export const unequipItem = async (req, res) => {
    const { itemId, characterId } = req.body;

    try {
        // Busca el CharacterItem correspondiente al characterId y itemId
        const characterItem = await CharacterItem.findOne({
            where: {
                characterId: characterId,
                itemId: itemId
            }
        });

        if (characterItem) {
            // Desactiva el item para que no esté equipado
            await CharacterItem.update(
                { equipped: false },
                {
                    where: {
                        characterId: characterId,
                        itemId: itemId
                    }
                }
            );

            res.status(200).json({ message: "El ítem ha sido desequipado correctamente.", status: "ok" });
        } else {
            // Si el ítem no existe para este personaje
            res.status(404).json({ message: "El ítem no está en posesión del personaje." });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al desequipar el ítem." });
    }
};