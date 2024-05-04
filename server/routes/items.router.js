import { Router } from "express";
import { getAll } from "../controllers/items.controller.js";



const routerItems = Router();

routerItems.get('/getAll', getAll )

export default routerItems