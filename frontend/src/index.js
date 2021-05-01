function updateSpecies() {
    var name = $("#search-text").val();

    $.ajax({
        url: "http://localhost:8000/species",
        data: {
            name: name
        },
        success: function(result) {
            $("#name").html("<i>" + result + "</i>");
        }
    });
}

function checkClick(ele) {
    if (event.key === "Enter") {
        updateSpecies()
    }
}

function click() {
    console.log("clicked")
    updateSpecies($("#search-text").val())
}