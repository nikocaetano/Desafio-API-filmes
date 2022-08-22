import React, {Component} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Movies from "../Componentes/Movies";
import Home from "./Home";

export default class Header extends Component{
    render(){
        return(
            <BrowserRouter>
            <h1>Nikoflix</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/Home'>Home</Link>
                        </li>
                        <li>
                        <Link to='/Movies'>Movies</Link>
                        </li>
                        <li>
                        <Link to='/Series'>Series</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/Home' element={<Home />}/>
                    <Route path='/Movies' element={<Movies />}/>
                </Routes>
            </BrowserRouter>
        )
    }
}