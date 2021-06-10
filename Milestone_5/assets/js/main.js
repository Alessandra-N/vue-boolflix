const app = new Vue  ({

    el: "#app",

    data: {
        movieUrl: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        seriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        genresUrl: "https://api.themoviedb.org/3/genre/movie/list?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        searchedMovie: "",
        selected: "Select by genre...",
        
        movies: [],
        tvSeries: [],
        genres: [],
        genreIds: [],
    },

    methods: {

        searchMovies() {
            axios
            .get(this.movieUrl + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
                this.movies = response.data.results;

                /*for (i = 0; i < this.movies.length; i++){
                    this.genreIds.push(this.movies[i].genre_ids)
                }
                for (i = 0; i < this.genres.length; i++) {
                    console.log(this.genres[i].id);

                }

                console.log(this.genreIds);
                //console.log(this.genres);
                 if (this.genre.includes(this.genreIds)){

                } */
               
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