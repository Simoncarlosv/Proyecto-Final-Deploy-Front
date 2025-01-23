import React from 'react';

const ProductCard = ({ product }) => {
    return (

        
        <div className="col mb-5">
            
            <div className="card h-100">
                {product.sale && (
                    <div className="badge bg-dark text-white position-absolute " style={{ top: '0.5rem', right: '0.5rem' }}>
                        25%
                    </div>
                )}
                <img className="card-img-top" src={product.image} alt="Product" />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{product.name}</h5>
                        {product.rating && (
                            <div className="d-flex justify-content-center small text-warning mb-2">
                                {Array(product.rating).fill().map((_, i) => (
                                    <div key={i} className="bi-star-fill"></div>
                                ))}
                            </div>
                        )}
                        <span className="text-muted text-decoration-line-through">{product.originalPrice}</span> {product.price}
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-cente d-flex justify-content-between">
                        <a className="btn btn-outline-warning mt-auto text-dark" href="#!">{product.buttonText}</a>
                        <a className="btn btn-outline-warning mt-auto text-dark" href="#!">{product.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;