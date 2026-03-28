const movies = [
    { id: 1, Image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg", title: "Inception", genre: "Thriller", year: 2010 },
    { id: 2, Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkc6wpewZHXmv8dyDOSwyXLhtPp1eYRXfoNjO2mVasS1KjK1Bf", title: "Dark Knight", genre: "Action", year: 2011 },
    { id: 3, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykVQsS0l8H2erHTbSj2sw33ZYZv3rrb6pNg&s" , title: "Interstellar", genre: "Thriller", year: 2014 },
    { id: 4, Image:"https://m.media-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9.jpg", title: "John Wick", genre: "Action", year: 2014 },
     { id: 5, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XPdCNSgoFQS4ytebVvCUY1TfArRYlo0t5Q&s", title: "The Matrix", genre: ["Action", "Sci-Fi"], year: 2024 },
 { id: 6, Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHqERudQeMKbEpp97lLK_unmW1aJZLdP_-A&s", title: "Parasite", genre: ["Action", "Sci-Fi", "Thriller"], year: 2019 },
      // TRY TO ADD MORE DATA WITH IMAGE
]; // Our API Data

const container = document.getElementById("movie-container");

// Master Function
function displayMovies(data) {
    const movieArray = Array.isArray(data) ? data : [data];

    container.innerHTML = movieArray.map(movie =>
        `
            <div class="col-md-4">
                <div class="card h-100 shadow-sm">
                                        <img class= card-img-top src="${movie.Image} "></img>
                    <div class="card-body d-flex">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text text-muted">${movie.genre} - ${movie.year}</p>
                    </div>
                </div>
            </div>
        `
    ).join('');

}

// Show All Movies
function showAll() {
    displayMovies(movies);
}

// FILTER: Show only Action movies
function filterAction() {
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Action";
    });
    displayMovies(actionMovies);
}

// CREATE A FILTER FUNCTION FOR THRILLER MOVIE

function filterThriller() {
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Thriller";
    });
    displayMovies(actionMovies);
}
function filterScifi() {
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Sci-fi";
    });
    displayMovies(actionMovies);}

// CREATE A FILTER FUNCTION TO FILTER THE MOVIE WITH THE YEAR OF AFTER 2012

function filterYear() {
    const actionMovies = movies.filter((movie) => {
        return movie.year >= 2012;
    });
    displayMovies(actionMovies);
}

// FIND: Locate one specific movie
function findInception() {
    const trendingMovie = movies.find((movie) => {
        return movie.title === "Inception";
    });
    displayMovies(trendingMovie);
}

// FIND: Search Movie Function
function searchMovie() {
    const userInput = document.getElementById("searchInput").value;

    // VALIDATE THE INPUT FIELD

    const searchedMovie = movies.find((movie) => {
        // reverse engineering -> amazon
        return movie.title.toLowerCase() === userInput.toLowerCase();
    });
    displayMovies(searchedMovie);
}

showAll();