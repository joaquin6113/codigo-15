import { configureStore } from "@reduxjs/toolkit"
import currentIdSlice from "../slices/currentIdSlice"
import userSlice from "../slices/userSlice"
import adminUserSlice from "../slices/adminUserSlice"

export const store = configureStore({
    reducer: {
        currentId: currentIdSlice,
        user: userSlice,
        adminUser: adminUserSlice,
    },
})