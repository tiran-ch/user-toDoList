import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import UserForm from "../pages/user-form/userForm";
import Search from "../pages/user-search/Search";

export default function ReactRouter() {
    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<UserForm/>} />
                <Route path="/search/:id" element={<Search/>} />
            </Routes>
            <Footer/>
        </div>
    )
}