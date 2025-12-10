import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import SearchPage from "./Pages/Search.jsx";


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<SearchPage />} />
       
      </Routes>
    </Layout>
  );
}
