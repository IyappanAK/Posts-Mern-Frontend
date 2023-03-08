import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Auth />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
