// src/app/store.js
import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./slices/user"

export const store = configureStore({
  reducer: {
    user: userSlice,
}
})

// TypeScript types (optional)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
