const app = new Vue ({
    el:'#app',
    data:{
        url: 'https://api.themoviedb.org/3',
        query: '',
        apiKey: '2c02b686abeba1d47393671cb89a17d8',
        name:'',
        original_name: '',
        original_language:'',
        vote_average: undefined
    },
    methods:{
        search(){
        
            this.name.forEach((film)=> {
                   
            });
        }
    },
    mounted(){
        const fullUrl = `${this.url}?q=${this.query}&appid=${this.apiKey}`;
        console.log(fullUrl);
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