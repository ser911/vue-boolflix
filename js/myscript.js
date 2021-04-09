var app = new Vue (
  {
el: "#app",
data:{

},
methods: {
moviesearch: function(){
  axios.get("https://api.themoviedb.org/3/movies/550?api_key=8b919efbe3d00d2c300a4f551dda0d42").then((result) =>{
console.log(result.data.response);
    
  }
)
}


}


}
);
