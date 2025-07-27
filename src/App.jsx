import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Footer, Header } from "./components/layout";
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductList = lazy(() => import("./pages/ProductList"));
function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
