import React, { useEffect, useState } from 'react';

const Home = () => {
    const [gifLoaded, setGifLoaded] = useState(false);

    const featuredProducts = [
        {
            id: 1,
            name: "iPhone 17 Pro",
            image: "/images/products/iphone17pro.jpg",
            description: "The ultimate iPhone with advanced camera and performance."
        },
        {
            id: 2,
            name: "Samsung Galaxy S26 Ultra",
            image: "/images/products/samsungs26ultra.jpg",
            description: "The most powerful Galaxy with revolutionary camera technology."
        },
        {
            id: 3,
            name: "iPad Pro M4 (12.9\")",
            image: "/images/products/ipadprom4-129.jpg",
            description: "Unleash your creativity with the new iPad Pro and M4 chip."
        },
        {
            id: 4,
            name: "MacBook Air 15\"",
            image: "/images/products/macbookair15.jpg",
            description: "Thin. Light. Powerful. The new 15-inch MacBook Air."
        }
    ];

    return (
        <div className="home-page">
            {/* Hero Section with GIF Background */}
            <div className="hero-section">
                {!gifLoaded && (
                    <div className="gif-placeholder">
                        <div className="loading-spinner"></div>
                    </div>
                )}
                <img
                    src="/images/hero-bg.gif"
                    alt="Technological background animation"
                    className="hero-gif"
                    onLoad={() => setGifLoaded(true)}
                    onError={() => {
                        document.querySelector('.hero-section').classList.add('fallback-bg');
                        setGifLoaded(true);
                    }}
                />
                <div className="gif-overlay"></div>
                <div className="hero-content">
                    <h1>Discover the Future</h1>
                    <p>Experience the latest in mobile technology and accessories</p>
                    <a href="/products" className="shop-now-btn">Shop Now</a>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="featured-section">
                <h2 className="section-title">Featured Products</h2>
                <div className="featured-grid">
                    {featuredProducts.map((product) => (
                        <div key={product.id} className="featured-product-card">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <a href="/stores" className="visit-store-link">Visit Our Store</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <h2 className="section-title">Why Choose Hoco?</h2>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <h3>Premium Selection</h3>
                        <p>We carefully curate only the best devices and accessories from trusted brands.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-users"></i>
                        </div>
                        <h3>Expert Team</h3>
                        <p>Our knowledgeable staff provide personalized advice to find your perfect device.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-smile"></i>
                        </div>
                        <h3>Customer Focus</h3>
                        <p>Your satisfaction is our priority with exceptional service at every step.</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <i className="fas fa-tools"></i>
                        </div>
                        <h3>Complete Service</h3>
                        <p>From purchase to repair, we support you throughout your device's lifecycle.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;