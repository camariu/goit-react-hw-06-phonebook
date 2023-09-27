import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "./phoneSlice";
import { filterReducer } from "./filterSlice";

const store = configureStore ({
    reducer:{
        phonebook: phoneSlice,
        filter: filterReducer

    },
});

export default store