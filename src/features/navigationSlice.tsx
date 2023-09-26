import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface navigationType {
    value: 'history' | 'form' | 'list'
}

const initialState: navigationType = {
    value: 'history'
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers:{
        showHistory: (state) => {
            state.value = 'history'
        },
        showFrom: (state) => {
            state.value = 'form'
        },
        showList: (state) => {
            state.value = 'list'
        }
    }
});

export const {showHistory, showFrom, showList} = navigationSlice.actions;

export const navigation = (state: RootState) => state.navigation.value;

export default navigationSlice.reducer;