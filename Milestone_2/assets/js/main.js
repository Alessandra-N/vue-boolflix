const app = new Vue  ({

    el: "#app",

    data: {
        url: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        seriesUrl: "https://api.themoviedb.org/3/search/tv?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        searchedMovie: "",
        movies: [],
        tvSeries: [],
        
    },

    methods: {

        searchMovies() {
            axios
            .get(this.url + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
            
            this.movies = response.data.results;

            })
            .catch(e => {
            console.error(e);
            })

            axios
            .get(this.seriesUrl + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
            
            this.tvSeries = response.data.results;
            console.log(this.tvSeries);

            })
            .catch(e => {
            console.error(e);
            })
        }
        
    },

    mounted() {

       
    }


})