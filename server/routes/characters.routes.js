import { Router } from "express";
import { addItem, createCharacter, equipItem, getAll, getCharacterItems, getCharactersById, unequipItem, updateAttribute, useItem } from "../controllers/character.controller.js";


const routerCharacters = Router();

routerCharacters.post('/create', createCharacter )
routerCharacters.post('/characterByUserId', getCharactersById )
routerCharacters.get('/getAll', getAll)
routerCharacters.post('/addItem', addItem)
routerCharacters.post('/getCharacterItems', getCharacterItems )
routerCharacters.post('/useItem', useItem )
routerCharacters.post('/equipItem', equipItem )
routerCharacters.post('/unEquipItem', unequipItem )
routerCharacters.put('/updateAttribute', updateAttribute )

export default routerCharacters