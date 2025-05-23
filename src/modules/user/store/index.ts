import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { profileReducer } from "./slices/profileSlice";
import { certificateReducer } from "./slices/certificateSlice";
import { projectReducer } from "./slices/projectSlice";
import { experienceReducer } from "./slices/experienceSlice";

const store = configureStore({
	reducer: {
		user: profileReducer,
		certificate: certificateReducer,
		project: projectReducer,
		experience: experienceReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
