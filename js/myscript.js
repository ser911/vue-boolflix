var app = new Vue (
  {
el: "#app",
data:{
search: "",
tempMovieArray: [],
tempTvArray: [],
moviesAndTV: [],
apiKey: "8b919efbe3d00d2c300a4f551dda0d42",
languages: ["en","it","es","fr"],
votes: []
},
methods: {
moviesearch: function(){
  if (this.search !== "") {


  axios.get("https://api.themoviedb.org/3/search/movie", {

    params: {
      api_key: this.apiKey,
      query: this.search
    }
  }).then((result) =>{
  this.tempMovieArray = result.data.results;
  this.moviesAndTV = this.moviesAndTV.concat(this.tempMovieArray)
console.log(this.tempMovieArray);

  }
)
this.moviesAndTV = [];
axios.get("https://api.themoviedb.org/3/search/tv",
{
params: {
  api_key: this.apiKey,
  query: this.search
}


}).then((result) =>{
  this.tempTvArray = result.data.results;

this.moviesAndTV = this.moviesAndTV.concat(this.tempTvArray)
console.log(this.moviesAndTV);
}



)








  }
  }


}


}



);
