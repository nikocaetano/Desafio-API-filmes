import React, { Component } from 'react';
import axios from 'axios'
import * as S from "../Styled/Styled-tv.js";
import Carousel from 'nuka-carousel/lib/carousel.js';

const SeriesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=febfd3331920d6ac4bb3282c084bcb1f&language=pt-BR&page=1'
})

console.log(SeriesApi)

export default class Series extends Component {
    state = {
        series: [],
        FilterSeries: []
    }

    componentDidMount() {
        this.getSeries()
    }

    getSeries = async () => {
        const resposta = await SeriesApi.get()
        console.log(resposta);

        const AllSeries = resposta.data.results.map((item) => {
            return {
                ...item,
                image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
            }
        })
        this.setState({
            series: AllSeries
        })
        console.log(AllSeries)
    }

    handleChange = (event) => {
        const FilterTV = this.state.series.filter((item) => {
            if (item.original_name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            } else {
                return ""
            }
        })
        this.setState({
            FilterSeries: FilterTV
        })
        console.log(this.state.FilterTV)
    }

    render() {
               return (
            <section>

                <S.input onChange={this.handleChange} />
                
                    {this.state.FilterSeries.map((item, index) => (
                        <div key={index}>
                            <S.ul>
                                <li>{item.original_name}</li>

                            </S.ul>
                            <img src={item.image} />
                        </div>
                    ))}
                    <S.Carrossel wrapAround={true} slidesToShow={3} defaultControlsConfig={{
                     nextButtonClassName: '>',
                     prevButtonClassName: '<'   
                    }} 
                    autoplay={true} speed={600}>
                        
                    {this.state.series.map((item, index) => 
                    <div key={index}>
                        <S.img src={item.image} />
                    </div>

                    )}
                </S.Carrossel>
            </section>
        )
    }
}