const app = new Vue ({
    el:'#app',
    data:{
        url: 'https://api.themoviedb.org/3/search/movie',
        query: '',
        api_key: '2c02b686abeba1d47393671cb89a17d8',
        name:'',
        original_name: '',
        original_language:'',
        vote_average: undefined,
        searched_text: ''
    },
    methods:{
        search(){
        
            
        }
    },
    mounted(){
        const fullUrl = `${this.url}?api_key=${this.api_key}&query=${this.query}`;
        console.log(fullUrl);
        then((response)=>{
            console.log(response.data.results);
        })
        
        axios
            .get(fullUrl)
            .then(resp => {

                this.name = resp.data.name;
                this.original_name = resp.data.original_name;
                this.original_language = resp.data.original_language;
                this.vote_average = resp.data.vote_average;

            })
            // .catch(e => {
            //     console.error(e);
            // })
    }

})