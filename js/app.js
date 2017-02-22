
var inputTextSearch= "";

$("#search-track").keydown(function(e){
   if(e.keyCode == 13){
       inputTextSearch = $("#search-track").val().split(" ").join("+");

       $.ajax({
         //url: 'https://api.spotify.com/v1/search?q=' + inputTextSearch + '&type=track',
         url:'https://api.spotify.com/v1/search?q=muse&type=track',
         dataType: 'json'
       })
       .done(function(infoMusic) {
         console.log(infoMusic);
       });

       console.log("salio AJAX");
   }
});


