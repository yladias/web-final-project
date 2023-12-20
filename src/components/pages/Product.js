import React from 'react';

import Poster from "../poster/Poster";
import Products from "../products/Products";
import {useSelector} from "react-redux";
import Categories from "../categories/Categories";

const Product = () => {
    const {products, categories} = useSelector((state) => state);

    return (
        <>
            <Poster />
            <Products products={products.list} amount={5} title="Trending" />
            <Categories categories={categories.list} amount={5} title="Worth seeing" />
        </>
    );
};

export default Product;