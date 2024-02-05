import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import Layout from './pages/Layout.js'
import Dashboard from './pages/Dashboard.js'
import Products from './pages/Products.js'
import Login from './pages/Login.js'
import SignUp from './pages/SignUp.js'
import Search from './pages/Search.js'
import Graphs from './pages/Graphs.js'
import Data from './pages/Data.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="search" element={<Search />} />
          <Route path="graphs" element={<Graphs />} />
          <Route path="data" element={<Data />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
