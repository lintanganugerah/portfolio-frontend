import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchProjects = createAsyncThunk(
	"user/fetchProjects",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"https://porto.ngeengz.eu/api/v1/project/all"
			);
			if (response.status === 200 && response.data.success) {
				console.log(response.data.data);

				return response.data.data;
			} else {
				return rejectWithValue(
					response.data.message || "Failed to fetch projects"
				);
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const axiosError = error as AxiosError;
				console.error("Axios error:", axiosError.message);
				if (axiosError.response) {
					console.error("Status:", axiosError.response.status);
					console.error("Data:", axiosError.response.data);
					return rejectWithValue(
						axiosError.response.data || "An error occurred"
					);
				} else if (axiosError.request) {
					console.error("No response received:", axiosError.request);
					return rejectWithValue("No response received from the server");
				}
			} else {
				console.error("An unexpected error occurred:", error);
				return rejectWithValue("An unexpected error occurred");
			}
		}
	}
);
