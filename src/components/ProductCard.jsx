import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="visit-store-prompt">
                    <a href="/stores" className="visit-store-link">Visit Our Store</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;