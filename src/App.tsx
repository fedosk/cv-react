import React from 'react';
import './App.css';
import Header from "./Header/Header";
import MyProjects from "./MyProjects/MyProjects";
import Greeting from "./Greeting/Greeting";
import MyCode from "./MyCode/MyCode";
import Footer from "./Footer/Footer";
import MySkills from "./MySkills/MySkills";
import AboutMe from "./AboutMe/AboutMe";
import Contacts from "./Contacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Greeting/>
            <AboutMe/>
            <MySkills/>
            <MyProjects/>
            <MyCode/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
