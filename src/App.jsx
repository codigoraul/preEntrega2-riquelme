
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros'

import Footer from './components/Footer'
import Contacto from './components/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/item/:id" element={ <ItemDetailContainer />}/>
          <Route path="/productos" element={ <ItemListContainer />}/>
          <Route path="/productos/:categoria" element={ <ItemListContainer />}/>
          <Route path="/nosotros" element={ <Nosotros />}/>
          <Route path="/contacto" element={<Contacto />}/>
        </Routes>

        <Footer />


      </BrowserRouter>
       
    </>
  )
}

export default App
