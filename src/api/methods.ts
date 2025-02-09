import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {API} from "@/api/utils.ts";


function handleResponse<T>(response: AxiosResponse<T>): T {
    return response.data;
}

function handleError(error: AxiosError) {
    switch (error.message) {
        case "Request failed with status code 404":
            return Promise.reject("endpoint not found");
        default:
            return Promise.reject("There was an error. Please try again later.");
    }
}

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
        const response = await API.get<T>(url, config);
        return handleResponse(response);
    } catch (error) {
        if (error instanceof AxiosError)
            throw await handleError(error);
        else {
            console.error(error);
            throw error;
        }
    }
}

export async function post<T>(url: string, data?: Record<string, unknown> | FormData, config?: AxiosRequestConfig): Promise<T> {
    try {
        const response = await API.post<T>(url, data, config);
        return handleResponse(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function put<T>(url: string, data?: Record<string, unknown> | FormData, config?: AxiosRequestConfig): Promise<T> {
    try {
        const response = await API.put<T>(url, data, config);
        return handleResponse(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
        const response = await API.delete<T>(url, config);
        return handleResponse(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
}