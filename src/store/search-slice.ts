import { Option, Range, SortTypes } from "@/types/sharedTypes";
import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
    meterRange: Range,
    priceRange: Range,
    sortType: Option,
    selectedFilters: string[]
}

const initialState: SearchState = {
    meterRange: {
        min: 20,
        max: 300,
    },
    priceRange: {
        min: 300000000,
        max: 12000000000
    },
    sortType: SortTypes[0],
    selectedFilters: []
}

const searchSlice = createSlice({
    name: "searchRealEstate",
    initialState,
    reducers: {
        setSelectedFilters(state,action) {
            state.selectedFilters = action.payload;
        },
        setPrice(state,action){
            state.priceRange = action.payload;
        },
        setMeter(state,action){
            state.meterRange = action.payload;
        },
        setSortType(state,action){
            state.sortType = action.payload;
        }
    },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;