import React from 'react';
import './App.css';
import Header from "./Header/Header";
import MyProjects from "./MyProjects/MyProjects";
import Greeting from "./Greeting/Greeting";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import MySkills from "./MySkills/MySkills";
import AboutMe from "./AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Greeting/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
