import logo from './logo.svg';
import './App.css';
import CategoryPage from "./pages/Category/Category"
import { Route } from "react-router-dom";
import NavBar from "./container/Navbar/Navbar";
import ProductDisplayPage from "./pages/ProductDisplay/ProductDisplay"

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