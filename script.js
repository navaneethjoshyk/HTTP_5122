//Movie object with 4 properties and 1 method
let movie = { 
    title: "The Shawshank Redemption",
    director: "Frank darabont",
    genre: "Drama",
    rating:"9.3",
//updateRating function to update the rating of the movie
    updateRating: function(){
        this.rating = prompt("Current rating is" + this.rating + ". Enter a new rating: " , this.rating);
        alert("Rating has been updated to " + this.rating);
    }
};
//Prints the movie name 
console.log("Original movie object: " + movie);
//newTitle for changing the old movie title to a new one and its stored in newTitle
let newTitle = prompt("Current title is "+ movie.title + " .Enter a new title: ", movie.title);
movie.title = newTitle;
//newTitle for changing the old movie director to a new one and its stored in newDirector
let newDirector = prompt("Current director is "+ movie.director+ " . "+" Enter a new director : ", movie.director);
movie.director = newDirector;
//functioncall for updating the rating
movie.updateRating();
//updated movie 
console.log("Updated movie Object: ", movie);