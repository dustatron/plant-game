// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   };
// };

// let plant = { soil: 0, light: 0, water: 0 };

// let state = changePlantState(plant, "soil");

// console.log(state);

// ------------- State ---------------
// const changeState = (state, prop, value) => {
//   return {
//     ...state,
//     [prop]: (state[prop] || 0) + value
//   };
// };

// ----------------- Curry ------------------

// let plant = { soil: 0, light: 0, water: 0 };

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     });
//   };
// };

// const feed = changeState("soil");
// const hydrate = changeState("water");
// const giveLight = changeState("light");

// const blueFood = changeState("soil")(5);
// const greenFood = changeState("soil")(10);
// const yuckyFood = changeState("soil")(-5);

// const addLight = changeState("light")(5);

// console.log(blueFood(plant));
// console.log(greenFood(plant));

// console.log(addLight(plant));
// console.log(addLight(plant));

// --------------- Closure -------------
// const storeState = (initialState) => {
//   let currentState = initialState;
//   return (stateChangeFunction) => {
//     const newState = stateChangeFunction(currentState);
//     currentState = { ...newState };
//     return newState;
//   };
// };
// const plant = { soil: 0, light: 0, water: 0 };
// const stateChange = storeState(plant);

// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || 0) + value
//     });
//   };
// };

// const blueFood = changeState("soil")(5);
// const addLight = changeState("light")(5);

// const fedPlant = stateChange(blueFood);
// const fedPlantAgain = stateChange(blueFood);
// const fedLight = stateChange(addLight);

// This function stores our state.
