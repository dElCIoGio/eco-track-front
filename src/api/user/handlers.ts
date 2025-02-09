import {ENDPOINTS} from "@/api/user/endpoints.ts";
import {CONFIG} from "@/api/user/config.ts";
import {get, post} from "@/api/methods.ts";
import {SustainabilityActionApiResponse, UserApiResponse} from "@/models/api.ts";
import {CreateUserProps, GetUserByFirebaseUIDProps, GetUserProjectsProps, GetUserProps} from "@/api/user/types.ts";
import {UserApiToDomainConverter} from "@/lib/converters.ts";


export async function getUser({id}: GetUserProps) {
    const url = ENDPOINTS.GET_USER(id)
    const config = CONFIG.GET_USER()
    return await get<UserApiResponse>(url, config)
}


export async function getUserActions({id}: GetUserProjectsProps){
    if (!id) return
    const url = ENDPOINTS.GET_ALL_ACTIONS(id)
    const config = CONFIG.GET_ALL_ACTIONS()
    return await get<SustainabilityActionApiResponse[]>(url, config)
}


export async function getUserByFirebaseUID(props: GetUserByFirebaseUIDProps){
    const url = ENDPOINTS.GET_USER_BY_FIREBASE_UID(props.firebase_uid)
    const config = CONFIG.GET_USER_BY_FIREBASE_UID()
    const response = await get<UserApiResponse>(url, config)
    return response? UserApiToDomainConverter(response): response
}


export async function createUser(props: CreateUserProps){
    const url = ENDPOINTS.CREATE_USER()
    const config = CONFIG.CREATE_USER()
    const response: UserApiResponse = await post<UserApiResponse>(url, {...props}, config)
    return response? UserApiToDomainConverter(response): response
}