import React, { useEffect, useState } from 'react';
import s from "./Home.module.scss";
import Card from './../../components/card/Card';
import { api } from "../../api/axios";

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        api.get(`/v2/pokemon?offset=${0}&limit=${12}`)
            .then(res => setData(res?.data?.results))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <main className={`${s.home} grid4`}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <br /><br /><br /><br />
            </main>
        </>
    )
}

export default Home;
