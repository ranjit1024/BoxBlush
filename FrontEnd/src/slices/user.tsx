// src/features/counter/counterSlice.js
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
interface user{
  userId?:string,
  gameId?:string
}
const userSlice = createSlice({
  name:"user",
  initialState: {} as user,
  reducers:{
    adduserId(state, action: PayloadAction<user>){
      state.userId = action.payload.userId
    },
    addgameId(state,action:PayloadAction<user>){
      state.gameId = action.payload.gameId
    }
  },
  
}
)

export const { adduserId,addgameId } = userSlice.actions
export default userSlice.reducer
