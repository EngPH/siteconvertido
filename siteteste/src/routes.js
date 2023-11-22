import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Produto from './pages/Produto';
import Produtoexemplo from './pages/Produtoexemplo';

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/produtoexemplo" element={<Produtoexemplo />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;