import React from 'react';
import styles from "./Poster.module.css";
import BG from "../../img/banner.png";
const MainPoster = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.left}>
                <p className={styles.content}>
                    NEW YEAR
                    <span>SALE</span>
                </p>
                <button className={styles.more}>See more</button>
            </div>

            <div
                className={styles.right}
                style={{ backgroundImage: `url(${BG})` }}
            >
                <p className={styles.discount}>
                    save up to <span>50%</span> off
                </p>
            </div>
        </section>
    );
};

export default MainPoster;