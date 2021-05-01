function updateSpecies(ele) {
    if(event.key === "Enter") {
        console.log("Search triggered.")

        $.ajax({
            url: "http://localhost:8000/species",
            data: {
             name: $("#search").val()
            },
            success: function( result ) {
              $( "#name" ).html( "<italic>" + result + "</italic>" );
            }
          });
    }
}