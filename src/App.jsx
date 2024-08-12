
// App.js
import './App.css';
import './index.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const usePageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            '/': 'Home',
            '/services': 'Services',
            '/contact': 'Contact Us',
        };

        document.title = titles[location.pathname] || 'Default Title';
    }, [location]);
};

const PageTitleHandler = ({ children }) => {
    usePageTitle();
    return children;
};

const App = () => {
    return (
        <Router>
            <PageTitleHandler>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<ContactUs />} />
                    </Routes>
                    <Footer />
                </div>
            </PageTitleHandler>
        </Router>
    );
};

export default App;






















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Services from './components/Services';

// import ContactUs from './components/ContactUs';

// import Footer from './components/Footer';
// import './App.css';



// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <Navbar />
           
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/services" element={<Services />} />
//                     <Route path="/contact" element={<ContactUs />} />
//                 </Routes>
//                  <Footer/>
//             </div>
           
//         </Router>
//     );
// };

// export default App;
