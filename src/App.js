import React from 'react';
import { Header } from "./componentes/Header";
import { ProductosLista } from "./componentes/Productos/index";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import { DataProvider } from "./context/DataProvider";
import { Carrito } from "./componentes/Carrito";
import Contacto1 from "./images/img01.png"
import Contacto2 from "./images/img02.png"
import Contacto3 from "./images/img03.png"




function App() {


  
  
  return (

    
 

    
    
     <DataProvider>
           
    <div className="App">
      

     <Router>
     
        <Header />
        <Carrito />
        <Paginas />
        </Router>

    <ProductosLista />

    <ul>
    <img src={Contacto3} alt=""/>
    <li>Jstivenbernal94</li>
    </ul>


    <ul>
    <img src={Contacto2} alt=""/>
    <li>jsbernal@tecnosofttit.com</li>
    </ul>

    <ul>
    <img src={Contacto1} alt=""/>
    <li>+57 3102734641</li>
    </ul>

    </div>

    </DataProvider>
    
    
  );
}

export default App;
