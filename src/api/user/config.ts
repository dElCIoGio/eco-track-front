import {AxiosRequestConfig} from "axios";
import {baseConfig} from "@/api/utils.ts";


export const CONFIG = {
    GET_USER: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    CREATE_USER: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    UPDATE_USER: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    DELETE_USER: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    GET_ALL_ACTIONS: (): AxiosRequestConfig => ({
        ...baseConfig,
    }),
    GET_USER_BY_FIREBASE_UID: (): AxiosRequestConfig => ({
        ...baseConfig,
    })

}