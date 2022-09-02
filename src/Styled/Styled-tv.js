import styled from "styled-components";
import Carousel from "nuka-carousel/lib/carousel";
import { BrowserRouter, Link} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

export const img = styled.img`
width:25vw;

`
export const li = styled.li`

`

export const input = styled.input`
position:relative;
bottom:3vw;
left:83vw;
border-radius:15px;
height:2vw;
width: 15vw;
`
export const ul = styled.ul`
text-decoration:none;
list-style:none;
`
export const Carrossel = styled(Carousel)`
width:20vw;
`