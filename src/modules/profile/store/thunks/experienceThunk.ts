import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import BASE_URL from "modules/profile/const/url";

export const fetchExperiences = createAsyncThunk(
	"project/fetchExperiences",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${BASE_URL}/experience/all`
			);
			console.log(response);
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
