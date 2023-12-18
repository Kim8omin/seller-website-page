import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './slice'; 

const store = configureStore({
    reducer: {
        toggle: toggleReducer, 
    },
});

export default store; 