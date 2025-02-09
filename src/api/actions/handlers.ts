import {ENDPOINTS} from "@/api/actions/endpoints.ts";
import {CONFIG} from "@/api/actions/config.ts";
import {del, post} from "@/api/methods.ts";
import {CreateActionsProps, DeleteActionsProps, UpdateActionsProps} from "@/api/actions/types";
import {SustainabilityActionApiResponse} from "@/models/api.ts";
import {SustainabilityApiToDomainConverter} from "@/lib/converters.ts";



export async function createAction(props: CreateActionsProps) {
    const url = ENDPOINTS.CREATE_ACTION(props.user_id)
    const config = CONFIG.CREATE_ACTION()
    const response = await post<SustainabilityActionApiResponse>(url, {...props}, config)
    return response? SustainabilityApiToDomainConverter(response): response
}

export async function updateAction(props: UpdateActionsProps){
    const url = ENDPOINTS.UPDATE_ACTION(props.id)
    const config = CONFIG.UPDATE_ACTION()
    return await post<boolean>(url, {
        user_id: props.user_id,
        title: props.title,
        description: props.description,
        category: props.category,
        points: props.points,
    }, config)
}


export async function deleteAction({id}: DeleteActionsProps){
    const url = ENDPOINTS.DELETE_ACTION(id)
    const config = CONFIG.DELETE_ACTION()
    return await del<boolean>(url, config)
}