import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import BASE_URL from "modules/profile/const/url";

export const fetchProjects = createAsyncThunk(
	"project/fetchProjects",
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${BASE_URL}/project/all`
			);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue("Failed to fetch projects");
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

export const fetchProjectById = createAsyncThunk(
	"project/fetchProjectById",
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${BASE_URL}/project/${id}`
			);
			if (response.status === 200) {
				return response.data.data;
			} else {
				return rejectWithValue("Failed to fetch projects");
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
