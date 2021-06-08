const app = new Vue ({
    el:'#app',
    data:{
        url: 'https://api.themoviedb.org/3/search/movie',
        query: [],
        api_key: '2c02b686abeba1d47393671cb89a17d8',
        title:'',
        original_title: '',
        original_language:'',
        searched_text: ''
    },
    methods:{
        search(){
        
            
        }
    },
    mounted(){
        const fullUrl = `${this.url}?api_key=${this.api_key}&query=${this.movie}`;
        console.log(fullUrl);
       
        
        axios
            .get(fullUrl)
            .then(resp => {
                this.title = resp.data.response;
                console.log(this.title);
               


                this.title = resp.data.title;
                this.original_title = resp.data.original_title;
                this.original_language = resp.data.original_language;
                this.vote_average = resp.data.vote_average;

            })
            // .catch(e => {
            //     console.error(e);
            // })
    }

})