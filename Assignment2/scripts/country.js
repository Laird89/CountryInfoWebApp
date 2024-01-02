var countryCode = localStorage.getItem("CountryCode");

var api=`https://restcountries.com/v2/alpha?codes=${countryCode}`;

function loadCountry() {
    fetch(api)
    .then((res) => res.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      // Process data
      loadName(dataJSON[0]);
    });
}

function loadName(dataJSON){
    var name = document.getElementById("name");
    var flag = document.getElementById("country-flag");
    var capital = document.getElementById("capital");
    var population = document.getElementById("population");
    flag.setAttribute("src", `${dataJSON.flags.png}`)
    capital.innerHTML = dataJSON.capital;
    population.innerHTML = dataJSON.population;
}

function goToIndex(){
    history.back();
}