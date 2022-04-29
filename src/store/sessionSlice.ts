import { createSlice } from '@reduxjs/toolkit'
import { ISession, SessionAction, SessionState } from "../types/Session";

export const initialState: ISession = {
  email: null,
  password: null,
  isLogged: false,
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    CREATE_SESSION: (state: ISession, action: SessionAction): SessionState => {
        const newSession: ISession = {
            email: action.payload.email,
            password: action.payload.password,
            isLogged: true,
        }

        return {
            ...state,
            ...newSession
        }
    },
    DESTROY_SESSION: (): SessionState => {
      console.log("initialState", initialState)
        return {
            ...initialState,
        }
    },
  },
})


export const { CREATE_SESSION, DESTROY_SESSION } = sessionSlice.actions;

export default sessionSlice.reducer;
