import { configureStore } from "@reduxjs/toolkit"
import currentIdSlice from "../slices/currentIdSlice"
import userSlice from "../slices/userSlice"
import adminUserSlice from "../slices/adminUserSlice"
import tokenSlice from "../slices/tokenSlice"

export const store = configureStore({
    reducer: {
        currentId: currentIdSlice,
        user: userSlice,
        token: tokenSlice,
        adminUser: adminUserSlice,
    },
})