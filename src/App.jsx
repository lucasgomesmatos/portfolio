import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home';
import { GlobalStyle, Container } from './style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
