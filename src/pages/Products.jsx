import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
    // Expanded product list with all available products
    const products = [
        // iPhones
        {
            id: 1,
            name: "iPhone 17 Pro",
            image: "/images/products/iphone17pro.jpg",
            description: "The ultimate iPhone with advanced camera and performance. A17 Pro chip, 6.7\" Super Retina XDR display.",
            category: "iPhone"
        },
        {
            id: 2,
            name: "iPhone 17",
            image: "/images/products/iphone17.jpg",
            description: "Experience the next level of smartphone innovation. A16 Bionic chip, 6.1\" Super Retina XDR display.",
            category: "iPhone"
        },
        {
            id: 3,
            name: "iPhone 16 Pro",
            image: "/images/products/iphone16pro.jpg",
            description: "Pro performance with A16 Pro chip. 6.1\" Super Retina XDR display with ProMotion.",
            category: "iPhone"
        },
        {
            id: 4,
            name: "iPhone 16",
            image: "/images/products/iphone16.jpg",
            description: "Powerful performance with A15 Bionic chip. 6.1\" Super Retina XDR display.",
            category: "iPhone"
        },

        // Samsung Phones
        {
            id: 5,
            name: "Samsung Galaxy S26 Ultra",
            image: "/images/products/samsungs26ultra.jpg",
            description: "The most powerful Galaxy with revolutionary camera technology. 6.8\" Dynamic AMOLED display.",
            category: "Samsung"
        },
        {
            id: 6,
            name: "Samsung Galaxy S26",
            image: "/images/products/samsungs26.jpg",
            description: "Capture every moment with stunning clarity. 6.2\" Dynamic AMOLED display.",
            category: "Samsung"
        },
        {
            id: 7,
            name: "Samsung Galaxy S25 FE",
            image: "/images/products/samsungs25fe.jpg",
            description: "Fan Edition with premium features. 6.4\" Super AMOLED display.",
            category: "Samsung"
        },

        // Tablets
        {
            id: 8,
            name: "iPad Pro M4 (12.9\")",
            image: "/images/products/ipadprom4-129.jpg",
            description: "Unleash your creativity with the new iPad Pro and M4 chip. 12.9\" Liquid Retina XDR display.",
            category: "Tablet"
        },
        {
            id: 9,
            name: "iPad Pro M4 (11\")",
            image: "/images/products/ipadprom4-11.jpg",
            description: "Powerful performance in a portable size. 11\" Liquid Retina display with ProMotion.",
            category: "Tablet"
        },
        {
            id: 10,
            name: "iPad Air 5th Gen",
            image: "/images/products/ipadair5.jpg",
            description: "Thin, light, and powerful with M1 chip. 10.9\" Liquid Retina display.",
            category: "Tablet"
        },

        // Laptops
        {
            id: 11,
            name: "MacBook Air 15\"",
            image: "/images/products/macbookair15.jpg",
            description: "Thin. Light. Powerful. The new 15-inch MacBook Air with M2 chip.",
            category: "Laptop"
        },
        {
            id: 12,
            name: "MacBook Air 13\"",
            image: "/images/products/macbookair13.jpg",
            description: "Super portable performance with M2 chip. 13.6\" Liquid Retina display.",
            category: "Laptop"
        },

        // Accessories
        {
            id: 13,
            name: "Ring Light 18\"",
            image: "/images/products/ringlight18.jpg",
            description: "Perfect lighting for your photos and videos. Adjustable brightness and color temperature.",
            category: "Accessory"
        },
        {
            id: 14,
            name: "Ring Light 10\"",
            image: "/images/products/ringlight10.jpg",
            description: "Compact and portable lighting solution. USB powered with adjustable brightness.",
            category: "Accessory"
        },
        {
            id: 15,
            name: "Wireless Charger",
            image: "/images/products/wirelesscharger.jpg",
            description: "Fast wireless charging pad. Compatible with all Qi-enabled devices.",
            category: "Accessory"
        },
        {
            id: 16,
            name: "Bluetooth Earbuds",
            image: "/images/products/bluetooth-earbuds.jpg",
            description: "Premium sound with active noise cancellation. 30 hours battery life.",
            category: "Accessory"
        }
    ];

    // Group products by category
    const productsByCategory = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    return (
        <div className="products-page">
            <div className="products-hero">
                <h1>Our Products</h1>
                <p>Explore our full range of premium mobile phones, tablets, laptops, and accessories.</p>
            </div>

            <div className="products-container">
                {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
                    <div key={category} className="product-category">
                        <h2 className="category-title">{category}</h2>
                        <div className="product-grid">
                            {categoryProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="visit-store-section">
                <h2>Experience Our Products in Person</h2>
                <p>Visit one of our stores to see our full range of products and get expert advice from our knowledgeable staff.</p>
                <a href="/stores" className="visit-store-button">Find a Store</a>
            </div>
        </div>
    );
};

export default Products;