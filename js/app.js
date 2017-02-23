
var inputTextSearch= "";
var arrayTracks = [];
var customInfoTrack = {artist:"", trackName:"", urlImageAlbum:"", urlTrackPreview:""};



$("#search-track").keypress(function(e){
   if(e.keyCode == 13){
      e.preventDefault();
       
       inputTextSearch = $("#search-track").val().split(" ").join("+");

      $.ajax({
        url: 'https://api.spotify.com/v1/search?q=' + inputTextSearch + '&type=track',
        dataType: 'json'
      })
      .done(function(infoTrack) {
        $.each(infoTrack, function(key, tracks){
          $.each(tracks.items, function(index, item){
               customInfoTrack.artist = item.artists[0].name;
               customInfoTrack.trackName = item.name;
               customInfoTrack.urlImageAlbum = item.album.images[0].url;
               customInfoTrack.urlTrackPreview = item.preview_url;
               arrayTracks.push(customInfoTrack);
          });
        });
        console.log(arrayTracks);
      });

    }

});


