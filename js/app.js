
function setCustomInfoTrack(item){
  var customInfoTrack = {artist:"", trackName:"", urlImageAlbum:"", urlTrackPreview:""};

  customInfoTrack.artist = item.artists[0].name;
  customInfoTrack.trackName = item.name;
  customInfoTrack.urlImageAlbum = item.album.images[0].url;
  customInfoTrack.urlTrackPreview = item.preview_url;

  return customInfoTrack;
}

function selectInfoTracks(infoTracks){
  var arrayCustomInfoTracks = [];

  $.each(infoTracks, function(key, tracks){

    $.each(tracks.items, function(index, item){
         arrayCustomInfoTracks.push(setCustomInfoTrack(item));
    });

  });

  return arrayCustomInfoTracks;
}

function getInputTextSearch (inputSearch){//ajusta espacios con "+" como lo pide el API
   return inputSearch.val().split(" ").join("+");
}

function showInfoTracks(data){
  var template = Handlebars.compile($('#tracks-template').html());
  $(".wrapper-tracks").replaceWith(template({'tracks':data}));
}


//////////////////////////// events

$("#search-track").keypress(function(e){
   if(e.keyCode == 13){

      e.preventDefault();

      var inputTextSearch = getInputTextSearch($("#search-track"));

      $.ajax({
        url: 'https://api.spotify.com/v1/search?q=' + inputTextSearch + '&type=track',
        dataType: 'json'
      })
      .done(function(jsonTracks) {
        var resultSearch = selectInfoTracks(jsonTracks); // objetos con los valores solicitados
        resultSearch.length > 0 ? showInfoTracks(resultSearch) : alert("Tu canción o artista no se encuentra");
      });

    }

});

