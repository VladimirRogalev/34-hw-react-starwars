import React, {Component} from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import Contacts from "./Contacts.jsx";
import {navItems} from "../utils/constants.js";

class Switcher extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        switch (this.props.currentPage) {
            case navItems[0]:
                return <Home></Home>
            case navItems[1]:
                return <AboutMe></AboutMe>
            case navItems[2]:
                return <StarWars></StarWars>
            case navItems[3]:
                return <Contacts/>
        }
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default Switcher;