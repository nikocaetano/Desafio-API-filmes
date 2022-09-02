import React, { Component } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Movies from "../Componentes/Movies";
import Home from "../Componentes/Home";
import Series from "../Componentes/Series"
import * as S from "../Styled/Styled.js";

export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <S.GlobalStyle />
                <S.Section>
                    <h1>Nikoflix</h1>
                    <S.nav>
                        <S.ul>
                            <S.li>
                                <S.link to='/Home'>Home</S.link>
                            </S.li>
                            <S.li>
                                <S.link to='/Movies'>Movies</S.link>
                            </S.li>
                            <S.li>
                                <S.link to='/Series'>Series</S.link>
                            </S.li>
                        </S.ul>
                    </S.nav>
                </S.Section>
                <Routes>
                    <Route path='/Home' element={<Home />} />
                    <Route path='/Movies' element={<Movies />} />
                    <Route path='/Series' element={<Series />} />
                </Routes>
            </BrowserRouter>
        )
    }
}