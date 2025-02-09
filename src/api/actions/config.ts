import {AxiosRequestConfig} from "axios";
import {baseConfig} from "@/api/utils.ts";


export const CONFIG = {
    CREATE_ACTION: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    UPDATE_ACTION: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    DELETE_ACTION: (): AxiosRequestConfig => ({
        ...baseConfig,
    })
}