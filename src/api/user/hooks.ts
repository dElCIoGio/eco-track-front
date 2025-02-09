import {GetUserByFirebaseUIDProps, GetUserProjectsProps, GetUserProps} from "@/api/user/types"
import {getUser, getUserActions, getUserByFirebaseUID} from "@/api/user/handlers.ts";
import {SustainabilityApiToDomainConverter, UserApiToDomainConverter} from "@/lib/converters.ts";
import {SustainabilityAction} from "@/models/domain.ts";
import {useQuery, useQueryClient} from "@tanstack/react-query";



export function useGetUser(values: GetUserProps){

    const queryKey = ["useCreateUser", values.id]

    return useQuery({
        queryKey,
        queryFn: () => getUser({id: values.id})
            .then( data => {
                if (data)
                    return UserApiToDomainConverter(data)
                return data
            }),
    })
}


export function useGetUserByFirebaseUID(values: GetUserByFirebaseUIDProps){

    const queryKey = ["useGetUserByFirebaseUID", values.firebase_uid]

    return useQuery({
        queryKey,
        queryFn: () => getUserByFirebaseUID(values)
            .then( data => data),
    })
}


export function useGetUserActions(props: GetUserProjectsProps){
    const queryKey = ["useGetUserActions", props.id]

    const queryClient = useQueryClient();

    function addAction(newAction: SustainabilityAction){
        queryClient.setQueryData(
            queryKey,
            (oldData: SustainabilityAction[]) => [...oldData, newAction]
        )
    }

    function updateAction(updatedAction: SustainabilityAction){
        queryClient.setQueryData(
            queryKey,
            (oldData: SustainabilityAction[]) => oldData.map(action => {
                if (action.id === updatedAction.id)
                    return updatedAction
                return action
            }))
    }

    function deleteAction(id: string){
        queryClient.setQueryData(
            queryKey,
            (oldData: SustainabilityAction[]) => oldData.filter(action => action.id !== id)
        )
    }

    const query = useQuery({
        queryKey,
        queryFn: () => getUserActions({id: props.id})
            .then( data => {
                if (data)
                    return data.map((action) => SustainabilityApiToDomainConverter(action))
                return data
            }),
        enabled: !!props.id,
    })

    return {
        ...query,
        addAction: (newAction: SustainabilityAction) => addAction(newAction),
        updateAction: (updatedAction: SustainabilityAction) => updateAction(updatedAction),
        deleteAction: (id: string) => deleteAction(id),
    }
}