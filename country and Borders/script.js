'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// -----------How to call Ajax with XMLHttpRequest
// function getCountryName(countryName) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
//   request.send();

//   // load req

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     // get the neighbour data and loop it
//     const [...neighbourCountry] = data.borders;
//     // condition for if there is no border
//     if (!neighbourCountry) return;

//     console.log(neighbourCountry);
//     neighbourCountry.forEach(element => {
//       console.log(element);

//       // Ajax call for neighbour
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v2/alpha/${element}`);
//       request2.send();

//       // load neighbour
//       request2.addEventListener('load', function () {
//         const data2 = JSON.parse(this.responseText);
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   });
// }

//getCountryName('New Zealand');
//getCountryName('ghana');

// renderCountry f(x)
function renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${+(
      data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function getCountryName(country) {
  // Main country
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);

      // get neighbouring countries
      const [...getNeighbourCountry] = data[0].borders;
      console.log(getNeighbourCountry);

      //loop borders
      const arr = [];
      const allPromise = getNeighbourCountry.forEach(element => {
        arr.push(fetch(`https://restcountries.com/v2/alpha/${element}`));

        //fetch(`https://restcountries.com/v2/alpha/${element}`);
        //console.log(element);
      });
      console.log(arr);
      return Promise.all(arr);

      // 2
      // return fetch(
      //   `https://restcountries.com/v2/alpha/${getNeighbourCountry[0]}`
      // );
      // 3
    })
    .then(response => {
      response.forEach(res => process(res.json()));
    });

  //.then(data => console.log(data));
  // neighbour countries

  let process = data => {
    data.then(dat => renderCountry(dat, 'neighbour'));
  };
}

getCountryName('usa');
