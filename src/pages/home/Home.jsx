import React, { useEffect, useState } from 'react';
import s from "./Home.module.scss";
import Card from './../../components/card/Card';
import { api } from "../../api/axios";

const Home = () => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        api.get(`/v2/pokemon?offset=${offset}&limit=12`)
            .then(res => setData(res?.data?.results))
            .catch(err => console.error(err))
    }, [data])

    return (
        <>
            <main className={`${s.home}`}>
                <section className={`${s.items} grid4`}>
                    {
                        data.map((item, index) => (
                            <Card key={index} data={item} offset={offset} />
                        ))
                    }
                </section>
                <section className={`${s.in__dec} flex__center`}>
                    <button onClick={() => setOffset(offset > 0 ? offset - 1 : 0)}>-</button>
                    <h1>{offset}</h1>
                    <button onClick={() => setOffset(offset + 1)}>+</button>
                </section>
            </main>
        </>
    )
}

export default Home;
