import logo from './logo.svg';
import './App.css';
import CategoryPage from "./pages/Category/Category.jsx"
import { Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar"

function App() {
    return ( <
        div className = "App" >
        <
        NavBar > < /NavBar>

        <
        Route path = "/"
        component = { CategoryPage } >
        <
        /Route>

        <
        /
        div >
    );
}

export default App;