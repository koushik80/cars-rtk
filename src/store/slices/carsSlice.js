import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumption
      // action.payload ==== { name: 'ab', cost: 250 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()  // built-in function from redux toolkit to generate random id
      });
    },
    removeCar(state, action) {
      // Assumption
      // action.payload === The id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
