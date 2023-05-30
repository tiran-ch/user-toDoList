import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./pages/user-form/userForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Search from "./pages/user-search/Search";

function App() {




    return (
    <div className="App">
        <Header/>
      <UserForm/>
      <Search/>
      <Footer/>
    </div>
  );
}

export default App;
