"use strict";
const error_message = document.querySelector(".error_message");
const title_img = document.querySelector(".title_img");
const rating = document.querySelector(".rating");
const full_title = document.querySelector(".full_title");
const movies_container = document.querySelector(".movies_container");
const Search_btn = document.querySelector(".Search_btn");
const site_search = document.querySelector("#site-search");

fetch(`https://imdb-api.com/en/API/MostPopularMovies/k_e1lr95f8`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    movieResult(data);
  })
  .catch((err) => console.log(err));

//
function movieResult(data) {
  for (let movie = 0; movie < 10; movie++) {
    const html = `
    <div class="movie_item">
    <div class="movie_img">
    <img src="${data.items[movie].image}" class="title_img" alt="" />
    </div>
    <div class="rating">
    <i class='bx bxs-star'></i> 
    ${data.items[movie].imDbRating}</div>
    <div class="full_title">${data.items[movie].title}
    </div>
    </div>
    `;
    movies_container.insertAdjacentHTML("beforeend", html);
  }
}
