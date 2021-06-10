const app = new Vue  ({

    el: "#app",

    data: {
        movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        seriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        genresUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        crewUrl: "https://api.themoviedb.org/3/movie/",
        searchedMovie: "",
        selected: "Select by genre...",
        
        movies: [],
        tvSeries: [],
        genres: [],
        genreIds: [],
        movieIds: [],
        cast: [],
    },

    methods: {

        searchMovies() {
            axios
            .get(this.movieUrl + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
                this.movies = response.data.results;

                for (i = 0; i < this.movies.length; i++) {
                    this.movieIds.push(this.movies[i].id)
                    axios
                    .get(this.crewUrl + this.movies[i].id + "/credits?api_key=721dbf1e3d02ede41edd01ebb9dda0b6")
                    .then (response => {
                        this.cast = response.data.cast
                        console.log(this.cast);
                    })
                }
                
            })
            .catch(e => {
            console.error(e);
            })

            axios
            .get(this.seriesUrl + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
            this.tvSeries = response.data.results;
            })
            .catch(e => {
            console.error(e);
            })
            
        }
        
    },

    /* Chiamata axios per ottenere la lista dei generi */
    mounted () {
        axios
        .get(this.genresUrl)
        .then(response => {
            this.genres = response.data.genres
        })
        .catch(e => {
            console.error(e);
        })

    }

})