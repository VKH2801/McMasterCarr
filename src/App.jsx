import React from "react";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage/HomePage";
import NoPage from "./components/pages/NoPage/NoPage";
import SelectedCategories from "./components/pages/SelectedCategories/SelectedCategories";
import "./App.scss";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<SelectedCategories/>}/>
          <Route path="home" element={<HomePage/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
