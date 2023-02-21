import React from "react"
import logo from "../Img/logo.png"
import region from "../Img/Region.png"
import login from "../Img/Login.png"
import menu from "../Img/Menu.png"


const Header = () => {

    return (
        <div className="homepage">
            <div className="homepage-nav">
                <a href="https://www.skyscanner.es" className="homepage-nav-title"><img src={logo}/></a>
                <div className="homepage-nav-menus">
                    <button className="homepage-nav-menus-region"><img src={region}/></button>
                    <button className="homepage-nav-menus-login"><img src={login}/></button>
                    <button className="homepage-nav-menus-menu"><img src={menu}/></button>
                </div>
            </div>
            <h1>Busca rápido en tus sitios de viajes favorito</h1>
            <div className="homepage-searchcontrols">
                <div className="homepage-searchcontrols-container">
                    <div className="homepage-searchcontrols-from">
                        <span>Desde</span>
                        <input/>
                    </div>
                </div>
                <div className="homepage-searchcontrols-container">
                    <div className="homepage-searchcontrols-from">
                        <span>A</span>
                        <input/>
                    </div>
                </div>
                <div className="homepage-searchcontrols-container">
                    <div className="homepage-searchcontrols-from">
                        <span>Ida</span>
                        <input/>
                    </div>
                </div>
                <div className="homepage-searchcontrols-container">
                    <div className="homepage-searchcontrols-from">
                        <span>Vuelta</span>
                        <input/>
                    </div>
                </div>
                <div className="homepage-searchcontrols-container">
                    <div className="homepage-searchcontrols-from">
                        <span>Viaje y clase de cabina</span>
                        <input/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header