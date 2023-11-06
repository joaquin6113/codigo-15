import { configureStore } from "@reduxjs/toolkit"
import currentIdSlice from "../slices/currentIdSlice"
import userSlice from "../slices/userSlice"

export const store = configureStore({
    reducer: {
        currentId: currentIdSlice,
        user: userSlice,
    },
})