// SWAPI FILMS

const fetchFilmData = (filmNumber) => {
  fetch(`https://swapi.dev/api/films/${filmNumber}/`)
    .then((response) => response.json())
    .then((data) => displayFilmData(data, filmNumber))
    .catch((error) => {
      const errorMessage = document.querySelector('.error-film');
      errorMessage.textContent = "Error! Something went wrong with loading the API.";
      console.log(error);
    });
};

const displayFilmData = (filmData, filmNumber) => {
  const filmTitleElement = document.querySelector(`.card__film${filmNumber}-title`);
  const filmDirElement = document.querySelector(`.card__film${filmNumber}-dir`);
  const filmProdElement = document.querySelector(`.card__film${filmNumber}-prod`);
  const filmDateElement = document.querySelector(`.card__film${filmNumber}-date`);
  const filmNumElement = document.querySelector(`.card__film${filmNumber}-num`);

  filmTitleElement.textContent = filmData.title;
  filmDirElement.textContent = filmData.director;
  filmProdElement.textContent = filmData.producer;
  filmDateElement.textContent = filmData.release_date;
  filmNumElement.textContent = filmData.episode_id;
};

for (let i = 1; i <= 6; i++) {
  fetchFilmData(i);
}


// SWAPI PEOPLE

const fetchPeopleData = (peopleNumber) => {
  fetch(`https://swapi.dev/api/people/${peopleNumber}/`)
    .then((response) => response.json())
    .then((data) => displayPeopleData(data, peopleNumber))
    .catch((error) => {
      const errorMessage = document.querySelector('.error-people');
      errorMessage.textContent = "Error! Something went wrong.";
      console.log(error);
    });
};

const displayPeopleData = (peopleData, peopleNumber) => {
  const peopleNameElement = document.querySelector(`.card__people${peopleNumber}-name`);
  const peopleYearElement = document.querySelector(`.card__people${peopleNumber}-year`);
  const peopleHeiElement = document.querySelector(`.card__people${peopleNumber}-hei`);
  const peopleHairElement = document.querySelector(`.card__people${peopleNumber}-hair`);
  const peopleEyeElement = document.querySelector(`.card__people${peopleNumber}-eye`);

  peopleNameElement.textContent = peopleData.name;
  peopleYearElement.textContent = peopleData.birth_year;
  peopleHeiElement.textContent = peopleData.height;
  peopleHairElement.textContent = peopleData.hair_color;
  peopleEyeElement.textContent = peopleData.eye_color;
};

for (let i = 1; i <= 6; i++) {
  fetchPeopleData(i);
}


// SWAPI PLANETS

const fetchPlanetData = (planetNumber) => {
  fetch(`https://swapi.dev/api/planets/${planetNumber}/`)
    .then((response) => response.json())
    .then((data) => displayPlanetData(data, planetNumber))
    .catch((error) => {
      const errorMessage = document.querySelector('.error-planet');
      errorMessage.textContent = "Error! Something went wrong.";
      console.log(error);
    });
};

const displayPlanetData = (planetData, planetNumber) => {
  const planetNameElement = document.querySelector(`.card__planet${planetNumber}-name`);
  const planetRotElement = document.querySelector(`.card__planet${planetNumber}-rot`);
  const planetDiaElement = document.querySelector(`.card__planet${planetNumber}-dia`);
  const planetCliElement = document.querySelector(`.card__planet${planetNumber}-cli`);
  const planetTerElement = document.querySelector(`.card__planet${planetNumber}-ter`);

  planetNameElement.textContent = planetData.name;
  planetRotElement.textContent = planetData.rotation_period;
  planetDiaElement.textContent = planetData.diameter;
  planetCliElement.textContent = planetData.climate;
  planetTerElement.textContent = planetData.terrain;
};

for (let i = 1; i <= 6; i++) {
  fetchPlanetData(i);
}


// SWAPI VEHICLES

const fetchVehicleData = (vehicleNumber) => {
  fetch(`https://swapi.dev/api/vehicles/${vehicleNumber}/`)
    .then((response) => response.json())
    .then((data) => displayVehicleData(data, vehicleNumber))
    .catch((error) => {
      const errorMessage = document.querySelector('.error-vehicle');
      errorMessage.textContent = "Error! Something went wrong.";
      console.log(error);
    });
};

const displayVehicleData = (vehicleData, vehicleNumber) => {
  const vehicleNameElement = document.querySelector(`.card__vehicle${vehicleNumber}-name`);
  const vehicleModElement = document.querySelector(`.card__vehicle${vehicleNumber}-mod`);
  const vehicleManuElement = document.querySelector(`.card__vehicle${vehicleNumber}-manu`);
  const vehicleCrewElement = document.querySelector(`.card__vehicle${vehicleNumber}-crew`);
  const vehiclePasElement = document.querySelector(`.card__vehicle${vehicleNumber}-pas`);

  vehicleNameElement.textContent = vehicleData.name;
  vehicleModElement.textContent = vehicleData.model;
  vehicleManuElement.textContent = vehicleData.manufacturer;
  vehicleCrewElement.textContent = vehicleData.crew;
  vehiclePasElement.textContent = vehicleData.passengers;
};

for (let i = 1; i <= 6; i++) {
  fetchVehicleData(i);
}