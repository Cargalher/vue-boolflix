const noPoster = 'img/Poster_Not_Available.jpg';
const urlPoster = 'https://image.tmdb.org/t/p/';
const posterSize = "w154";

const app = new Vue ({
    el:'#app',
    data:{
        query: '',
        results: [],
        movies: [],
        tvShows: [],
        error:null,
        flags: ['it', 'en','es', 'fr', 'ja'],
        // urlPoster: 'https://image.tmdb.org/t/p/',
        // posterSize: "w154",
        // noPoster: 'img/Poster_Not_Available.jpg',
        
    },
    methods:{
        search(){
        this.results=[];
        this.searchMovies(); 
        this.searchTvShows();

        },
        searchMovies() {
            axios
            .get('https://api.themoviedb.org/3/search/movie', {
                params:{
                    api_key: '2c02b686abeba1d47393671cb89a17d8',
                    query: this.query,
                    language: 'it-IT',
                },
            })
            .then((response) => {
                this.movies = response.data.results;
                this.results = [...this.results, ...this.movies];
              })
            .catch(e => {
                console.error(e);
                this.error = 'Sorry something went wrong' + e;
            })
        },
        searchTvShows() {
            axios
            .get('https://api.themoviedb.org/3/search/tv', {
                params:{
                    api_key: '2c02b686abeba1d47393671cb89a17d8',
                    query: this.query,
                    language: 'it-IT',
                },
            })
            .then((response) => {
                this.tvShows = response.data.results;
                this.results = [...this.results, ...this.tvShows];


            })
            .catch(e => {
                console.error(e);
                this.error = 'Sorry something went wrong' + e;
            })
        },
        showPoster (poster_path){
            if(poster_path) {
                return urlPoster + posterSize + poster_path;
            }
                return noPoster;
            }

    },
    mounted(){
   
    }

})