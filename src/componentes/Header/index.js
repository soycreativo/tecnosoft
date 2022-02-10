import React, {useContext} from 'react';
import Tecnosoft from "../../images/Tecnosoft.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import Buscador from '../../componentes/Buscador';


export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito


    const toogleMenu = () =>{
        setMenu(!menu)
    }

  return (
      <header>
          <Buscador />
          <div className="menu">
              <box-icon name="menu"></box-icon>
              
          </div>
          <Link to="/">
              <div className="logo">
              <img src={Tecnosoft} alt="logo" width="150"/>
              </div>
          </Link>
    <ul>
        <li>
            <Link to="/">Inicio</Link>
        </li>
        <li>
            <Link to="/">Productos</Link>
        </li>

    </ul>
    

<div className="cart" onClick={toogleMenu}>
    <box-icon name="cart"></box-icon>
    <span className="item_total">{carrito.length}</span>
</div>
      </header>

  )
}

