import React from 'react';
import { useParams } from "react-router-dom";
import Headphones from '../images/headphones.jpeg';
import Keyboard from '../images/keyboard.jpeg';
import Watch from '../images/watch.jpeg';
import Speaker from '../images/speaker.jpeg';
import Fashions from '../images/fashion.jpeg';
import Kitchen from '../images/home.jpeg';
import Beauty from '../images/beauty.jpeg';

const allProducts = {
    electronics: [
        { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 4.5, image: Headphones },
        { id: 2, name: 'Gaming Keyboard', price: 129.99, rating: 4.3, image: Keyboard },
        { id: 3, name: 'Bluetooth Speaker', price: 79.99, rating: 4.7, image: Speaker },
        { id: 4, name: 'Smart Watch', price: 199.99, rating: 4.2, image: Watch },
        { id: 5, name: 'Wireless Headphones', price: 99.99, rating: 4.5, image: Headphones },
        { id: 6, name: 'Gaming Keyboard', price: 129.99, rating: 4.3, image: Keyboard },
        { id: 7, name: 'Bluetooth Speaker', price: 79.99, rating: 4.7, image: Speaker },
        { id: 8, name: 'Smart Watch', price: 199.99, rating: 4.2, image: Watch },
    ],
    fashion: [
        { id: 1, name: 'Summer T-Shirt', price: 29.99, rating: 4.4, image: Fashions },
        { id: 2, name: 'Classic Jeans', price: 49.99, rating: 4.1, image: Fashions },
        { id: 3, name: 'Sneakers', price: 59.99, rating: 4.6, image: Fashions },
        { id: 4, name: 'Leather Jacket', price: 89.99, rating: 4.8, image: Fashions },
    ],
    'home-kitchen': [
        { id: 1, name: 'Non-Stick Pan Set', price: 39.99, rating: 4.3, image: Kitchen },
        { id: 2, name: 'Blender', price: 59.99, rating: 4.5, image: Kitchen },
        { id: 3, name: 'Knife Set', price: 24.99, rating: 4.2, image: Kitchen },
        { id: 4, name: 'Dinnerware Set', price: 69.99, rating: 4.7, image: Kitchen },
    ],
    beauty: [
        { id: 17, name: 'Moisturizer Cream', price: 19.99, rating: 4.6, image: Beauty },
        { id: 18, name: 'Lipstick Set', price: 29.99, rating: 4.4, image: Beauty },
        { id: 19, name: 'Face Wash', price: 14.99, rating: 4.3, image: Beauty },
        { id: 20, name: 'Perfume Spray', price: 39.99, rating: 4.5, image: Beauty },
    ],
};


const CategoryPage = () => {
    const { categoryName } = useParams();
    const readableName = categoryName.replace(/-/g, ' ');
    const products = allProducts[categoryName] || [];

    return (
        <div className="category-page">
            <h1>{readableName.charAt(0).toUpperCase() + readableName.slice(1)}</h1>
            {products.length > 0 ? (
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className="rating">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}</div>
                            <div className="price">${product.price.toFixed(2)}</div>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};

export default CategoryPage;
