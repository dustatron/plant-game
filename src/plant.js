const plantStore = () => {
  let currentPlants = [];
  // let plantCounter = 0;
  return (plantObj) => {
    // plantCounter++;
    // plantObj.PlantId = plantCounter;
    currentPlants.push(plantObj);
    return currentPlants;
  };
};

const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

// const plantStore = [
//   { plantId: 0, soil: 0, light: 0, water: 0 },
//   { plantId: 1, soil: 0, light: 0, water: 0 },
//   { plantId: 2, soil: 0, light: 0, water: 0 }
// ];

const plant = { soil: 0, light: 0, water: 0, plantId: 0 };

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

// We create two functions using our function factory. We could easily create many more.

// const feed = changeState("soil");
const giveWater = changeState("water")(5);
const giveLight = changeState("light")(5);
const giveFood = changeState("soil")(5);
const addId = changeState("plantID")((plantID += 1));

const plantState = plantStore();

const addPlant = (plant) => {
  const newplant = plantState(plant);
  console.log(newplant);
};
const PlantOne = storeState(plant);

addPlant(PlantOne());
addPlant(PlantOne(giveFood));
addPlant(PlantOne(giveFood));

// const addPlantOne = plantState(PlantOne(giveFood));
// const addPlantTwo = plantState(PlantOne(giveFood));

// console.log(addPlantTwo);

$(document).ready(function() {
  // $("#soil-value").text(newState.soil);
  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
  $("#feed").click(function() {
    const newState = PlantOne(giveFood);
    $("#soil-value").text(newState.soil);
  });

  $("#light").click(function() {
    const newState = PlantOne(giveLight);
    $("#light-value").text(newState.light);
  });

  $("#water").click(function() {
    const newState = PlantOne(giveWater);
    $("#water-value").text(newState.water);
  });
});
