import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function register(
  currentState: boolean,
  action: PayloadAction<boolean>
): boolean {
  const registeredUser = action.payload;
  const newState = registeredUser;
  return newState;
}
const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: { register },
});

export const authActionCreators = authSlice.actions;
export const authReducersContainer = authSlice.reducer;
