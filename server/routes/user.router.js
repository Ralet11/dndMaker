import { Router } from "express";
import { login, registerUser } from "../controllers/user.controller.js";


const routerUser = Router();

routerUser.post('/register', registerUser )
routerUser.post('/login', login )
export default routerUser