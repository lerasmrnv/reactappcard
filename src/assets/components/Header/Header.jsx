import React from "react";
import { Link } from "react-router-dom";

import logoApp from "../../images/logo.png";

export default function Header() {
    return (
        <div >
            <header className="headerContainer">
                <Link to="/" className="titleApp">
                    <img className="logoApp" alt="logo" src={logoApp} />
                    <h2 className="headerTitle">Карточки слов</h2>
                </Link>

                <nav className="nav">
                    <ul>
                        <li className="nav-game">
                            <Link to="/game" className="nav-game__link">Игра <br /> "Запомни меня"</Link>
                        </li>
                    </ul>
                </nav>
            </header >

        </div>
    )
}
