import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../thunks/projectThunk";

interface Project {
	_id: string;
	title: string;
	description: {
		time: number;
		blocks: Array<{
			type: string;
			data: any;
		}>;
	};
	technology: string;
	project_thumbnail_image: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface ProjectState {
	projects: Project[];
	loading: boolean;
	error: string | null;
}

const initialState: ProjectState = {
	projects: [],
	loading: false,
	error: null,
};

const projectSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProjects.fulfilled, (state, action) => {
				state.loading = false;
				state.projects = action.payload;
			})
			.addCase(fetchProjects.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default projectSlice.reducer;
