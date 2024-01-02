var cList = new Array();

class Country {
  constructor(name, code, capital) {
    this.name = name;
    this.code = code;
    this.capital = capital;
  }
}

function loadCountries() {
  fetch("../data/country.json")
    .then((res) => res.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      // Process data
      populateSelectBox(dataJSON);
      showCountryInfo(dataJSON);
      showHeaderAndFooter();
    });
}

function showHeaderAndFooter() {
  let header = document.getElementById("header");
  let footer = document.getElementById("footer");

  header.innerHTML = `<p class="header">Fall 2023 Assignment #2</p>`;
  footer.innerHTML = `<p class="footer">My Login: lairdch / My ID: 991279847 / My Program: Computer Programming</p>`;
}

function populateSelectBox(dataJSON) {
  var selectBox = document.getElementById("selectBox");

  for (let country of dataJSON.Countries) {
    selectBox.innerHTML += `<option>${country.name}</option>`;
  }

  for (let country of dataJSON.Countries) {
    cList.push(new Country(country.name, country.code, country.capital));
  }
}

function showCountryInfo(dataJSON) {
  var countryInfo = document.getElementById("countryInfo");

  for (let country of dataJSON.Countries) {
    countryInfo.innerHTML += `<p>${country.name} - ${country.capital} - ${country.code}</p> <hr>`;
  }
}

function selectCountry() {
  var selectedCountry = document.getElementById("selectBox");

  for (let country of cList) {
    if (country.name == selectedCountry.value) {
      location.assign(`./pages/country.html?Code=${country.code}`);
      localStorage.setItem("CountryName", country.name);
      localStorage.setItem("CountryCode", country.code);
      localStorage.setItem("Capital", country.capital);
    }
  }

  selectedCountry.selectedIndex = 0;
}
