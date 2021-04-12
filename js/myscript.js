var app = new Vue (
  {
el: "#app",
data:{
search: "",
tempMovieArray: [],
tempTvArray: [],
apiKey: "8b919efbe3d00d2c300a4f551dda0d42",
languages: []
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
  this.tempMovieArray = result.data.results;
console.log(this.tempMovieArray);
}



)
axios.get("https://api.themoviedb.org/3/search",
{
params: {
  api_key: this.apiKey,
  query: this.search
}

}).then((result) =>{
  this.languages = result.data.results.original_language;
console.log(this.languages);
}



)


  }



}


}



);
