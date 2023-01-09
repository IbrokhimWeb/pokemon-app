import React from 'react';
import s from "./Welcome.module.scss";

import text_logo from "../../assets/text_logo.png";
import { Link } from 'react-router-dom';

const Welcome = ({ open, setOpen }) => {

    return (
        <>
            <main className={`${s.welcome}`}>
                <section className={`${s.top} flex__center`}>
                    <img src={text_logo} alt="PoKeMoN" />
                </section>
                <section className={`${s.center} flex__center`}>
                    <span></span>
                </section>
                <section className={`${s.bottom} flex__center`}>
                    <Link className={`${s.start} flex__center`} to="/" onClick={() => setOpen(true)}>start</Link>
                </section>
            </main>
        </>
    )
}

export default Welcome;
