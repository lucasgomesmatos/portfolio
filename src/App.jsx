import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Pages/Home/Home';
import { GlobalStyle, Container } from './style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={''} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
