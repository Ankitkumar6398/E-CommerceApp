import React, { useRef } from 'react';
import '../css/HomePage.css';
import Electronics from '../images/electronics.jpeg';
import Fashions from '../images/fashion.jpeg';
import Kitchen from '../images/home.jpeg';
import Beauty from '../images/beauty.jpeg';
import Headphones from '../images/headphones.jpeg';
import Keyboard from '../images/keyboard.jpeg';
import Watch from '../images/watch.jpeg';
import Speaker from '../images/speaker.jpeg';


const HomePage = () => {
    const categoriesRef = useRef(null);

    // Sample data - replace with your actual data
    const categories = [
        { id: 1, name: 'Electronics', image: Electronics },
        { id: 2, name: 'Fashion', image: Fashions },
        { id: 3, name: 'Home & Kitchen', image: Kitchen },
        { id: 4, name: 'Beauty', image: Beauty },
    ];

    const products = [
        { id: 1, name: 'Wireless Headphones', price: 99.99, rating: 4.5, image: Headphones },
        { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.2, image: Watch },
        { id: 3, name: 'Bluetooth Speaker', price: 79.99, rating: 4.7, image: Speaker},
        { id: 4, name: 'Gaming Keyboard', price: 129.99, rating: 4.3, image: Keyboard },
    ];

    const testimonials = [
        { id: 1, name: 'Sarah J.', rating: 5, comment: 'Great products and fast delivery!' },
        { id: 2, name: 'Michael T.', rating: 4, comment: 'Excellent customer service.' },
        { id: 3, name: 'Emily R.', rating: 5, comment: 'Will definitely shop here again.' },
    ];

    return (
        <div className="homepage">
            {/* Hero Banner */}
            <section className="hero-banner">
                <div className="hero-content">
                    <h1>Summer Sale</h1>
                    <p>Up to 70% off on selected items</p>
                    <button className="cta-button" onClick={() => categoriesRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        Shop Now
                    </button>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="categories-section" ref={categoriesRef}>
                <h2>Shop by Category</h2>
                <div className="categories-grid">
                    {categories.map(category => (
                        <div key={category.id} className="category-card">
                            <img src={category.image} alt={category.name} />
                            <h3>{category.name}</h3>
                            <button>Explore</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className="rating">{"★".repeat(Math.floor(product.rating))}{"☆".repeat(5-Math.floor(product.rating))}</div>
                            <div className="price">${product.price.toFixed(2)}</div>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="promo-banner">
                <div className="promo-content">
                    <h2>Limited Time Offer</h2>
                    <p>Get 20% off on all electronics</p>
                    <button className="cta-button">Shop Electronics</button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <div className="testimonial-cards">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="rating">{"★".repeat(testimonial.rating)}</div>
                            <p className="comment">"{testimonial.comment}"</p>
                            <p className="name">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest deals</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </div>
    );
};

export default HomePage;