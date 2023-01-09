import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.pokeball__container}>
            <div className={s.pokeball}></div>
        </div>
    );
};

export default Loader;