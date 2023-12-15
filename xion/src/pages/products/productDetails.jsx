import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const params = useParams();


    return (
        <div>
            <h2 style={{color:'white'}}>제품 디테일 페이지</h2>
            <p style={{color:'white'}}>{params.productId}</p>
        </div>
    );
};

export default ProductDetails;