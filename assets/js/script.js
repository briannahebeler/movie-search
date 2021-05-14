$(document).ready(function () {

    function displayMovieInfo(movie) {

        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
        console.log(queryURL)
        // Creates AJAX call for the specific movie searched
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }

    $("#search-button").on("click", function () {
        var movie = $("#movie-input").val();
        console.log(movie);
        displayMovieInfo(movie);
    })

    // $("#search-button").on("click", function () {
    //     var searchValue = $("#movie-input").val();
    //     searchMovie(searchValue);
    //     $("movie-input").val("");
    //     // searchMovie(searchValue);
    // })

    // // var searchHistory = [];

    // // function saveSearch(searchedMovie) {
    // //     localStorage.setItem("savedSearch", searchedMovie);

    // //     if(!searchHistory.includes(searchedMovie)){
    // //         searchHistory.push(searchedMovie);
    // //         var movieTitle = $("<h6>").addClass("card-body").text(searchedMovie);
    // //         var card = $("<div>").addClass("card");
    // //         card.append(movieTitle);

    // //         $("#searchHistory").append(card);

    // //         movieTitle.on("click", function() {
    // //             searchMovie(this.innerHTML);
    // //         })
    // //     }
    // // }

    // function searchMovie(searchedMovie) {
    //     var queryURL = "https://www.omdbapi.com/?t=" + searchedMovie + "&apikey=trilogy";

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {
    //         console.log(response);
    //         saveSearch(searchedMovie);

    //         $("#movies-view").empty();

    //         // Creates a div to hold the movie
    //         var movieDiv = $("<div>");
    //         // Retrieves the Rating Data
    //         var rating = response.Rated;
    //         // Creates an element to have the rating displayed
    //         var ratingP = $("<p>").text("Rating: " + rating);
    //         // Displays the rating
    //         movieDiv.append(ratingP);

    //         // Retrieves the release year
    //         var year = response.Released;
    //         // Creates an element to hold the release year
    //         var yearP = $("<p>").text("Released: " + year);
    //         // Displays the release year
    //         movieDiv.append(yearP);

    //         // Retrieves the plot
    //         var plot = response.Plot;
    //         // Creates an element to hold the plot
    //         var plotP = $("<p>").text("Plot: " + plot);
    //         // Appends the plot
    //         movieDiv.append(plotP);

    //         // Creates an element to hold the image
    //         var imageUrl = response.Poster;
    //         var image = $("<img>").attr("src", imageUrl);
    //         // Appends the image
    //         movieDiv.append(image);

    //         $("#movies-view").append(movieDiv);

    //     })
    // }

    // function displaySearchHistory() {
    //     var history = localStorage.getItem("savedSearch");
    //     searchMovie(history);
    // }

    // displaySearchHistory();














    // // array of movies
    // var movies = [];

    // function displayMovieInfo() {

    //     var movie = $(this).attr("data-name");
    //     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

    //     // AJAX call for the movie search
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function (response) {

    //         console.log(response);

    //         // Creates a div to hold the movie
    //         var movieDiv = $("<div>");
    //         // Retrieves the Rating Data
    //         var rating = response.Rated;
    //         // Creates an element to have the rating displayed
    //         var ratingP = $("<p>").text("Rating: " + rating);
    //         // Displays the rating
    //         movieDiv.append(ratingP);

    //         // Retrieves the release year
    //         var year = response.Released;
    //         // Creates an element to hold the release year
    //         var yearP = $("<p>").text("Released: " + year);
    //         // Displays the release year
    //         movieDiv.append(yearP);

    //         // Retrieves the plot
    //         var plot = response.Plot;
    //         // Creates an element to hold the plot
    //         var plotP = $("<p>").text("Plot: " + plot);
    //         // Appends the plot
    //         movieDiv.append(plotP);

    //         // Creates an element to hold the image
    //         var imageUrl = response.Poster;
    //         var image = $("<img>").attr("src", imageUrl);
    //         // Appends the image
    //         movieDiv.append(image);

    //         $("#movies-view").append(movieDiv);
    //     });

    // }

    // // Function for displaying movie data
    // function renderButtons() {

    //     // Deletes the movies prior to adding new movies
    //     // (this is necessary otherwise you will have repeat buttons)
    //     $("#search-history").empty();
    //     $("#movies-view").empty();
    //     // Loops through the array of movies
    //     for 
    //     (var i = 0; i < movies.length; i++)
    //     // (var i = movies.length; i = 0; i--) 
    //     {

    //         // Then dynamicaly generates buttons for each movie in the array
    //         // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    //         var a = $("<button>");
    //         // Adds a class of movie to our button
    //         a.addClass("movie");
    //         // Added a data-attribute
    //         a.attr("data-name", movies[i]);
    //         // Provided the initial button text
    //         a.text(movies[i]);
    //         // Added the button to the buttons-view div
    //         $("#search-history").append(a);
    //     }
    // }

    // // This function handles events where the add movie button is clicked
    // $("#search-button").on("click", function (event) {
    //     event.preventDefault();
    //     // This line of code will grab the input from the textbox
    //     var movie = $("#movie-input").val().trim();

    //     // The movie from the textbox is then added to our array
    //     movies.push(movie);

    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    // });

    // // Adding click event listeners to all elements with a class of "movie"
    // $(document).on("click", ".movie", displayMovieInfo);

    // // Calling the renderButtons function to display the initial buttons
    // renderButtons();

})