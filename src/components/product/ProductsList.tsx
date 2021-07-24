import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchProducts} from "../../store/actions/product";
import {useActions} from "../../hooks/useActions";
import {NavLink} from "react-router-dom";

const ProductsList: React.FC = () => {
    const {page = 1, products, error, loading, count} = useTypedSelector(state => state.products);
    const {fetchProducts} = useActions();
    const [pageNum, setPageNum] = useState(page);
    const limit = 5;
    const maxPages = count / limit;
    const maxPagesArr = [];
    for (let i = 0; i < maxPages; i++) {
        maxPagesArr.push(i);
    }
    console.log({pageNum});
    useEffect(() => {
        fetchProducts(pageNum, limit);
    }, [pageNum])

    if (loading) {
        return <h1>идет загрузка...</h1>
    }
    if (error) {
        return <h1>ошибка: {error}</h1>
    }

    const changePageDown = () => {
        setPageNum(prev => prev - 1)
    }
    const changePageUp = () => {
        setPageNum(prev => prev + 1)
    }

    return (
        <div>
            <ul>
                {products.map(product => {
                    return <li key={product.id}><NavLink to={'/product/' + product.id}>{product.id} - {product.name}</NavLink>
                    <div><img width={100} src={'http://localhost:5000/' + product.image} alt=""/></div></li>
                })}
            </ul>
            <div>
                <button disabled={pageNum === 1} onClick={changePageDown}>PREV PAGE</button>
                {maxPagesArr.map(p => {
                    return <button onClick={() => setPageNum(p + 1)} disabled={pageNum === p+1}>{p + 1}</button>
                })}
                <button disabled={pageNum === maxPages} onClick={changePageUp}>NEXT PAGE</button>
            </div>
        </div>
    );
};

export default ProductsList;