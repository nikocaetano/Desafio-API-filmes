import React, { Component } from 'react';
import axios from 'axios'

//criar a base URL
const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=febfd3331920d6ac4bb3282c084bcb1f&language=pt-BR&page=1'
})

console.log(FilmesApi)

export default class Movies extends Component {
    state = {
        movies: [],
        FilterMovies: []
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
                // o sprad 
                ...item,
                //nome:item.overview,
                // tmdb -> documentação -> getting start -> images -> e só pegar o link e colocar numa template string
                image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })

        this.setState({
            movies: allFilmes
        })
        console.log(allFilmes)
    }

    handleChange = (event) => {
        const FilterList = this.state.movies.filter((item) => {
            if (item.original_title.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            } else {
                return ""
            }
        })
        this.setState({
            FilterMovies:FilterList
        })
        console.log(this.state.FilterList)
    }

    // a key serve para o console saber que uma item é um item diferente sem dar erro se os nomes forem os msm 
    render() {
        return (
            <section>
                <input onChange={this.handleChange} />
                  {this.state.FilterMovies.map((item, index) => (
                      <div key={index}>
                          <ul>
                              <li>{item.original_title}</li>
                              <li>{item.overview}</li>
                              <li>{item.vote_average}</li>
                          </ul>
                          < img src={item.image} alt='posters' />
                      </div>
                  ))}
            </section>
        )
    }
}

/* Para criar a rota: cria um componente, importa no appJS, no header importa a biblioteca Router que acessa o dom de uma 
forma mais acessivel, importa o BrowserRouter para rotear para o dom e ele entender que é um roteador de rotas, o link é o q substitui
a tag a no falecido index.html que o torna o carregamento do site mais leve, e o Route para guardar as rotas através do path */
