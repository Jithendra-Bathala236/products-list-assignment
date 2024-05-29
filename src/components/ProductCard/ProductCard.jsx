import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product">
                <div className="product-card-front">
                    <img
                        className="product-image"
                        src={product.image}
                        alt="Beats Studio Pro"
                    />
                    <div className="product-card-front-content">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">$ {product.price}</p>
                    </div>
                </div>

                <div className="product-card-back">
                    <div>
                        <p className="product-name">{product.name}</p>
                        <p className="product-description">
                            {product.description}
                        </p>
                    </div>

                    <div className="product-sub-content-container">
                        <div className="product-sub-content">
                            <p className="product-category">
                                {product.category}
                            </p>
                            <p className="product-price">$ {product.price}</p>
                        </div>

                        <button className="product-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
