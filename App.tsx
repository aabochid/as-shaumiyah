
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Programs from './pages/Programs';
import Facilities from './pages/Facilities';
import Registration from './pages/Registration';
import Gallery from './pages/Gallery';
import ParentPortal from './pages/ParentPortal';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-pattern">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/program" element={<Programs />} />
            <Route path="/fasilitas" element={<Facilities />} />
            <Route path="/pendaftaran" element={<Registration />} />
            <Route path="/galeri" element={<Gallery />} />
            <Route path="/portal" element={<ParentPortal />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
