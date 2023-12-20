import React from 'react';
import styles from "./Product.module.css";
const Product = ({images,price, title, description}) => {
    const currentImage = images[0];
    return (
        <section className={styles.product}>
            <div className={styles.images}>
                <div className={styles.current}
                     style={{backgroundImage: `url(${currentImage}`}}
                />
                {images.map((image,i)=>(
                    <div
                        key={i} className={styles.image} style={{backgroundImage: `url(${image})`}}
                        onClick={() => {}}
                    />
                ))}
            </div>
            <div className={styles.info}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price}>
                    {price}
                </div>
            </div>

            <p className={styles.description}>{description}</p>
        </section>
    );
};

export default Product;