// user can input

// user clicks button search api for photo of user date


$.get("https://api.nasa.gov/planetary/apod?api_key=G1HURmLK4MdyhAPtU0Cze9d9asWjfNuTy2WRpYsW", function(res){
console.log(res);
});








// $("button").on("click", function(){
//   var mez = Number($("#month").val())
//   var dia = Number($("#day").val())
//   var ano = Number($("#year").val())
//   alert(mez)
// });
//
//
$("img").attr("src","https://apod.nasa.gov/apod/image/1805/TerminatorMoon_Zia_960.jpg");
