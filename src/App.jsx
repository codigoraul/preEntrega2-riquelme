
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/Nosotros'

import Footer from './components/Footer'
import Contacto from './components/Contacto'
import { CartContext } from './context/CartContext'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { firestore } from './firebase/client'

function App() {
  useEffect(()=>{
    const docRef =  doc(firestore, "items", "USqGNZXNnjiUqBYN9O2r" );
    getDoc(docRef).then((snapshot) => {
      console.log({snapshot})
      if(snapshot.exists()){
        console.log("La info del cocumento es :", snapshot.data());
      }else{
        console.log("El documento no existe")
      }
  });
    
  },[]);

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = {...item, cantidad}

    const nuevoCarrito = [...carrito]

    const estaEnelCarrito = carrito.find((producto) =>producto.id === itemAgregado.id);

    if(estaEnelCarrito){
      estaEnelCarrito.cantidad +=  cantidad;
      setCarrito(nuevoCarrito)
    }else{
      nuevoCarrito.push(itemAgregado)
    }
    setCarrito(nuevoCarrito)
    
  }
  const cantidadEncarrito = (item, cantidad) => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  return (
    
    <CartContext.Provider value={ {carrito, agregarAlCarrito, cantidadEncarrito} }>
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
       
    </CartContext.Provider>
  )
}

export default App
