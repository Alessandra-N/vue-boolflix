const app = new Vue  ({

    el: "#app",

    data: {
        movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        seriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        genresUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        searchedMovie: "",
        movies: [],
        tvSeries: [],
        genres: [],
    },

    methods: {

        searchMovies() {
            axios
            .get(this.movieUrl + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
                this.movies = response.data.results;
                console.log(response.data);
               
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
            
            /* https://api.themoviedb.org/3/movie/{movie_id}&language=en-US */
        }
        
    },

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