$(document).ready(function () {

    // array of session search history 
    var searchHistory = [];

    // on click of the search button the search movie function will be run using the users input
    $("#search-button").on("click", function () {
        var movie = $("#movie-input").val();
        console.log("searched movie", movie);
        searchMovie(movie);
    })

    // the users inputted movie will be searched using the omdb api to gather select data on the movie
    function searchMovie(searchedMovie) {
        var queryURL = "https://www.omdbapi.com/?t=" + searchedMovie + "&apikey=trilogy";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            // the searched movie will be saved using the save search function
            saveSearch(searchedMovie);

            $("#movies-view").empty();

            // Creates a div to hold the movie
            var movieDiv = $("<div>");
            // Retrieves the Rating Data
            var rating = response.Rated;
            // Creates an element to have the rating displayed
            var ratingP = $("<p>").text("Rating: " + rating);
            // Displays the rating
            movieDiv.append(ratingP);

            // Retrieves the release year
            var year = response.Released;
            // Creates an element to hold the release year
            var yearP = $("<p>").text("Released: " + year);
            // Displays the release year
            movieDiv.append(yearP);

            // Retrieves the plot
            var plot = response.Plot;
            // Creates an element to hold the plot
            var plotP = $("<p>").text("Plot: " + plot);
            // Appends the plot
            movieDiv.append(plotP);

            // Creates an element to hold the image
            var imageUrl = response.Poster;
            var image = $("<img>").attr("src", imageUrl);
            // Appends the image
            movieDiv.append(image);

            $("#movies-view").append(movieDiv);

        })
    }

    // this function saves the users movie search in the local storage 
    function saveSearch(searchedMovie) {
        // localStorage.setItem("savedSearch", searchedMovie);

        // if the movie isnt already in the search history array it will be added
        if(!searchHistory.includes(searchedMovie)){
            searchHistory.push(searchedMovie);
            console.log("search history", searchHistory);
            localStorage.setItem("savedSearch", searchedMovie);

            // displays new search on the displayed movie search history card
            var movieTitle = $("<h6>").addClass("card-body").text(searchedMovie);
            var card = $("<div>").addClass("card");
            card.append(movieTitle);
            $("#search-history").append(card);

            // if the user clicks on the past search it will re-run the search and display movie info
            movieTitle.on("click", function() {
                searchMovie(this.innerHTML);
            })
        }
    }

    function displaySearchHistory() {
        var history = localStorage.getItem("savedSearch");
        console.log("history: " + history)
        //if there is no movie search history nothing will be displayed
        if (history === "null") {
            return
        } 
        // if there is movie history the last searched movie will be displayed on page reload
        else {
            searchMovie(history);
        }
    }

    displaySearchHistory();

})