import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerContent}>
                <img className={s.logo} src='logo.png'></img>
                <p>Obmen</p>
            </div>

        </header>
    )
}

export default Header;