import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../features/api/ApiSlice";
import {ROUTES} from "../utils/Routes";
import Product from "./Product";
import Products from "./Products";
import {useSelector} from "react-redux";


const SingleProduct = () => {
    const {products, categories} = useSelector((state) => state);g
    const {id} = useParams();
    const navigate = useNavigate();
    const {data, isLoading, isFetching, isSuccess} = useGetProductQuery({id});
    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.MAIN);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);
    console.log(data)
    return !data ? (
        <section className="preloader">Loading...</section>
    ) : (
        <>
            <Product {...data} />
            <Products products={products.list} amount={5} title="Trending" />
        </>
    );
};

export default SingleProduct;