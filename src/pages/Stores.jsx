import React from 'react';

const Stores = () => {
    const stores = [
        {
            id: 1,
            name: "ILAC Shopping Centre",
            address: "Ilac Centre, Unit 59 Parnell Mall, Henry St, North City, Dublin 1, D01 WC79",
            phone: "(01) 878 8378",
            hours: "Mon-Sat: 10am-7pm, Sun: 11am-6pm",
            image: "/images/shop/shop-exterior.jpg"
        },
        {
            id: 2,
            name: "Stephen's Green Shopping Centre",
            address: "Unit 2A, Stephen's Green Shopping Centre, Dublin 2",
            phone: "(01) 475 8490",
            hours: "Mon-Sat: 10am-7pm, Sun: 11am-6pm",
            image: "/images/shop/shop-interior.jpg"
        },
    ];

    return (
        <div className="stores-page">
            <h1>Our Stores</h1>
            <div className="store-list">
                {stores.map((store) => (
                    <div key={store.id} className="store-card">
                        <img src={store.image} alt={store.name} />
                        <h3>{store.name}</h3>
                        <p>{store.address}</p>
                        <p>Phone: {store.phone}</p>
                        <p>Opening Hours: {store.hours}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stores;