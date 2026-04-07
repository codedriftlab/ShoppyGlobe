import React, { lazy,  Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy imports
const Header = lazy(() => import('./components/Header'))
const ProductList = lazy(() => import('./components/ProductList'))
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Cart = lazy(() => import('./components/Cart'))
const NotFound = lazy(() => import('./components/NotFound'))
const Checkout = lazy(() => import('./components/Checkout'))
const Home = lazy(() => import('./Home'))
const Footer = lazy(() => import('../Footer'))
const Login = lazy(() => import('./components/LoginSingin'))

const App = () => {
  return (
    <Router>
    <Suspense fallback={<div className="flex items-center justify-center h-screen"><h2 className="text-2xl text-center mt-10 text-orange-300">Loading...</h2></div>}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App