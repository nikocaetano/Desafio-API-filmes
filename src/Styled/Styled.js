import styled from "styled-components";
import { BrowserRouter, Link} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:#d1b3c4;
}
`
export const Section = styled.section`
display: flex;
flex-direction:column;
width:100%;
background-color:#240046;
height: 11vw;

h1{
    text-align:center;
    font-size: 4em;
    color:white;
    font-family:'Fredoka One', sans-serif;
}
`
export const nav = styled.nav`
position:relative;
top:2vw;
`
export const ul = styled.ul`
display:flex;
list-style:none;
align-items:center;
width: 100%;
justify-content: space-evenly;
font-family:'Bangers', sans-serif;
font-size:2em;
`
export const li = styled.li`
 text-decoration:none;
 color:white;
`
export const link = styled(Link)`
text-decoration:none;
 color:white;
`

export const img = styled.img`
display: flex;
width: 12vw;
`
export const h3 = styled.h3`
font-family: 'Bangers', sans-serif;
font-size:2em;
padding-top:2vw;
color:#240046;
`
