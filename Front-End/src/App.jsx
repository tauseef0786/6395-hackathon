import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Header from './components/Header';
import AllRoutes from './Router/AllRoutes';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>  {/* Wrap everything inside BrowserRouter */}
        <Header />
        <main className="min-h-screen">
          <AllRoutes />
        </main>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default App;
