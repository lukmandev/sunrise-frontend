import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isActive: false,
    message: ""
}



const simpleModal = createSlice({
  	name: 'simpleModal',
  	initialState,
  	reducers: {
        setModalActive(state, action){
            state.isActive = action.payload
        },
        setMessage(state, action){
            state.message = action.payload
        }
  	},
})

export const {
    setModalActive,
    setMessage
} = simpleModal.actions
export default simpleModal.reducer;