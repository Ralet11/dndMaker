import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'
import Home from './views/Home'
import Personajes from './views/Personajes'
import CrearPersonaje from './views/CrearPersonaje'
import Items from './components/Items'
import ItemsView from './views/ItemsView'



function App() {


  return (
    <>
 
      <Routes>

        <Route path="/" element={<HomeView />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/personajes" element={<Personajes />}></Route>
        <Route path="/crearPersonaje" element={<CrearPersonaje />}></Route>
        <Route path="/items" element={<ItemsView />}></Route>

      </Routes>
      
    </>
  )
}

export default App
