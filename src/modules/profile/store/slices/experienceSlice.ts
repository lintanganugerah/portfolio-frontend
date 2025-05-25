import { createSlice } from "@reduxjs/toolkit";
import { fetchExperiences } from "../thunks/experienceThunk";
import { EditorJsContent } from "modules/profile/types/editor";

interface Experience {
	_id: string;
	entity: string;
	position: string;
	description: EditorJsContent;
	type: string;
	startDate: Date;
	endDate: Date;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

interface ExperienceState {
	experiences: Experience[];
	loading: boolean;
	error: string | null;
}

const initialState: ExperienceState = {
	experiences: [],
	loading: false,
	error: null,
};

const ExperienceSlice = createSlice({
	name: "Experience",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchExperiences.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchExperiences.fulfilled, (state, action) => {
				state.loading = false;
				state.experiences = action.payload;
			})
			.addCase(fetchExperiences.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const experienceReducer = ExperienceSlice.reducer;
