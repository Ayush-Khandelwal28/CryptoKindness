import React from "react";

function IndexPage({ onDonateClick }) {
    const topDonated = [
        { name: "Anonymous", amount: 450 },
        { name: "Ayush Khandelwal", amount: 72.424 },
        { name: "Aryan Gupta", amount: 68.525 },
    ];

    const recentDonated = [
        { name: "Aryan Gupta", amount: 55 },
        { name: "Ayush Khandelwal", amount: 29 },
        { name: "Anonymous", amount: 120 },
    ];

    const mostDonated = [
        { name: "Caring Hands Initiative", amount: 3000 },
        { name: "Acts of Kindness Charity", amount: 2500 },
        { name: "Hope for Tomorrow Charity", amount: 2000 },
    ];

    return (
        <div className="index">
            <h1>Testing</h1>
            <div className="quote-wrapper">
                <blockquote>
                    "Be the change that you wish to see in the world." - Mahatma Gandhi
                </blockquote>
                <p className="quote-line">
                    At CryptoKindness, we believe in the power of cryptocurrency to create positive change in the world. Join us in making a difference by donating to organizations that are making an impact in various fields.
                </p>
            </div>
            <div className="lists">                
            <div>
                <h3>Top Donaters</h3>
                <ul>
                    {topDonated.map((org, index) => (
                        <li key={index}>
                            {org.name} - {org.amount} ETH
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Recent Donaters</h3>
                <ul>
                    {recentDonated.map((org, index) => (
                        <li key={index}>
                            {org.name} - {org.amount} ETH
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Most Donated Organizations</h3>
                <ul>
                    {mostDonated.map((org, index) => (
                        <li key={index}>
                            {org.name} - {org.amount} ETH
                        </li>
                    ))}
                </ul>
            </div>            
            </div>
            <button onClick={onDonateClick}>Donate Now</button>
        </div>
    );
}

export default IndexPage;
