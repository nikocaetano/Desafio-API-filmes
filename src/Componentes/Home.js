import React, {Component} from "react";
import * as S from "../Styled/Styled"
import Movies from "./Movies";
import Series from "./Series";

export default class Home extends Component{
    render(){
        return(
            <div>
                <S.h3>Filmes em alta</S.h3>
                <Movies />
                <S.h3>Series em alta</S.h3>
                <Series/>
            </div>
        )
    }
}