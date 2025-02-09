import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {config} from "@/core/config.ts";

const baseUrl: string = config.app.backend_url;


export const baseConfig: AxiosRequestConfig = {
    headers: {
        "Accept": "application/json"
    }
};

export const API = axios.create({
    baseURL: `${baseUrl}`
})

export async function handleError(error: AxiosError) {
    try {
        const errorMessage =
            error.message || "An error occurred"
        return Promise.reject(errorMessage)
    } catch (err) {
        throw new Error(`An error occurred: ${err}`)
    }
}

