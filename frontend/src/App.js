import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import './App.css';
import Login from "./pages/Login";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar"; // Make sure this matches the filename

function App() {
    return (
        <Router>
            {/* Navbar will always be visible */}
            <NavBar />

            {/* All Routes for pages */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
