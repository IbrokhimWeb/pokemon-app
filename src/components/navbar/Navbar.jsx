import React from 'react';
import s from "./Navbar.module.scss";
import text_logo from "../../assets/text_logo.png"

const Navbar = () => {
    return (
        <>
            <main className={`${s.navbar} ai__center`}>
                <img src={text_logo} alt="PoKeMoN" />
                <section className="ai__center">
                    <ion-icon name="search"></ion-icon>
                    <input type="text" placeholder="Search..." />
                </section>
            </main>
        </>
    )
}

export default Navbar;
