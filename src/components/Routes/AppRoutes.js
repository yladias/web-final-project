import React from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main";
import Product from "../pages/Product";
import {ROUTES} from "../utils/Routes";
import SingleProduct from "../products/SingleProduct";
import About from "../pages/About";
import SingleCategory from "../categories/SingleCategory";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path={ROUTES.PRODUCTS} element={<Product />}/>
            <Route path={ROUTES.ABOUT} element={<About />}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
        </Routes>
    )

};

export default AppRoutes;