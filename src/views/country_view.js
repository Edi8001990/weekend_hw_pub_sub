const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container) {
  this.container = container;

}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-ready' , (event) =>{

    this.render(event.detail)

  })
}



CountryView.prototype.render = function(country){

  const countryName = this.createElement('h2', 'Country Name: ' + country.name);
  countryName.className = "countryName";
  this.container.appendChild(countryName)

  const countryCapital = this.createElement('h3', 'Capital: ' + country.capital);
  countryCapital.className = "countryCapital";
  this.container.appendChild(countryCapital);

  const countryLanguages = this.createElement('p', 'Languages: ');
  countryLanguages.className = "countryLanguages";
  this.container.appendChild(countryLanguages);

  const languagesList = document.createElement('ul');
  this.populateLanguages(country.languages, languagesList);
  this.container.appendChild(languagesList);

  const countryPopulation = this.createElement('p', 'Population: ' + country.population);
  countryPopulation.className = "countryPopulation";
  this.container.appendChild(countryPopulation);


}


CountryView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element
}




CountryView.prototype.populateLanguages = function(languages, list) {
  languages.forEach((language) =>{
    const listItem = document.createElement('li');
    listItem.textContent = language.name;
    list.appendChild(listItem);
  })
}
//
  // CountryView.prototype.clearCountry = function(){
  //   this.container.innerHTML = '';
  // }




module.exports = CountryView;
