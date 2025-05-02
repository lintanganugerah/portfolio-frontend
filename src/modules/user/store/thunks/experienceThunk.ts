import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchExperiences = createAsyncThunk(
	"project/fetchExperiences",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"https://profilebe.ngeengz.eu/api/v1/experience/all"
			);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue("Failed to fetch Experiences");
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				return rejectWithValue(axiosError.response?.data || "Axios error");
			}
			return rejectWithValue("Unexpected error");
		}
	}
);
