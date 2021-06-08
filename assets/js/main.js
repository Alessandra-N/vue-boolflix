const app = new Vue  ({

    el: "#app",

    data: {
        url: "https://api.themoviedb.org/3/search/movie?api_key=721dbf1e3d02ede41edd01ebb9dda0b6&language=en-US&page=1&include_adult=false"
    },

    methods: {

    },

    mounted() {

        axios
        .get(this.url)
        .then(response => {
            
            console.log(response);


        })
        .catch(e => {
            console.error(e);
        })
    }


})