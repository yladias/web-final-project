import React from 'react';
import style from "./Poster.module.css";
import BG from "../../img/computer.png";
const Poster = () => {
    return (
        <section className={style.home}>
            <div className={style.title}>BIG SALE 20%</div>
            <div className={style.product}>
                <div className={style.text}>
                    <div className={style.subtitle}>bestseller</div>
                    <h1 className={style.head}>LENNON r2d2 with NVIDIA 5090 TI</h1>
                    <button className={style.button}>shop now</button>
                </div>
                <div className={style.image}>
                    <img src={BG} alt="" />
                </div>
            </div>

        </section>
    );
};

export default Poster;