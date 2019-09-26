$(document).ready(function() {
  

  createGrid();
  $( "#submit" ).click(function() {
    console.log("no")
    getGif();
    hoverActive();
  });


  function getGif(){

    var input = $("#search-input").val().trim();
    input = input.replace(/ /g, "+");
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=gUUfS6bKKE16jJ0CDTg90UuDDGj7kvyC&limit=28';
    
    var xhr = $.get(queryURL);

      xhr.done(function(response) {
        
        console.log("success got data", response);
      
        var giff = response.data
        
        for(i in giff){

          $('#g'+i).empty().append("<img src='"+giff[i].images.original.url+"' class ='imgBox'>");
          $('#g'+i).append("<div class='urlContainer is-4' ><p class='urlText'>"+giff[i].images.original.url+"</p></div>");
       
           }
      });
    
  }
  
  function hoverActive(){

    
    $(".box-style").hover(function () {
      var hoveredID = this.id;
     $('#'+hoveredID).addClass("hovered");
     

  }, 
  function () {
    var hoveredID = this.id;
    $('#'+hoveredID).removeClass("hovered");
  });
  }

  function createGrid(){
    for(var i = 0; i < 28; i++){

    var $newGifDiv = $("<div/>")
    .attr("id", "g"+ i)
    .addClass("column")
    .addClass("is-3")
    .addClass("has-text-centered")
    .addClass("level")
    .addClass("box-style");

    $('#target-container').append($($newGifDiv))
    }
  }
   
  
        
});
