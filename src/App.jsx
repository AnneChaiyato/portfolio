import React from 'react';
import { Routes, Route, HashRouter} from 'react-router-dom';
import NavBar from './components/Nav/NavBar'
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Pages/Portfolio/Portfolio';

function App() {

    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
            </Routes>
            <Footer />
        </HashRouter>
        
   
    );

}

export default App;