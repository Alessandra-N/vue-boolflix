const app = new Vue  ({

    el: "#app",

    data: {
        url: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6",
        searchedMovie: "",
        movies: [],
        
    },

    methods: {

        searchMovies() {
            axios
            .get(this.url + "&query=" + this.searchedMovie.replace(/ /g, '+'))
            .then(response => {
            
            this.movies = response.data.results;
            console.log(this.movies);

        })
        .catch(e => {
            console.error(e);
        })
        }
        
    },

    mounted() {

       
    }


})