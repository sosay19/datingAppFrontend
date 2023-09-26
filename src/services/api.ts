// api.ts

import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the base URL for your API
const baseURL = 'https://api.example.com'; // Replace with your API's base URL

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL,
  timeout: 5000, // Adjust the timeout as needed
});

// Define a custom Axios response type with your API's response structure
interface ApiResponse<T> {
  data: T;
}

// Define a custom Axios error type
interface ApiError {
  message: string;
}

// Function to make a GET request to your API
export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.get(url);
    return response.data.data;
  } catch (error) {
    // Handle errors, e.g., logging or showing a user-friendly error message
    const axiosError = error as AxiosError<ApiError>;
    throw new Error(axiosError.message);
  }
};

// Function to make a POST request to your API
export const postData = async <T>(url: string, data: any): Promise<T> => {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await api.post(url, data);
    return response.data.data;
  } catch (error) {
    // Handle errors
    const axiosError = error as AxiosError<ApiError>;
    throw new Error(axiosError.message);
  }
};

// Add more API functions for PUT, DELETE, or other HTTP methods as needed
