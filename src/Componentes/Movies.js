import React, { Component } from 'react';
import axios from 'axios'

//criar a base URL
const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=febfd3331920d6ac4bb3282c084bcb1f&language=pt-BR&page=1'
})

console.log(FilmesApi)

export default class Movies extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        this.getMovies()
    }

    // criar a função assincrona para continuar funcionando embaixo dos panos, pegar as respostas
    //o await é a resposta que o async está esperando

    getMovies = async () => {
        const resposta = await FilmesApi.get()
        console.log(resposta);

    //outra const para guardar os filmes e poder acessa-los
        
        const allFilmes = resposta.data.results.map((item) => {
            return {
                //nome: item.original_title,
                //sinopse: item.overview
                ...item,
                nome:item.overview
            }
        })

        this.setState({
            movies: allFilmes
        })
        console.log(allFilmes)
    }

    render() {
        return (
            <>

                {this.state.movies.map((item, index) => (
                    <ul key={index}>
                        <li>{item.nome}</li>
                        

                    </ul>
                ))   
                }

            </>
        )
    }
}