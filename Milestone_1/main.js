const app = new Vue ({
    el:'#app',
    data:{
        query: '',
        results: [],
        movies: [],
        tvShows: [],
        error:null,
        
    },
    methods:{
        search(){
        this.results=[];
        this.searchMovies(); 
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
       

    },
    mounted(){
   
    }

})