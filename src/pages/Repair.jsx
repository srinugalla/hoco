import React from 'react';

const Repair = () => {
    return (
        <div className="repair-page">
            <h1>Repair Services</h1>
            <div className="repair-content">
                <div className="repair-image">
                    <img src="/images/repair/repair-technician.jpg" alt="Repair Technician" />
                </div>
                <div className="repair-info">
                    <h2>Professional Repairs</h2>
                    <p>Our expert technicians can fix any issue with your mobile devices. From screen replacements to battery issues, we've got you covered.</p>
                    <div className="repair-services">
                        <h3>Our Services</h3>
                        <ul>
                            <li>Screen Replacement</li>
                            <li>Battery Replacement</li>
                            <li>Camera Repair</li>
                            <li>Software Issues</li>
                            <li>Water Damage Repair</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Repair;