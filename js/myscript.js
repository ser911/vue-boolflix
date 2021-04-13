var app = new Vue (
  {
el: "#app",
data:{
search: "",
tempMovieArray: [],
tempTvArray: [],
moviesAndTV: [],
apiKey: "8b919efbe3d00d2c300a4f551dda0d42",
languages: [],
votes: []
},
methods: {
moviesearch: function(){
  axios.get("https://api.themoviedb.org/3/search/movie", {

    params: {
      api_key: this.apiKey,
      query: this.search
    }
  }).then((result) =>{
  this.tempMovieArray = result.data.results;
console.log(this.tempMovieArray);

  }
)

axios.get("https://api.themoviedb.org/3/search/tv",
{
params: {
  api_key: this.apiKey,
  query: this.search
}


}).then((result) =>{
  this.tempTvArray = result.data.results;
this.moviesAndTV = this.tempMovieArray.concat(this.tempTvArray)
}



)

function stars(){

for ( result.data.results.vote_average in result.data.results  ) {
result.data.results.vote_average = Math.ceil(result.data.results.vote_average) / 2;
}

}


  }



}


}



);
