import React from "react"
import logo from "../Img/logo.png"
import region from "../Img/Region.png"
import login from "../Img/Login.png"
import menu from "../Img/Menu.png"


const Header = () => {

    return (
        <div className="Homepage">
            <div className="Homepage-nav">
                <a href="https://www.skyscanner.es" className="Homepage-nav-title"><img src={logo}/></a>
                <div className="Homepage-nav-menus">
                    <button className="Homepage-nav-menus-region"><img src={region}/></button>
                    <button className="Homepage-nav-menus-login"><img src={login}/></button>
                    <button className="Homepage-nav-menus-menu"><img src={menu}/></button>
                </div>
            </div>
            <h1>Busca rápido en tus sitios de viajes favorito</h1>
            <div className="Homepage-searchcontrols">
                <div></div>
            </div>
        </div>
    )
}

export default Header