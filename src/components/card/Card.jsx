import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from "./Card.module.scss";

import { api } from "../../api/axios";

const Card = ({ data }) => {
    const [item, setItem] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        api.get(data?.url).then(res => setItem(res)).catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if (item) {
            api.get(item?.data?.forms[0]?.url).then(({ data }) => setTypes(data?.types)).catch(err => console.error(err))
        }
    }, [item])

    // console.log(types);
    return (
        <>
            <Link to={`/${data?.name.toLocaleLowerCase()}`}>
                <main style={{ backgroundColor: `var(--${types[0]?.type?.name})` }} className={`${s.card} ai__center`}>
                    <section className={`${s.info} flex column`}>
                        <h1>{data?.name}</h1>
                        {
                            types?.map((e, i) =>
                                <div key={i} className={`${s.type} ai__center`}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABAFJREFUSEtjZCABpGyP1Lv2+1rygx/38pC1KbIp92tw6s6b6774KgMDw39ijGQkpChpV4TUjg9bnxJShyzvIeAtPc9txTN8enBaHLoqlO06y6ld7/68syfFUmS11toe7Ku1V//Cph+rxSn7o2W2vd70mFwLkfX5CAbIz3Jd/AjdLAyLU3dEam/9tOUKNSyFmeEj6qM5y3H5DWQzUSxO2x0rt+X9hofUtBRmlqewr8Jc52Vws+EWe27zZL/45cgPWlgKMxM5zuEWS63iJSobgAzxFva3nu285Bg+R6bsjnHY9n7jfnQ1z8I+g+0EE8QmpgBRD95pjqu/EBUq/xkYpVbz/kNX6yPhLzXLbslzsMWEfEtMvgSZk7o3xgo5JHCZC/I1QYuDeWw4Jntt/4ns8tBjoZy839ls5zkv3QUTN96gvvT5r2dRsKDE5yGwxSl7IvW2vdtyEVvw+ShFss0ymfUbXS5jb5z0prfrn8AssdikP/HRj3t5PkqR3LNMZn2DqcflY1c+Hx1Gq036E9HLXpBGN0E/ywWuS0+A2Mm7Y7znui7ZCjMwfm+48u632+6ALHbaalFz4+vVZg8Bb9N5bivOIDsSl8WqnGrtjPjiAdnlyEGYuCdaa+e7TVcVOBQnPfhxH1xhIMsT8jE4VRNrsQ+nA/cs383gYEzeHWG4/f3WczALnoV9ZsJWK+FLtFgtdhfy853vsnQLssv9hANlZjgvAtdSthsN2+7+vFOJLV0Qk7hw+tibz0dntsdyUN0KBiCXuwn66S1wXXo5cWeM1c6PG4/C5ARZhPdZ8VgVSx9bdqmhgQEl3+L1sfUGg777v+4WIrveWyDAYbbb4oPIFoMqe3UOnYU7Pm28gBTEOKvV3G2e7GtxFMGKnKrdjEn7YtR3vNmIUnOgJxZsLk8TNWZtcDzwB1twg8T016luef3nhTc2eU/RAF2cBQi+uHIV9lJZ6LzyLi5LGxoamGZp9f7FJY+35PKX9BWabrvsfdbWUIkNX3c8x2UIsjjMsbGbYuX2/sBdvcItjtsbJ73n7fon6IY781vy7P14HGel4C3qazjbcRk8zkH6G/Y3sMx63YtR2sHMhpX7JFWLbqLBnAscF+CtswlVOCjVIsg1oVdD2Y5e3YFSGSCHgI9wkMos54U44zXtTBrrlnvLsTbsYOYgl/0o2SF5a5T89q+bH2CLT1kOhZme5y5noefV//8ZGLXXKxz88OetLb504CIcKLMIWgCBCxB0xSm7wzW3vd92jZjERKwago09mEH4fE6sZfDgJbZ5C9NAKM6JcYA1gwf76jASGvTIhpLThUGPT2yOJNh3QnHE9hj1m3+uJd//frsUWRxU9mrwaC+a67iY6I4AAMbguwmeJL2mAAAAAElFTkSuQmCC" alt="type" />
                                    <h1>{e?.type?.name}</h1>
                                </div>
                            )
                        }
                    </section>
                    <section className={s.image}>
                        <img src={item?.data?.sprites?.other?.dream_world?.front_default} alt="pokemon" />
                    </section>
                </main>
            </Link>
        </>
    )
}

export default Card;
