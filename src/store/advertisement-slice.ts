import { createSlice } from "@reduxjs/toolkit";
const advertisementSlice = createSlice({
  name: "advertisement",
  initialState: {
    advertisement: {
      title: "",
      propertyType: null,
      propertyArea: null,
      space: "0",
      floor: "1",
      room: "0",
      elevator: false,
      parking: false,
      warehouse: false,
      creation_year: "1403",
      description: "",
      ownerFirstName: "",
      ownerLastName: "",
      ownerFatherName: "",
      ownerNationalId: null,
      quota: "",
    },
    propertyType: null,
    newAddStep: 1,
  },
  reducers: {
    setPropertyType(state, action) {
      state.advertisement.propertyType = action.payload;
    },
    setNewAdStep(state, action) {
      state.newAddStep = action.payload;
    },
    setStepTwoData(state, action) {
      state.advertisement.propertyArea = action.payload.propertyArea;
      state.advertisement.room = action.payload.room;
      state.advertisement.floor = action.payload.floor;
      state.advertisement.parking = action.payload.parking;
      state.advertisement.elevator = action.payload.elevator;
      state.advertisement.warehouse = action.payload.warehouse;
    },
    setStepThreeData(state, action) {
      state.advertisement.title = action.payload.title;
      state.advertisement.description = action.payload.description;
    },
    setStepSixData(state, action) {
      state.advertisement.ownerFirstName = action.payload.ownerFirstName;
      state.advertisement.ownerLastName = action.payload.ownerLastName;
      state.advertisement.ownerFatherName = action.payload.ownerFatherName;
      state.advertisement.quota = action.payload.quota;
      state.advertisement.ownerNationalId = action.payload.ownerNationalId;
    },
  },
});
export const advertisementActions = advertisementSlice.actions;
export default advertisementSlice.reducer;
