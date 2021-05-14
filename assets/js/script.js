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

            //test
            var list = $("<list>");
            list.attr("class", "list-group-item");
            $("#movies-view").append(list);

            var row = $("<div>");
            row.attr("class", "row");
            list.append(row);

            var col1 = $("<div>");
            col1.attr("class", "col-sm-4");
            row.append(col1);

            var poster = $("<img>");
            poster.attr("class", "img-thumbnail img-fluid w-100");
            poster.attr("src", response.Poster);
            poster.attr("alt", response.Title);
            col1.append(poster);

            var col2 = $("<div>");
            col2.attr("class", "col-sm-8");
            row.append(col2);

            var head = $("<h3>").text(response.Title);
            col2.append(head);

            // Creates an element to hold the plot
            var plot = $("<p>").text(response.Plot);
            // Displays the plot
            col2.append(plot);

            // Creates an element to hold the release year
            var year = $("<p>").text("Released: " + response.Released);
            // Displays the release year
            col2.append(year);

            // Creates an element to hold the plot
            var director = $("<p>").text("Director: " + response.Director);
            // Displays the plot
            col2.append(director);

            // Creates an element to hold the plot
            var actors = $("<p>").text("Actors: " + response.Actors);
            // Displays the plot
            col2.append(actors);

             // Creates an element to have the rating displayed
            var rating = $("<p>").text("Rating: " + response.Rated);
             // Displays the rating
            col2.append(rating);

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
            var card = $("<div>").addClass("card movieSearches");
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