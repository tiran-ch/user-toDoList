import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./pages/user-form/userForm";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
        <Header/>
      <UserForm/>
      <Footer/>
    </div>
  );
}

export default App;
