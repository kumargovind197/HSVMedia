import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// import Services from './components/Services';
// import { SignupBanner, WhoAreWe } from './components/HomeSections';
import { PublishersPage, AdvertisersPage,  LoginPage, RegistrationPage } from './components/ContentSections';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import { WhoAreWe } from './components/HomeSections';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'publishers':
        return <PublishersPage onNavigate={setCurrentPage} />;
      case 'advertisers':
        return <AdvertisersPage onNavigate={setCurrentPage} />;
      case 'company':
        // return <CompanyPage />;
      case 'login':
        return <LoginPage onNavigate={setCurrentPage} />;
      case 'register':
        return <RegistrationPage onNavigate={setCurrentPage} />;
      default:
        return (
          <>
            <Hero />
         <PublishersPage />
         <AdvertisersPage/>
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;