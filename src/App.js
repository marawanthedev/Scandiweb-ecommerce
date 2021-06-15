import logo from './logo.svg';
import './App.css';
import "./scss/main.scss"
import CategoryPage from "./pages/Category/Category.jsx"
import { Route } from "react-router-dom";

function App() {
    return ( <
        div className = "App" >

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