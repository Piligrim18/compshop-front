import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useLocation, useParams} from "react-router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Product = () => {
    // @ts-ignore
    const {id} = useParams();
    const {product} = useTypedSelector(state => state.product);
    console.log({product});
    const {getProduct} = useActions();
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        getProduct(id);
    }, [id])
    return (
        <div>
            {product && product.name}
        </div>
    );
};

export default Product;