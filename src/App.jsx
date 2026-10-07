import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';




function App() {
    return (
        
        <BrowserRouter  className="bg-gray-900">

            <nav className="flex gap-6 bg-gray-900 p-4 text-white">
                <Link className="hover:text-blue-400" to="/">Home </Link>
                <Link className="hover:text-blue-400" to="/about">About</Link>
                <Link className="hover:text-blue-400" to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            
        </BrowserRouter>
    )
}

export default App;