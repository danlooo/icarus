var data;
fetch("data.json")
    .then(response => response.json())
    .then(x => data = x)
    .then(x => $("#api-link").attr("href", data.api_entrypoint + "__docs__/"))


function updateSpecies() {
    var name = $("#search-text").val();

    $.ajax({
        url: data.api_entrypoint + "species",
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