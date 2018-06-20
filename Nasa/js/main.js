// user can input

// user clicks button search api for photo of user date
$(document).ready(function(){
  $("button").on("click", function(){
    var date = $("#date").val();
    var source = "https://api.nasa.gov/planetary/apod?api_key=G1HURmLK4MdyhAPtU0Cze9d9asWjfNuTy2WRpYsW&date=" + date;
    // alert(mez);
    $.get(source, function(res){
      $("img").attr("src",res.hdurl);
    });
  });
});
