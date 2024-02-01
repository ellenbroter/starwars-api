// SWAPI FILMS

const fetchFilmData = (filmNumber) => {
	fetch(`https://swapi.dev/api/films/${filmNumber}/`)
	  .then((response) => response.json())
	  .then((data) => displayFilmData(data, filmNumber))
	  .catch(error => {
      const errorMessage = document.querySelector('.error-film');
      errorMessage.textContent = "Error! Something went wrong.";
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
 
 fetchFilmData(1);
 fetchFilmData(2);
 fetchFilmData(3);
 fetchFilmData(4);
 fetchFilmData(5);
 fetchFilmData(6);


 // SWAPI PEOPLE

 const fetchPeopleData = (peopleNumber) => {
	fetch(`https://swapi.dev/api/people/${peopleNumber}/`)
	  .then((response) => response.json())
	  .then((data) => displayPeopleData(data, peopleNumber))
	  .catch(error => {
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
 
 fetchPeopleData(1);
 fetchPeopleData(2);
 fetchPeopleData(3);
 fetchPeopleData(4);
 fetchPeopleData(5);
 fetchPeopleData(6);


 // SWAPI PLANETS

 const fetchPlanetData = (planetNumber) => {
	fetch(`https://swapi.dev/api/planets/${planetNumber}/`)
	  .then((response) => response.json())
	  .then((data) => displayPlanetData(data, planetNumber))
	  .catch(error => {
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
 
 fetchPlanetData(1);
 fetchPlanetData(2);
 fetchPlanetData(3);
 fetchPlanetData(4);
 fetchPlanetData(5);
 fetchPlanetData(6);


 // SWAPI VEHICLES

 const fetchVehicleData = (vehicleNumber) => {
	fetch(`https://swapi.dev/api/vehicles/${vehicleNumber}/`)
	  .then((response) => response.json())
	  .then((data) => displayVehicleData(data, vehicleNumber))
	  .catch(error => {
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
 
 fetchVehicleData(6);
 fetchVehicleData(7);
 fetchVehicleData(8);
 fetchVehicleData(14);
 fetchVehicleData(16);
 fetchVehicleData(18);