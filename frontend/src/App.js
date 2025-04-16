import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import './App.css';
import Login from "./pages/Login";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage"; // Make sure this matches the filename
import CartPage from "./components/CartPage";
import WishListPage from "./components/WishListPage";
import NotificationsPage from "./components/NoticPage";

function App() {
    return (
        <Router>
            {/* Navbar will always be visible */}
            <NavBar />

            {/* All Routes for pages */}
            <Routes>
                <Route path="/cart" element={<CartPage/>}></Route>
                <Route path="/wishlist" element={<WishListPage/>}></Route>
                <Route path="/notification" element={<NotificationsPage/>}></Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:categoryName/:gender?" element={<CategoryPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
