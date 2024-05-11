import React, {Component} from 'react';
import "./App.css"
import Header from "./components/Header.jsx";
import Switcher from "./components/Switcher.jsx";
import Footer from "./components/Footer.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'AboutMe'
        }
    }

    changePage = currentPage => {
        this.setState({currentPage})
    }
    // TODO *  use changePage and build switch 2:31:00 well done
    // TODO ** create other pages
    // TDOD **/2 use Navigation

    render() {
        return (<div>
                <Header changePage = {this.changePage}></Header>
                <Switcher currentPage={this.state.currentPage}></Switcher>
                <Footer></Footer>
            </div>);
    }
}

export default App;